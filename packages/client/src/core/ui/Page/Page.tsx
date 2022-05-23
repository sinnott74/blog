import React, { useEffect, FC } from "react";
import Helmet from "react-helmet";
import { scrollTop } from "../../common/utils/scrollTo";
import { Box } from "../Layout";
import { Box as BoxX } from "virtual-box";

export interface Props {
    title: string;
}

export const Page: FC<Props> = ({ title, children }) => {
    useEffect(scrollTop, [title]);

    return (
        <Box
            width="full"
            display="flex"
            align="center"
            spacing={{ mobile: "xsmall", tablet: "medium", desktop: "medium", wide: "medium" }}
            spacingTop={{ mobile: "small", tablet: "medium", desktop: "medium", wide: "medium" }}
        >
            <Helmet>
                <title>{`${title} | DanielSinnott.com`}</title>
            </Helmet>
            {children}
        </Box>
    );
};
