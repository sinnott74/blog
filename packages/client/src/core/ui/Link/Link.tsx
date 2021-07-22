import React, { FC } from "react";
import { NavLink, NavLinkProps, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components/macro";
import { Location } from "history";

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
            to={{
                pathname: to,
                search: location.search,
                state: {
                    from: location.pathname,
                },
            }}
        >
            {children}
        </StyledNavLink>
    );
};

export const Link = withRouter(InternalLink);
