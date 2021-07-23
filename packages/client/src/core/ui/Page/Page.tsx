import React, { FC } from "react";
import Helmet from "react-helmet";
import { useScrollTop } from "../../common/utils/scrollTo";
import { Box } from "../Layout";

export interface Props {
    title: string;
}

export const Page: FC<Props> = ({ title, children }) => {
    useScrollTop();

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
