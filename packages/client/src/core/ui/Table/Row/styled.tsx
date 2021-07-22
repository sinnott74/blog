import styled from "styled-components/macro";

export const Row = styled.tr`
    &:nth-child(odd) {
        background-color: ${(props) => props.theme.palette.background.main};
    }
`;
