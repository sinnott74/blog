import { styled } from "@compiled/react";
import { Cancel } from "../Icons";
import { Text } from "../Typography/Typography";
import { token } from "virtual:theme";

export const Container = styled.button`
    background: ${token("color-background-subtleNeutral-resting")};
    border: 0;
    border-radius: 1rem;
    padding: calc(${token("spacing")} / 2);
    outline-style: none;
    :hover {
        background: ${token("color-background-subtleNeutral-hover")};
    }
    :active {
        background: ${token("color-background-subtleNeutral-pressed")};
    }
`;

export const Label = styled(Text)`
    display: inline-block;
    color: ${token("color-text-mediumEmphasis")};
    min-height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 ${token("spacing")};
    margin: 0;
`;

export const Close = styled(Cancel)`
    display: block;
    cursor: pointer;
    fill: ${token("color-text-mediumEmphasis")};
`;
