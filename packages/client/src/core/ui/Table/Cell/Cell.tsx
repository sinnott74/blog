import React, { FC } from "react";
import { Box } from "../../Layout";
import { Text } from "../../Typography/Typography";

interface Props {}

const InnerCell: FC<Props> = ({ children }) => (
    <Box>
        <Text>{children}</Text>
    </Box>
);

export const DataCell: FC<Props> = ({ children }) => (
    <td>
        <InnerCell>{children}</InnerCell>
    </td>
);

export const HeaderCell: FC<Props> = ({ children }) => (
    <th>
        <InnerCell>{children}</InnerCell>
    </th>
);
