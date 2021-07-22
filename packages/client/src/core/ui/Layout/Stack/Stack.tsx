import React, { ReactNode } from "react";
import { StackContainer, StackItem } from "./styled";
import { Align, Spacing } from "../util";

export interface Props {
    children?: ReactNode;
    align?: Align;
    spacing?: Spacing;
}

export const Stack = React.forwardRef<HTMLDivElement, Props>(
    ({ children, align, spacing }, ref) => {
        const wrappedChildren = React.Children.map(children, (child) => (
            <StackItem spacing={spacing}>{child}</StackItem>
        ));
        return (
            <StackContainer ref={ref} align={align} spacing={spacing}>
                {wrappedChildren}
            </StackContainer>
        );
    },
);
