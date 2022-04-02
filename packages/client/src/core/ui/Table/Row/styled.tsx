import styled from "styled-components/macro";
import { token } from "virtual:theme";

export const Row = styled.tr`
    &:nth-child(odd) {
        background-color: ${token("color-background-subtleNeutral-resting")};
    }
`;
