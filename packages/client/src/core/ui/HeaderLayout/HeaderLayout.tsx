import React, { FC } from "react";
import { Header, Main } from "./styled";
import { ROUTES } from "../../../Routes";
import { Heading4 } from "../Typography/Typography";
import { Link } from "../Link/Link";
import { Box } from "../Layout";

interface Props {
    title?: String;
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export const HeaderLayout: FC<Props> = ({ title = "Sinnott", children, left, right }) => (
    <Box height="full" width="full" spacing="none">
        <Header>
            <Box align="center" width="full">
                {left}
                <Link to={ROUTES.home} noDecorate>
                    <Heading4>{title}</Heading4>
                </Link>
                {right}
            </Box>
        </Header>
        <Main>{children}</Main>
    </Box>
);
