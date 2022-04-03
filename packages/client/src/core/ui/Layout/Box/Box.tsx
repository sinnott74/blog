import React, { FC } from "react";
import { styled } from "@compiled/react";
import {
    Spacable,
    Alignable,
    getSpacing,
    getAlignment,
    Componentable,
    WidthSizable,
    HeightSizable,
    TRBLSpacable,
    getSizing,
    getBackground,
    Backgroundable,
    getResponsive,
    Align,
    Size,
    Spacing,
    MaxWidth,
    MaxWidthable,
    getMaxWidth,
    Display,
    getDisplay,
    Displayable,
} from "../util";
import CSS from "csstype";
import { token } from "virtual:theme";

export type Props = {
    className?: string;
    // style?: CSS.Properties;
    accent?: boolean;
    backgroundColor?: string;
} & Spacable &
    Alignable &
    Componentable &
    WidthSizable &
    HeightSizable &
    TRBLSpacable &
    Backgroundable &
    MaxWidthable &
    Displayable;

export const Box: FC<Props> = ({ component, ...rest }) => <BoxInner as={component} {...rest} />;

// export const BoxInner = styled.div<Props>`
//     position: relative;
//     ${(props) => props.width && getResponsive<Size>("width", getSizing, props.width)}
//     ${(props) => props.height && getResponsive<Size>("height", getSizing, props.height)}
//     ${(props) => getResponsive<Display>("display", getDisplay, props.display)}
//     flex-direction: column;
//     overflow: auto;
//     ${(props) => getResponsive<Align>("align-items", getAlignment, props.align)}
//     ${(props) => getResponsive<Spacing>("padding", getSpacing(), props.spacing)}
//     ${(props) =>
//         props.spacingTop && getResponsive<Spacing>("padding-top", getSpacing(), props.spacingTop)}
//     ${(props) =>
//         props.spacingRight &&
//         getResponsive<Spacing>("padding-right", getSpacing(), props.spacingRight)}
//     ${(props) =>
//         props.spacingBottom &&
//         getResponsive<Spacing>("padding-bottom", getSpacing(), props.spacingBottom)}
//     ${(props) =>
//         props.spacingLeft &&
//         getResponsive<Spacing>("padding-left", getSpacing(), props.spacingLeft)}
//     margin: 0;
//     background-color: ${(props) => props.background && getBackground(props.background)};
//     ${(props) =>
//         props.maxWidth && getResponsive<MaxWidth>("max-width", getMaxWidth, props.maxWidth)}
//     border-left: ${(props) =>
//         props.accent &&
//         `calc(${token("spacing")} / 2) solid ${token("color-background-boldBrand-resting")}`};
// `;
export const BoxInner = styled.div<Props>`
    position: relative;
    margin: 0;
    flex-direction: column;
    overflow: auto;
`;
