import React, { ReactNode } from "react";
import { StackContainer, StackItem } from "./styled";
import { Alignable, Spacable } from "../util";

export type Props = {
    children?: ReactNode;
} & Spacable &
    Alignable;

export const Stack = React.forwardRef<HTMLDivElement, Props>(
    ({ children, align, spacing }, ref) => {
        const wrappedChildren = React.Children.map(children, (child) => (
            <StackItem align={align} spacing={spacing}>
                {child}
            </StackItem>
        ));
        return (
            <StackContainer ref={ref} spacing={spacing}>
                {wrappedChildren}
            </StackContainer>
        );
    },
);