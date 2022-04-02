import type { Plugin } from "vite";
import { Options, Theme, Themes, TokenKey, VIRTUAL_MODULE_ID } from "./const";
import { light as defaultLight } from "./light";
import { dark as defaultDark } from "./dark";
import outdent from "outdent";
import {
    getCSSFileNames,
    getThemeFromCSSFilename,
    getThemeNames,
    tokenToVariableKey,
} from "./util";
import babelPlugin from "./babel";
import { transformAsync } from "@babel/core";

let initialised = false;
let themes: Themes = {};
let cssFileNames: string[] = [];
const init = (options: Options) => {
    // prepare themes
    const { light: lightAdjustments, dark: darkAdjustments, ...customThemes } = options;
    const light = { ...defaultLight, ...lightAdjustments };
    const dark = { ...defaultDark, ...darkAdjustments };
    themes = { light, dark, ...customThemes };
    cssFileNames = getCSSFileNames(getThemeNames(options));
};

export default function (options: Options = {}): Plugin {
    if (!initialised) {
        init(options);
        initialised = true;
    }

    return {
        name: VIRTUAL_MODULE_ID,
        enforce: "pre",
        resolveId(id) {
            if (id === VIRTUAL_MODULE_ID) {
                return VIRTUAL_MODULE_ID;
            }
            if (cssFileNames.indexOf(id) !== -1) {
                return cssFileNames[cssFileNames.indexOf(id)];
            }
        },
        load(id) {
            // Generate JS
            if (id === VIRTUAL_MODULE_ID) {
                return makeModuleContent(options);
            }

            // Generate CSS theme files
            if (cssFileNames.indexOf(id) !== -1) {
                const themeName = getThemeFromCSSFilename(id);
                if (!themeName) {
                    throw new Error(`Could not get themeName from ${id}`);
                }
                const theme = themes[themeName];
                if (!theme) {
                    throw new Error(`Could not find theme: ${themeName}`);
                }
                return makeCSSContent(themeName, theme);
            }
        },
        async transform(src, id) {
            if (!src.includes(VIRTUAL_MODULE_ID)) {
                return {
                    code: src,
                    map: null, // provide source map if available
                };
            }

            const newCode = await transformAsync(src, {
                plugins: [["@babel/plugin-syntax-typescript", { isTSX: true }], babelPlugin],
            });

            return {
                code: newCode?.code || src,
                map: newCode?.map, // provide source map if available
            };
        },
    };
}

/**
 * Creates the java module which:
 * 1. imports the required theme css files
 * 2. exports theme keys e.g. light, dark, etc.
 * 3. exports tokens constants
 */
function makeModuleContent(options: Options) {
    const themeNames = getThemeNames(options);
    const cssFileNames = getCSSFileNames(themeNames);

    // Import CSS
    const importCssFiles = cssFileNames.map((cssFileName) => `import "${cssFileName}";`).join("\n");

    // ThemeKeys
    const themeKeyAttributes = Object.keys(themes)
        .map((theme) => `${theme}: '${theme}'`)
        .join(",\n");
    const themeKeysExport = `export const themes = {${themeKeyAttributes}};`;

    // Token Function
    // Placeholder function that is replaced during vites transform lifecycle hook
    const tokenFnExport = `export const token = (tokenKey, fallback) => ""`;

    return outdent`
    ${importCssFiles}
    ${themeKeysExport}
    ${tokenFnExport}
    `;
}

/**
 * Creates the content for a theme's css file. E.g. the content for light.css
 */
const makeCSSContent = (themeName: string, theme: Theme) => {
    const tokens = Object.keys(theme) as Array<TokenKey>;

    const variables = tokens
        .map((token) => `${tokenToVariableKey(token)}:  ${theme[token]};`)
        .join("\n");
    return outdent`
    html[data-theme=${themeName}] {
        ${variables}
    }`;
};
