import { styled } from "@compiled/react";
import {
    Align,
    Alignable,
    getAlignment,
    getResponsive,
    getSpacing,
    Spacable,
    Spacing,
} from "../util";

// export const InlineContainer = styled.div<Spacable & Alignable>`
//     ${(props) => getResponsive<Spacing>("margin-left", getSpacing(-1), props.spacing)}
//     ${(props) => getResponsive<Spacing>("margin-top", getSpacing(-1), props.spacing)}
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: row;
//     ${(props) => getResponsive<Align>("justify-content", getAlignment, props.align)}
// `;

// export const InlineItem = styled.div<Spacable>`
//     justify-content: flex-start;
//     display: block;
//     min-width: 0;
//     ${(props) => getResponsive<Spacing>("padding-left", getSpacing(), props.spacing)}
//     ${(props) => getResponsive<Spacing>("padding-top", getSpacing(), props.spacing)}
// `;

export const InlineContainer = styled.div<Spacable & Alignable>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const InlineItem = styled.div<Spacable>`
    justify-content: flex-start;
    display: block;
    min-width: 0;
`;
