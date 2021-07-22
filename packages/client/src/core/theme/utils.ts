import deepmerge from "deepmerge";
import { Theme } from "./theme";
// import cloneDeep from "lodash.clonedeep";

type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;

export const merge = (baseTheme: Theme, overrides: DeepPartial<Theme>) =>
    deepmerge(baseTheme, overrides) as Theme;

// const clone = (theme: Theme): Theme => {
//     // return cloneDeep(theme);
// };

interface CSSVariableTheme {
    theme: Theme;
    variables: CSSVariables;
}

export interface CSSVariables {
    [variable: string]: string | number;
}

interface StringKeyedObject {
    [key: string]: string | number | object;
}

// /**
//  * Converts a theme into a css varibles object e.g. {"--palette-primary-main: 'some color', ..."}
//  * And creates a Theme object with the value replaces by the variable names;
//  */
// export const createCSSVariablesTheme = (theme: Theme): CSSVariableTheme => {
//     const variableTheme = clone(theme);
//     const variables: CSSVariables = {};

//     const recursive = (parent: StringKeyedObject, key: string, variable: string) => {
//         const value = parent[key];
//         if (typeof value === "object" && value !== null) {
//             for (let k in value) {
//                 if (value.hasOwnProperty(k)) {
//                     recursive(value as StringKeyedObject, k, `${variable}-${k}`);
//                 }
//             }
//         } else {
//             variables[variable.toLowerCase()] = value as string | number;
//             parent[key] = variable.toLowerCase();
//         }
//     };

//     recursive({ variableTheme }, "variableTheme", "-");

//     return { theme: variableTheme, variables };
// };
