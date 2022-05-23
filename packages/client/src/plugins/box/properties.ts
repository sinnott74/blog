import { Screen, ResponsiveValue } from "./responsive";

/******************************
 * Spacing
 ******************************/
const spacingOptions = [
    "none",
    "xxsmall",
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
] as const;
export type PositiveSpacing = typeof spacingOptions[number];
export type NegativeSpacing = `-${PositiveSpacing}`;
export type Spacing = PositiveSpacing | NegativeSpacing;

export type NegFn = (
    space?: ResponsiveValue<PositiveSpacing>,
) => ResponsiveValue<NegativeSpacing> | undefined;

export const neg: NegFn = (space) => {
    if (space == null) {
        return space;
    }
    if (typeof space === "string") {
        return `-${space}` as NegativeSpacing;
    }

    return (Object.keys(space) as Array<Screen>).reduce((acc, screen) => {
        // @ts-ignore
        acc[screen] = `-${space[screen]}`;
        return acc;
    }, {} as ResponsiveValue<NegativeSpacing>);
};

const spacingRatios = {
    none: 0,
    xxsmall: 0.25,
    xsmall: 0.5,
    small: 1,
    medium: 2,
    large: 4,
    xlarge: 8,
    xxlarge: 16,
};

const negativeSpacingRatios = (Object.keys(spacingRatios) as Array<PositiveSpacing>).reduce(
    (acc, val) => {
        acc[`-${val}` as NegativeSpacing] = -spacingRatios[val];
        return acc;
    },
    {} as { [key in NegativeSpacing]: number },
);

const spacingRatioToSpacing = (spacingRatio: typeof spacingRatios | typeof negativeSpacingRatios) =>
    (Object.keys(spacingRatio) as Array<PositiveSpacing | NegativeSpacing>).reduce((acc, val) => {
        /**
         *
         *
         *
         *
         *
         * TODO
         *
         *
         *
         *
         *
         *
         */
        // @ts-ignore
        acc[val] = `${spacingRatio[val] * 8}px`;
        return acc;
    }, {} as { [key in keyof typeof spacingRatios]: string } | { [key in keyof typeof negativeSpacingRatios]: string });

const spacing = {
    ...spacingRatioToSpacing(spacingRatios),
};

const margins = {
    ...spacingRatioToSpacing(spacingRatios),
    ...spacingRatioToSpacing(negativeSpacingRatios),
};

export const properties = {
    position: ["relative"] as const,
    display: ["none", "flex", "block", "inline"] as const,
    width: { full: "100%" } as const,
    height: { full: "100%" } as const,
    margin: margins,
    marginTop: margins,
    marginRight: margins,
    marginBottom: margins,
    marginLeft: margins,
    padding: spacing,
    paddingTop: spacing,
    paddingRight: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    flexBasis: ["100%", "50%", "33.3%", "25%", "20%"] as const,
    flexWrap: ["nowrap", "wrap"] as const,
    flexDirection: ["row", "column"] as const,
    justifyContent: ["flex-start", "center", "flex-end", "space-between"] as const,
    alignItems: ["flex-start", "center", "flex-end", "stretch"] as const,
    overflow: ["auto", "scroll", "hidden", "clip"] as const,
    maxWidth: {
        none: "none",
        xsmall: "640px",
        small: "768px",
        medium: "1024px",
        large: "1920px",
        full: "100%",
    } as const,
};
