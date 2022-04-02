import { CSSVariableTokenValue, Options, TokenKey } from "./const";

const fileNamePrefix = "@virtual";
const fileNameSuffix = "css";
const regex = new RegExp(`${fileNamePrefix}\.([a-zA-Z_$][0-9a-zA-Z_$]*)\.${fileNameSuffix}`);

export const getCSSFileNames = (themeNames: string[]) =>
    themeNames.map((themeName) => `${fileNamePrefix}.${themeName}.${fileNameSuffix}`);

export const getThemeFromCSSFilename = (filename: string) => {
    return regex.exec(filename)?.[1];
};

export const getThemeNames = ({ light, dark, ...customThemes }: Options) => {
    const themes = { light, dark, ...customThemes };
    const themeNames = Object.keys(themes) as Array<keyof typeof themes>;
    return themeNames;
};

export const tokenToVariableKey = (token: TokenKey) => `--${token}` as CSSVariableTokenValue;
export const tokenToCssVar = (token: TokenKey) => `var(${tokenToVariableKey(token)})`;
