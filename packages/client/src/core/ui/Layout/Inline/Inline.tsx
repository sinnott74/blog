import React, { FC } from "react";
import { Box, neg } from "virtual-box";
import { Alignable, Spacable } from "../util";

export type Props = Spacable & Alignable;

export const Inline: FC<Props> = ({ children, spacing = "small", align }) => {
    const filteredChildren = React.Children.toArray(children).filter(Boolean);

    if (filteredChildren.length === 0) {
        return null;
    }

    const wrappedChildren = filteredChildren.map((child, i) => (
        <InlineItem key={i} spacing={spacing}>
            {child}
        </InlineItem>
    ));

    return (
        <InlineContainer spacing={spacing} align={align}>
            {wrappedChildren}
        </InlineContainer>
    );
};

const InlineContainer: FC<Spacable & Alignable> = ({ spacing, align, children }) => (
    <Box
        marginLeft={neg(spacing)}
        marginTop={neg(spacing)}
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent={align}
    >
        {children}
    </Box>
);

const InlineItem: FC<Spacable & Alignable> = ({ spacing, children }) => (
    <Box paddingLeft={spacing} paddingTop={spacing} display="block" justifyContent="flex-start">
        {children}
    </Box>
);
