import React, { ReactNode } from "react";
import { Spacing } from "../util";
import { TilesContainer, TilesItemContainer, TilesItem } from "./styled";

export interface Props {
    columns: number;
    children?: ReactNode;
    spacing?: Spacing;
}

export const Tiles = React.forwardRef<HTMLDivElement, Props>(
    ({ children, columns = 1, spacing }, ref) => {
        const percentageWidth = 100 / columns;
        const wrappedChildren = React.Children.map(children, (child) => (
            <TilesItemContainer percentageWidth={percentageWidth}>
                <TilesItem spacing={spacing}>{child}</TilesItem>
            </TilesItemContainer>
        ));
        return (
            <TilesContainer ref={ref} spacing={spacing}>
                {wrappedChildren}
            </TilesContainer>
        );
    },
);
