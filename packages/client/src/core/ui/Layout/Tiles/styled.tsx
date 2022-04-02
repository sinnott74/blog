import styled from "styled-components/macro";
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

export const TilesContainer = styled.div<Spacable & WidthSizable>`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    width: ${(props) => props.width && getResponsive<Size>("width", getSizing, props.width)};
    ${(props) => getResponsive<Spacing>("margin-top", getSpacing(-1), props.spacing)}
    ${(props) => getResponsive<Spacing>("margin-left", getSpacing(-1), props.spacing)}
`;

interface ItemContainerProps {
    columns: Responsive<number>;
}
export const TilesItemContainer = styled.div<ItemContainerProps>`
    ${(props) =>
        getResponsive<number>("flex", (col: number = 1) => `0 0 ${100 / col}%`, props.columns)}
`;

export const TilesItem = styled.div<Spacable>`
    height: 100%;
    min-width: 0;
    ${(props) => getResponsive<Spacing>("padding-left", getSpacing(), props.spacing)}
    ${(props) => getResponsive<Spacing>("padding-top", getSpacing(), props.spacing)}
`;
