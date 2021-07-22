import React, { FC } from "react";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { Container } from "./styled";

interface PersonalLinkProps {
    url: string;
    title: string;
    Icon: FC<{ title?: string; alt?: string }>;
}
interface PersonalLinksProps {}

const PersonalLink: FC<PersonalLinkProps> = ({ Icon, title, url }) => (
    <a href={url}>
        <Icon title={title} alt={title} />
    </a>
);

export const PersonalLinks: FC<PersonalLinksProps> = () => (
    <Container>
        <PersonalLink url="https://github.com/sinnott74" Icon={Github} title="Github" />
        <PersonalLink url="https://facebook.com/sinnott74" Icon={Facebook} title="Facebook" />
        <PersonalLink url="https://twitter.com/sinnott74" Icon={Twitter} title="Twitter" />
        <PersonalLink
            url="https://ie.linkedin.com/in/daniel-sinnott"
            Icon={LinkedIn}
            title="LinkedIn"
        />
    </Container>
);
