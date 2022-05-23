import React from "react";
import { styled } from "@compiled/react";
import { token } from "virtual:theme";
import { Box, Props as BoxProps } from "../Box/Box";
import { StyledProps } from "@compiled/react/dist/esm/styled";

export type Props = BoxProps &
    StyledProps & {
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
