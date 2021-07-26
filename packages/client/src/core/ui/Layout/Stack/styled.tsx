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

export const StackContainer = styled.div<Spacable>`
    ${(props) =>
        getResponsive<Spacing>("margin-top", getSpacing(props.theme.spacing, -1), props.spacing)}
    max-width: 100%;
`;

export const StackItem = styled.div<Alignable & Spacable>`
    ${(props) =>
        getResponsive<Spacing>("padding-top", getSpacing(props.theme.spacing), props.spacing)}
    width: 100%;
    display: flex;
    flex-direction: column;
    ${(props) => getResponsive<Align>("align-items", getAlignment, props.align)}
    &:empty {
        display: none;
    }
`;
