declare module "virtual:theme" {
    export const themes: import("./const").ExportedThemeKeys;
    export const token: import("./const").TokenFn;
}
