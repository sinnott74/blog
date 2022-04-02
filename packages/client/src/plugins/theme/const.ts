export const VIRTUAL_MODULE_ID = "virtual:theme";

export const tokenKeys = [
    "breakpoint-xs",
    "breakpoint-sm",
    "breakpoint-md",
    "breakpoint-lg",
    "breakpoint-xl",
    "color-accent-boldBlue",
    "color-accent-boldGreen",
    "color-accent-boldOrange",
    "color-accent-boldPurple",
    "color-accent-boldRed",
    "color-accent-boldTeal",
    "color-accent-subtleBlue",
    "color-accent-subtleGreen",
    "color-accent-subtleMagenta",
    "color-accent-subtleOrange",
    "color-accent-subtlePurple",
    "color-accent-subtleRed",
    "color-accent-subtleTeal",
    "color-background-sunken",
    "color-background-default",
    "color-background-card",
    "color-background-overlay",
    "color-background-selected-resting",
    "color-background-selected-hover",
    "color-background-selected-pressed",
    "color-background-blanket",
    "color-background-disabled",
    "color-background-boldBrand-resting",
    "color-background-boldBrand-hover",
    "color-background-boldBrand-pressed",
    "color-background-subtleBrand-resting",
    "color-background-subtleBrand-hover",
    "color-background-subtleBrand-pressed",
    "color-background-boldDanger-resting",
    "color-background-boldDanger-hover",
    "color-background-boldDanger-pressed",
    "color-background-subtleDanger-resting",
    "color-background-subtleDanger-hover",
    "color-background-subtleDanger-pressed",
    "color-background-boldWarning-resting",
    "color-background-boldWarning-hover",
    "color-background-boldWarning-pressed",
    "color-background-subtleWarning-resting",
    "color-background-subtleWarning-hover",
    "color-background-subtleWarning-pressed",
    "color-background-boldSuccess-resting",
    "color-background-boldSuccess-hover",
    "color-background-boldSuccess-pressed",
    "color-background-subtleSuccess-resting",
    "color-background-subtleSuccess-hover",
    "color-background-subtleSuccess-pressed",
    "color-background-boldDiscovery-resting",
    "color-background-boldDiscovery-hover",
    "color-background-boldDiscovery-pressed",
    "color-background-subtleDiscovery-resting",
    "color-background-subtleDiscovery-hover",
    "color-background-subtleDiscovery-pressed",
    "color-background-boldNeutral-resting",
    "color-background-boldNeutral-hover",
    "color-background-boldNeutral-pressed",
    "color-background-transparentNeutral-hover",
    "color-background-transparentNeutral-pressed",
    "color-background-subtleNeutral-resting",
    "color-background-subtleNeutral-hover",
    "color-background-subtleNeutral-pressed",
    "color-background-subtleBorderedNeutral-resting",
    "color-background-subtleBorderedNeutral-pressed",
    "color-border-focus",
    "color-border-neutral",
    "color-iconBorder-brand",
    "color-iconBorder-danger",
    "color-iconBorder-warning",
    "color-iconBorder-success",
    "color-iconBorder-discovery",
    "color-overlay-hover",
    "color-overlay-pressed",
    "color-text-selected",
    "color-text-highEmphasis",
    "color-text-mediumEmphasis",
    "color-text-lowEmphasis",
    "color-text-onBold",
    "color-text-onBoldWarning",
    "color-text-link-resting",
    "color-text-link-pressed",
    "color-text-brand",
    "color-text-warning",
    "color-text-danger",
    "color-text-success",
    "color-text-discovery",
    "color-text-disabled",
    "shadow-resting",
    "shadow-hover",
    "shadow-pressed",
    "shadow-overlay",
    "spacing",
    "typography-fontFamily",
    "typography-fontSize",
    "utility-UNSAFE_util-transparent",
    "utility-UNSAFE_util-MISSING_TOKEN",
] as const;

export const common = {
    "breakpoint-xs": "640px",
    "breakpoint-sm": "768px",
    "breakpoint-md": "1024px",
    "breakpoint-lg": "1280px",
    "breakpoint-xl": "1920px",
    spacing: "8px",
    "typography-fontFamily": [
        "HAvenir",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
    ].join(","),
    "typography-fontSize": "16px",
};

export type Options = {
    light?: Partial<Theme>;
    dark?: Partial<Theme>;
} & {
    [key: string]: Theme;
};

export type TokenKey = typeof tokenKeys[number];

export type CSSVariableTokenValue = `--${TokenKey}`;

export type TokenExportKey = `${Uppercase<TokenKey>}`;

export type Tokens = {
    [key in TokenExportKey]: string;
};

export type Theme = {
    [key in TokenKey]: string | number;
};

export type Themes = {
    [key: string]: Theme;
};

export type ExportedThemeKeys = {
    light: string;
    dark: string;
    [key: string]: string;
};

export type TokenFn = (tokenKey: TokenKey, fallback?: string) => string;
