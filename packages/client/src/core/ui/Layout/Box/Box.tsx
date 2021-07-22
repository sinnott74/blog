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
} from "../util";
import CSS from "csstype";

export type Props = { className?: string; style?: CSS.Properties } & Spacable &
    Alignable &
    Componentable &
    WidthSizable &
    HeightSizable &
    TRBLSpacable &
    Backgroundable;

export const Box: FC<Props> = (props) => <BoxInner as={props.component} {...props} />;

export const BoxInner = styled.div<Props>`
    position: relative;
    width: ${({ width }) => getSizing(width)};
    height: ${({ height }) => getSizing(height)};
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: ${({ align }) => getAlignment(align)};
    padding: ${(props) => getSpacing(props.theme.spacing, props.spacing) + "px"};
    padding-top: ${(props) =>
        props.spacingTop ? getSpacing(props.theme.spacing, props.spacingTop) + "px" : ""};
    padding-right: ${(props) =>
        props.spacingRight ? getSpacing(props.theme.spacing, props.spacingRight) + "px" : ""};
    padding-bottom: ${(props) =>
        props.spacingBottom ? getSpacing(props.theme.spacing, props.spacingBottom) + "px" : ""};
    padding-left: ${(props) =>
        props.spacingLeft ? getSpacing(props.theme.spacing, props.spacingLeft) + "px" : ""};
    margin: 0;
    background-color: ${(props) =>
        props.background && getBackground(props.background, props.theme)};
`;
