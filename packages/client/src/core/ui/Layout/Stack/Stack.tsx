import React, { FC } from "react";
import { Alignable, Spacable } from "../util";
import { Box, neg } from "virtual-box";

export type Props = Spacable & Alignable;

export const Stack: FC<Props> = ({ children, align, spacing = "small" }) => {
    const filteredChildren = React.Children.toArray(children).filter(Boolean);

    if (filteredChildren.length === 0) {
        return null;
    }

    const wrappedChildren = filteredChildren.map((child, i) => (
        <StackItem key={i} align={align} spacing={spacing}>
            {child}
        </StackItem>
    ));

    return <StackContainer spacing={spacing}>{wrappedChildren}</StackContainer>;
};

export const StackContainer: FC<Spacable> = ({ spacing, children }) => (
    <Box marginTop={neg(spacing)} maxWidth="full">
        {children}
    </Box>
);

export const StackItem: FC<Alignable & Spacable> = ({ spacing, align, children }) => (
    <Box
        display="flex"
        flexDirection="column"
        paddingTop={spacing}
        width="full"
        alignItems={align}
        // &:empty {
        //         display: none;
        //     }
    >
        {children}
    </Box>
);
