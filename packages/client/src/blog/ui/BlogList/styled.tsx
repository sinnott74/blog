import styled from "styled-components/macro";
import { token } from "virtual:theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    max-width: ${token("breakpoint-lg")};
    margin: 0 auto;
    height: 100%;
`;
