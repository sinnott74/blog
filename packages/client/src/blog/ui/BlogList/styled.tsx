import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    max-width: ${(props) => `${props.theme.breakpoints.lg}px`};
    margin: 0 auto;
    height: 100%;
`;
