/******************************
 * Alignment
 ******************************/

import { Theme } from "src/core/theme/theme";

export type Align = "start" | "center";

export interface Alignable {
    align?: Align;
}

const alignToFlexAlignLookup = {
    start: "initial",
    center: "center",
} as const;

export const getAlignment = (align: Align = "start") =>
    alignToFlexAlignLookup[align] ?? alignToFlexAlignLookup.start;

/******************************
 * Spacing
 ******************************/
export type Spacing =
    | "none"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";

const spacingMultiplier = {
    none: 0,
    xxsmall: 0.25,
    xsmall: 0.5,
    small: 1,
    medium: 2,
    large: 4,
    xlarge: 8,
    xxlarge: 16,
} as const;

export const getSpacing = (base: number, spacing: Spacing = "small") => {
    const mutiplier = spacingMultiplier[spacing] ?? 1;
    return base * mutiplier;
};

export interface Spacable {
    spacing?: Spacing;
}

export interface TRBLSpacable {
    spacingTop?: Spacing;
    spacingRight?: Spacing;
    spacingBottom?: Spacing;
    spacingLeft?: Spacing;
}

/******************************
 * Component
 ******************************/
export type Component =
    | "article"
    | "aside"
    | "details"
    | "div"
    | "main"
    | "section"
    | "pre"
    | "ol"
    | "ul";

export interface Componentable {
    component?: Component;
}

/******************************
 * Size
 ******************************/
export type Size = "full";

const sizeMap = {
    full: "100%",
} as const;

export const getSizing = (size?: Size) => {
    return (size && sizeMap[size]) || "";
};

export interface Sizable {
    size?: Size;
}

export interface WidthSizable {
    width?: Size;
}

export interface HeightSizable {
    height?: Size;
}

/******************************
 * Background
 ******************************/
export type Background = "lighter" | "main" | "darker";

export interface Backgroundable {
    background?: Background;
}

export const getBackground = (background: Background, theme: Theme) => {
    return theme.palette.background[background];
};
