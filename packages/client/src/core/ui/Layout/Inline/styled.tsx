import styled from "styled-components/macro";
import {
    Align,
    Alignable,
    getAlignment,
    getResponsive,
    getSpacing,
    Spacable,
    Spacing,
} from "../util";

export const InlineContainer = styled.div<Spacable & Alignable>`
    ${(props) =>
        getResponsive<Spacing>("margin-left", getSpacing(props.theme.spacing, -1), props.spacing)}
    ${(props) =>
        getResponsive<Spacing>("margin-top", getSpacing(props.theme.spacing, -1), props.spacing)}
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    ${(props) => getResponsive<Align>("justify-content", getAlignment, props.align)}
`;

export const InlineItem = styled.div<Spacable>`
    justify-content: flex-start;
    display: block;
    min-width: 0;
    ${(props) =>
        getResponsive<Spacing>("padding-left", getSpacing(props.theme.spacing), props.spacing)}
    ${(props) =>
        getResponsive<Spacing>("padding-top", getSpacing(props.theme.spacing), props.spacing)}
`;
