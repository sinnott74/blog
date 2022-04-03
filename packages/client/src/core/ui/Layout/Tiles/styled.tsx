import { styled } from "@compiled/react";
import {
    getSpacing,
    Spacable,
    getResponsive,
    Spacing,
    Responsive,
    Size,
    getSizing,
    WidthSizable,
} from "../util";

interface ItemContainerProps {
    columns: Responsive<number>;
}
// export const TilesItemContainer = styled.div<ItemContainerProps>`
//     ${(props) =>
//         getResponsive<number>("flex", (col: number = 1) => `0 0 ${100 / col}%`, props.columns)}
// `;

// export const TilesItem = styled.div<Spacable>`
//     height: 100%;
//     min-width: 0;
//     ${(props) => getResponsive<Spacing>("padding-left", getSpacing(), props.spacing)}
//     ${(props) => getResponsive<Spacing>("padding-top", getSpacing(), props.spacing)}
// `;

// export const TilesContainer = styled.div<Spacable & WidthSizable>`
//     display: flex;
//     flex-wrap: wrap;
//     align-items: stretch;
//     justify-content: center;
//     width: ${(props) => props.width && getResponsive<Size>("width", getSizing, props.width)};
//     ${(props) => getResponsive<Spacing>("margin-top", getSpacing(-1), props.spacing)}
//     ${(props) => getResponsive<Spacing>("margin-left", getSpacing(-1), props.spacing)}
// `;

export const TilesItemContainer = styled.div<ItemContainerProps>``;

export const TilesItem = styled.div<Spacable>`
    height: 100%;
    min-width: 0;
`;

export const TilesContainer = styled.div<Spacable & WidthSizable>`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
`;
