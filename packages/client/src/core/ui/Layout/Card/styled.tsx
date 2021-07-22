import React from "react";
import styled from "styled-components/macro";
import { Box, Props as BoxProps } from "../Box/Box";

export type Props = BoxProps & { forwardedAs?: string | React.ComponentType<any> } & {
    hover?: boolean;
    rounded?: boolean;
    raised?: boolean;
    accent?: boolean;
};

export const InnerCard = styled(Box)<Props>`
    transition-duration: 0.15s;
    transition-property: box-shadow;
    border-radius: ${(props) => (props.rounded ? "4px" : 0)};
    border-left: ${(props) =>
        props.accent
            ? `${props.theme.spacing / 2}px solid ${props.theme.palette.primary.main}`
            : "none"};
    box-shadow: ${(props) => (props.raised ? props.theme.shadow.z1 : "none")};
    &:hover {
        box-shadow: ${(props) => (props.hover ? props.theme.shadow.z2 : "")};
    }
`;
