import React, { FC } from "react";
import me from "../../images/me.jpg";
import { Container, Header, Avatar, Body, Links, Footer, Version } from "./styled";
// import { version } from "../../../../package.json";
import { PersonalLinks } from "../PersonalLinks/PersonalLinks";
import { Heading2, Heading4 } from "../Typography/styled";

interface SideNavPanelProps {}
export const SideNavPanel: FC<SideNavPanelProps> = ({}) => (
    <Container role="region">
        <Header>
            <Avatar src={me} alt="me" />
            <Heading2>Daniel Sinnott</Heading2>
            <Heading4>Daniel.Sinnott@outlook.com</Heading4>
            <Heading4>World's #0 Programmer!</Heading4>
        </Header>
        <Body>
            <Links></Links>
            <Footer>
                <PersonalLinks />
                {/* <Version>Version {version}</Version> */}
            </Footer>
        </Body>
    </Container>
);
