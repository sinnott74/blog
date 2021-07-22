import styled from "styled-components/macro";
import { Text } from "../Typography/Typography";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Pages = styled.div`
    display: inline-flex;
    overflow: auto;
`;

export const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledButtonText = styled(Text)`
    margin: 0;
`;

export const FullHeightContainer = styled.div`
    flex: 1;
`;
