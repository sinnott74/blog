import styled from "styled-components/macro";
import { getSpacing, Spacable } from "../util";

export const TilesContainer = styled.div<Spacable>`
    margin-left: ${(props) => getSpacing(props.theme.spacing, props.spacing) * -1 + "px"};
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
`;

interface ItemContainerProps {
    percentageWidth: number;
}
export const TilesItemContainer = styled.div<ItemContainerProps>`
    flex: ${(props) => `0 0 ${props.percentageWidth}%`};
`;

export const TilesItem = styled.div<Spacable>`
    height: 100%;
    padding-left: ${(props) => getSpacing(props.theme.spacing, props.spacing) + "px"};
    padding-top: ${(props) => getSpacing(props.theme.spacing, props.spacing) + "px"};
    min-width: 0;
`;
