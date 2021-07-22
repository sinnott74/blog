import React, { FC } from "react";
import { NavLink, NavLinkProps, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components/macro";
import { Location } from "history";

type LinkRel = "nofollow" | "noopener" | "noreferrer";

interface LinkProps {
    to: string;
    className?: string;
    activeClassName?: string;
    exact?: boolean;
    title?: string;
    disabled?: boolean;
    onClick?: () => void;
    location: Location;
    noDecorate?: boolean;
    target?: "blank";
    rel?: LinkRel | LinkRel[];
}

const StyledNavLink = styled(NavLink)<NavLinkProps & { disabled?: boolean; noDecorate?: boolean }>`
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    text-decoration: ${({ noDecorate }) => (noDecorate ? "none" : "initial")};
`;

export const InternalLink: FC<LinkProps & RouteComponentProps<any, any, any>> = ({
    className,
    activeClassName,
    exact,
    onClick,
    title,
    to,
    children,
    disabled,
    location,
    noDecorate,
    target,
    rel,
}) => {
    return (
        <StyledNavLink
            className={className}
            activeClassName={activeClassName}
            exact={exact}
            onClick={onClick}
            title={title}
            disabled={disabled}
            noDecorate={noDecorate}
            target={target}
            to={{
                pathname: to,
                search: location.search,
                state: {
                    from: location.pathname,
                },
            }}
            rel={Array.isArray(rel) ? rel.join(" ") : rel}
        >
            {children}
        </StyledNavLink>
    );
};

export const Link = withRouter(InternalLink);
