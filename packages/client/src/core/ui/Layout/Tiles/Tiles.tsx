import React, { ReactNode } from "react";
import { Spacable, Responsive } from "../util";
import { TilesContainer, TilesItemContainer, TilesItem } from "./styled";

export type Props = {
    columns: Responsive<number>;
    children?: ReactNode;
} & Spacable;

export const Tiles = React.forwardRef<HTMLDivElement, Props>(
    ({ children, columns = 1, spacing }, ref) => {
        const wrappedChildren = React.Children.map(children, (child) => (
            <TilesItemContainer columns={columns}>
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
