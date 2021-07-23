import React, { FC } from "react";
import Helmet from "react-helmet";
import { Box } from "../Layout";

export interface Props {
    title: string;
}

export const Page: FC<Props> = ({ title, children }) => {
    return (
        <Box
            align="center"
            width="full"
            spacing={{ mobile: "xsmall", tablet: "medium", desktop: "medium", wide: "medium" }}
        >
            <Helmet>
                <title>{`${title} | DanielSinnott.com`}</title>
            </Helmet>
            {children}
        </Box>
    );
};