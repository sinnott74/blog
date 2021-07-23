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
        const filteredChildren = React.Children.toArray(children).filter(Boolean);

        if (filteredChildren.length === 0) {
            return null;
        }

        const wrappedChildren = filteredChildren.map((child) => (
            <InlineItem spacing={spacing}>{child}</InlineItem>
        ));

        return (
            <InlineContainer ref={ref} spacing={spacing} align={align}>
                {wrappedChildren}
            </InlineContainer>
        );
    },
);
