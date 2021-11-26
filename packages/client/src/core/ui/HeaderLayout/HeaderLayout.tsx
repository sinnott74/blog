import React, { FC } from "react";
import { Header, Main } from "./styled";
import { ROUTES } from "../../../Routes";
import { Heading4 } from "../Typography/Typography";
import { Link } from "../Link/Link";
import { Box, Tiles } from "../Layout";

interface Props {
    title?: String;
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export const HeaderLayout: FC<Props> = ({
    title = "Sinnott",
    children,
    left = <div />,
    right = <div />,
}) => (
    <Box height="full" width="full" spacing="none">
        <Header>
            {left}
            <Link to={ROUTES.home} noDecorate>
                <Heading4>{title}</Heading4>
            </Link>
            {right}
        </Header>
        <Main>{children}</Main>
    </Box>
);
