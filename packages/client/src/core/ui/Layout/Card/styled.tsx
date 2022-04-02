import React from "react";
import styled from "styled-components/macro";
import { token } from "virtual:theme";
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
            ? `calc(${token("spacing")} / 2) solid ${token("color-background-boldBrand-resting")};`
            : "none"};
    box-shadow: ${(props) => (props.raised ? token("shadow-resting") : "none")};
    &:hover {
        box-shadow: ${(props) => (props.hover ? token("shadow-hover") : "")};
    }
    background-color: ${token("color-background-card")};
`;
