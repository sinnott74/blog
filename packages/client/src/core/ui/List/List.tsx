import React, { FC } from "react";
import { Box } from "../Layout";
import { Text } from "../Typography/Typography";

interface Props {}

export const ListItem: FC<Props> = ({ children }) => <Text as="li">{children}</Text>;
export const OrderedList: FC<Props> = ({ children }) => (
    <Box component="ol" spacing="none" spacingLeft="medium">
        {children}
    </Box>
);
export const UnorderedList: FC<Props> = ({ children }) => (
    <Box component="ul" spacing="none" spacingLeft="medium">
        {children}
    </Box>
);
