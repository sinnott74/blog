import React, { FC } from "react";
import { Container, Header, HeaderTitle, StyledHeaderLink, Main } from "./styled";
import { ROUTES } from "../../../Routes";

interface Props {
    title?: String;
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export const HeaderLayout: FC<Props> = ({ title = "Sinnott", children, left, right }) => (
    <Container>
        <Header>
            {left}
            <StyledHeaderLink to={ROUTES.home}>
                <HeaderTitle>{title}</HeaderTitle>
            </StyledHeaderLink>
            {right}
        </Header>
        <Main>{children}</Main>
    </Container>
);
