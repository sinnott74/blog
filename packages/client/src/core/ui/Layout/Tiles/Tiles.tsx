import React, { ReactNode } from "react";
import { Spacable, Responsive } from "../util";
import { TilesContainer, TilesItemContainer, TilesItem } from "./styled";

export type Props = {
    columns: Responsive<number>;
    children?: ReactNode;
} & Spacable;

export const Tiles = React.forwardRef<HTMLDivElement, Props>(
    ({ children, columns = 1, spacing }, ref) => {
        const filteredChildren = React.Children.toArray(children).filter(Boolean);

        if (filteredChildren.length === 0) {
            return null;
        }

        const wrappedChildren = filteredChildren.map((child, i) => (
            <TilesItemContainer key={i} columns={columns}>
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
