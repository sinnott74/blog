import styled from "styled-components/macro";
import { Cancel } from "../Icons";
import { Text } from "../Typography/Typography";

export const Container = styled.button`
    background: ${(props) => props.theme.palette.background.main};
    border: 0;
    border-radius: 1rem;
    padding: ${(props) => props.theme.spacing / 2 + "px"};
    transition-duration: 0.15s;
    transition-property: box-shadow, background;
    outline-style: none;
    &:hover {
        background: ${(props) => props.theme.palette.text.lighter};
    }
    &:active {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
`;

export const Label = styled(Text)`
    display: inline-block;
    color: ${(props) => props.theme.palette.text.main};
    transition-duration: 0.15s;
    transition-property: color;
    min-height: 1.5rem;
    line-height: 1.5rem;
    padding: ${(props) => `0 ${props.theme.spacing}px`};
    margin: 0;
    ${Container}:hover & {
        color: ${(props) => props.theme.palette.background.lighter};
    }
`;

export const Close = styled(Cancel)`
    display: block;
    cursor: pointer;
    transition-duration: 0.15s;
    transition-property: fill;
    fill: ${(props) => props.theme.palette.text.main};
    ${Container}:hover & {
        fill: ${(props) => props.theme.palette.background.lighter};
    }
`;
