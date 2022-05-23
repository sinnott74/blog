import { styled } from "@compiled/react";
import { token } from "virtual:theme";

export const Row = styled.tr`
    &:nth-child(odd) {
        background-color: ${token("color-background-subtleNeutral-resting")};
    }
`;
