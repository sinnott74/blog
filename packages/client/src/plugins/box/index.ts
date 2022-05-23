import { outdent } from "outdent";
import type { Plugin } from "vite";
import { VIRTUAL_MODULE_ID } from "./const";
import { properties, neg } from "./properties";
import { Screen, screenMediaQueryMap, screens } from "./responsive";

type StyledRuleOption = string;
type PropertyName = string;

const toStyledRule = (property: PropertyName, option: StyledRuleOption) =>
    `props.${property} === "${option}" && css({"${property}": "${option}"})`;

const toMediaQueryStyledRule = (screen: Screen, property: PropertyName, option: StyledRuleOption) =>
    `props.${property}?.${screen} === "${option}" && css({"@media ${screenMediaQueryMap[screen]}": {"${property}": "${option}"}})`;

function makeModuleContent() {
    // Import React library
    const importReact = `import React from "react";`;
    // Import CompiledCss library
    const importCompiledCssInJS = `import { styled, css } from "@compiled/react";`;

    const cssRules = (Object.keys(properties) as Array<keyof typeof properties>)
        .flatMap((property) => {
            const options = properties[property];

            if (Array.isArray(options)) {
                return options.flatMap((option) => {
                    return [
                        toStyledRule(property, option),
                        ...screens.map((screen) =>
                            toMediaQueryStyledRule(screen, property, option),
                        ),
                    ];
                });
            }

            return Object.keys(options).flatMap((key) => {
                //@ts-ignore any
                const val = options[key];

                return [
                    `props.${property} === "${key}" && css({"${property}": "${val}"})`,
                    ...screens.map(
                        (screen) =>
                            `props.${property}?.${screen} === "${key}" && css({"@media ${screenMediaQueryMap[screen]}": {"${property}": "${val}"}})`,
                    ),
                ];
            });
        })
        .map((body) => `\${(props) => ${body}}`)
        .join(";\n");

    const exportBox = `export const Box = styled.div\`
        ${cssRules}
    \``;

    const setBoxDisplayName = `Box.displayName = "Box"`;

    const exportNegSpaceFn = `export const neg = ${neg.toString()}`;

    return outdent`
    ${importReact}
    ${importCompiledCssInJS}
    ${exportBox}
    ${setBoxDisplayName}
    ${exportNegSpaceFn}
    `;
}

interface Options {}

export default function ({}: Options = {}): Plugin {
    return {
        name: VIRTUAL_MODULE_ID,
        enforce: "pre",
        resolveId(id) {
            if (id.includes(VIRTUAL_MODULE_ID)) {
                return `${VIRTUAL_MODULE_ID}.tsx`;
            }
        },
        load(id) {
            if (id.includes(VIRTUAL_MODULE_ID)) {
                return makeModuleContent();
            }
        },
    };
}
