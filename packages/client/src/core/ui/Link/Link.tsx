import React, { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components/macro";

type LinkRel = "nofollow" | "noopener" | "noreferrer";

interface LinkProps {
    to: string;
    className?: string;
    activeClassName?: string;
    end?: boolean;
    title?: string;
    disabled?: boolean;
    onClick?: () => void;
    search?: string;
    noDecorate?: boolean;
    target?: "blank";
    rel?: LinkRel | LinkRel[];
}

const StyledNavLink = styled(NavLink)<NavLinkProps & { disabled?: boolean; noDecorate?: boolean }>`
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    text-decoration: ${({ noDecorate }) => (noDecorate ? "none" : "initial")};
`;

export const Link: FC<LinkProps> = ({
    end,
    onClick,
    title,
    to,
    children,
    disabled,
    search,
    noDecorate,
    target,
    rel,
}) => (
    <StyledNavLink
        end={end}
        onClick={onClick}
        title={title}
        disabled={disabled}
        noDecorate={noDecorate}
        target={target}
        to={{
            pathname: to,
            search: search,
        }}
        rel={Array.isArray(rel) ? rel.join(" ") : rel}
    >
        {children}
    </StyledNavLink>
);
