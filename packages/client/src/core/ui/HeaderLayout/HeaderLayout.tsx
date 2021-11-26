import React, { FC } from "react";
import { Header, Main, LeftSectionContainer, RightSectionContainer } from "./styled";
import { ROUTES } from "../../../Routes";
import { Heading4 } from "../Typography/Typography";
import { Link } from "../Link/Link";
import { Box } from "../Layout";

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
            <LeftSectionContainer>{left}</LeftSectionContainer>
            <Link to={ROUTES.home} noDecorate>
                <Heading4>{title}</Heading4>
            </Link>
            <RightSectionContainer>{right}</RightSectionContainer>
        </Header>
        <Main>{children}</Main>
    </Box>
);
