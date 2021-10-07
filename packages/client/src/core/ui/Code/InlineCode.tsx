import React, { FC } from "react";
import { Box } from "../Layout";
import { Code } from "../Typography/Typography";

interface Props {
    className?: string;
    children: string;
}

export const InlineCode: FC<Props> = (props) => (
    <Box display="inline" spacing="xxsmall" background="darker" {...props}>
        <Code {...props} />
    </Box>
);
