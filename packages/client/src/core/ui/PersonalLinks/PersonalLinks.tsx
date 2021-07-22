import React, { FC } from "react";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { Box, Tiles } from "../Layout";
import { Link } from "../Link/Link";

interface PersonalLinkProps {
    to: string;
    title: string;
    Icon: FC<{ title?: string; alt?: string }>;
}
interface PersonalLinksProps {}

const PersonalLink: FC<PersonalLinkProps> = ({ Icon, title, to }) => (
    <Link to={to}>
        <Icon title={title} alt={title} />
    </Link>
);

export const PersonalLinks: FC<PersonalLinksProps> = () => (
    <Tiles columns={4} spacing="medium">
        <PersonalLink to="https://github.com/sinnott74" Icon={Github} title="Github" />
        <PersonalLink to="https://facebook.com/sinnott74" Icon={Facebook} title="Facebook" />
        <PersonalLink to="https://twitter.com/sinnott74" Icon={Twitter} title="Twitter" />
        <PersonalLink
            to="https://ie.linkedin.com/in/daniel-sinnott"
            Icon={LinkedIn}
            title="LinkedIn"
        />
    </Tiles>
);
