import CSS from "csstype";

/******************************
 * Repsonsive
 ******************************/
type AtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

export type Screens = "mobile" | "tablet" | "desktop" | "wide";
export type ScreenValues<P> = Record<Screens, P>;
export type Responsive<P> = P | AtLeastOne<ScreenValues<P>>;

const getResponsiveValue = <P>(screen: Screens, responsive?: Responsive<P>) => {
    if (typeof responsive === "object") {
        // @ts-ignore
        return responsive[screen] || undefined;
    }
    return responsive;
};

export const getResponsive = <P>(
    property: string,
    getValue: (p?: P) => string,
    responsive?: Responsive<P>,
) => {
    const fallback = getValue();
    const mobile = getValue(getResponsiveValue("mobile", responsive));
    const tablet = getValue(getResponsiveValue("tablet", responsive));
    const desktop = getValue(getResponsiveValue("desktop", responsive));
    const wide = getValue(getResponsiveValue("wide", responsive));

    return css`
        ${`${property}: ${fallback}`};

        @media (min-width: 1920px) {
            ${`${property}: ${wide}`};
        }
        @media (max-width: 1920px) {
            ${`${property}:${desktop}`};
        }
        @media (max-width: 1024px) {
            ${`${property}: ${tablet}`};
        }
        @media (max-width: 768px) {
            ${`${property}: ${mobile}`};
        }
    `;
};

/******************************
 * Alignment
 ******************************/

import { Theme } from "src/core/theme/theme";
import { css, CSSProperties } from "styled-components";

export type Align = "start" | "center";
export type RepsonsiveAlign = Responsive<Align>;

export interface Alignable {
    align?: RepsonsiveAlign;
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
export type RepsonsiveSpacing = Responsive<Spacing>;

const spacingRatios = {
    none: 0,
    xxsmall: 0.25,
    xsmall: 0.5,
    small: 1,
    medium: 2,
    large: 4,
    xlarge: 8,
    xxlarge: 16,
} as const;

export const getSpacing = (base: number, multiplier: number = 1) => (
    spacing: Spacing = "small",
) => {
    const spaceRatio = spacingRatios[spacing] ?? 1;
    return base * spaceRatio * multiplier + "px;";
};

export interface Spacable {
    spacing?: RepsonsiveSpacing;
}

export interface TRBLSpacable {
    spacingTop?: RepsonsiveSpacing;
    spacingRight?: RepsonsiveSpacing;
    spacingBottom?: RepsonsiveSpacing;
    spacingLeft?: RepsonsiveSpacing;
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
export type RepsonsiveSize = Responsive<Size>;

const sizeMap = {
    full: "100%",
} as const;

export const getSizing = (size?: Size) => {
    return (size && sizeMap[size]) || "";
};

export interface Sizable {
    size?: RepsonsiveSize;
}

export interface WidthSizable {
    width?: RepsonsiveSize;
}

export interface HeightSizable {
    height?: RepsonsiveSize;
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
