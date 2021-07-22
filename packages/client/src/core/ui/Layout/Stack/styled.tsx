import styled from "styled-components/macro";
import {
    getSpacing,
    Alignable,
    Spacable,
    getAlignment,
    getResponsive,
    Spacing,
    Align,
} from "../util";

export const StackContainer = styled.div<Alignable & Spacable>`
    display: flex;
    flex-direction: column;
    ${(props) => getResponsive<Align>("align-items", getAlignment, props.align)}
    ${(props) =>
        getResponsive<Spacing>("margin-top", getSpacing(props.theme.spacing, -1), props.spacing)}
`;

export const StackItem = styled.div<Spacable>`
    ${(props) =>
        getResponsive<Spacing>("padding-top", getSpacing(props.theme.spacing), props.spacing)}
`;
