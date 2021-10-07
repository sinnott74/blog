import React, { FC } from "react";
import styled from "styled-components/macro";
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

export type Props = { className?: string; style?: CSS.Properties } & Spacable &
    Alignable &
    Componentable &
    WidthSizable &
    HeightSizable &
    TRBLSpacable &
    Backgroundable &
    MaxWidthable &
    Displayable;

export const Box: FC<Props> = (props) => <BoxInner as={props.component} {...props} />;

export const BoxInner = styled.div<Props>`
    position: relative;
    ${(props) => getResponsive<Size>("width", getSizing, props.width)}
    ${(props) => getResponsive<Size>("height", getSizing, props.height)}
    ${(props) => getResponsive<Display>("display", getDisplay, props.display)}
    flex-direction: column;
    overflow: auto;
    ${(props) => getResponsive<Align>("align-items", getAlignment, props.align)}
    ${(props) => getResponsive<Spacing>("padding", getSpacing(props.theme.spacing), props.spacing)}
    ${(props) =>
        props.spacingTop
            ? getResponsive<Spacing>(
                  "padding-top",
                  getSpacing(props.theme.spacing),
                  props.spacingTop,
              )
            : ""}
    ${(props) =>
        props.spacingRight
            ? getResponsive<Spacing>(
                  "padding-right",
                  getSpacing(props.theme.spacing),
                  props.spacingRight,
              )
            : ""}
    ${(props) =>
        props.spacingBottom
            ? getResponsive<Spacing>(
                  "padding-bottom",
                  getSpacing(props.theme.spacing),
                  props.spacingBottom,
              )
            : ""}
    ${(props) =>
        props.spacingLeft
            ? getResponsive<Spacing>(
                  "padding-left",
                  getSpacing(props.theme.spacing),
                  props.spacingLeft,
              )
            : ""}
    margin: 0;
    background-color: ${(props) =>
        props.background && getBackground(props.background, props.theme)};
    ${(props) =>
        props.maxWidth ? getResponsive<MaxWidth>("max-width", getMaxWidth, props.maxWidth) : ""}
`;
