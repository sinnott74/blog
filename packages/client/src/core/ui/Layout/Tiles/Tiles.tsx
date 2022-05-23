import React, { FC } from "react";
import { Spacable, Responsive, WidthSizable } from "../util";
import { Box, neg } from "virtual-box";

export type Props = {
    columns: Responsive<number>;
} & Spacable &
    WidthSizable;

export const Tiles: FC<Props> = ({ children, columns = 1, spacing = "small" }) => {
    const filteredChildren = React.Children.toArray(children).filter(Boolean);

    if (filteredChildren.length === 0) {
        return null;
    }

    const wrappedChildren = filteredChildren.map((child, i) => (
        /**
         *
         *
         *
         *
         *
         * TODO
         *
         *
         *
         *
         *
         *
         */
        // @ts-ignore
        <TilesItemContainer key={i} columns={columns}>
            <TilesItem spacing={spacing}>{child}</TilesItem>
        </TilesItemContainer>
    ));

    return <TilesContainer spacing={spacing}>{wrappedChildren}</TilesContainer>;
};

export const TilesContainer: FC<Spacable & WidthSizable> = ({ width, spacing, children }) => (
    <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        width={width}
        marginTop={neg(spacing)}
        marginLeft={neg(spacing)}
    >
        {children}
    </Box>
);

export const TilesItem: FC<Spacable> = ({ spacing, children }) => (
    <Box
        height="full"
        paddingLeft={spacing}
        paddingTop={spacing}
        // minWidth=0
    >
        {children}
    </Box>
);

interface ItemContainerProps {
    columns: Responsive<1 | 2 | 3 | 4 | 5>;
}
export const TilesItemContainer: FC<ItemContainerProps> = ({ columns, children }) => {
    const flexBasis =
        typeof columns === "number"
            ? `${100 / columns}%`
            : Object.keys(columns).reduce((acc, key) => {
                  /**
                   *
                   *
                   *
                   *
                   *
                   * TODO
                   *
                   *
                   *
                   *
                   *
                   *
                   */
                  // @ts-ignore
                  acc[key] = `${100 / columns[key]}%`;
                  return acc;
              }, {});

    /**
     *
     *
     *
     *
     *
     * TODO
     *
     *
     *
     *
     *
     *
     */
    // @ts-ignore
    return <Box flexBasis={flexBasis}>{children}</Box>;
};
