import React, { ReactNode } from "react";
import { Align, Spacing } from "../util";
import { InlineContainer, InlineItem } from "./styled";

export interface Props {
    children?: ReactNode;
    spacing?: Spacing;
    align?: Align;
}

export const Inline = React.forwardRef<HTMLDivElement, Props>(
    ({ children, spacing, align }, ref) => {
        const wrappedChildren = React.Children.map(children, (child) => (
            <InlineItem spacing={spacing}>{child}</InlineItem>
        ));
        return (
            <InlineContainer ref={ref} spacing={spacing} align={align}>
                {wrappedChildren}
            </InlineContainer>
        );
    },
);
