import styled from "styled-components/macro";
import { getSpacing, Alignable, Spacable, getAlignment } from "../util";

export const StackContainer = styled.div<Alignable & Spacable>`
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => getAlignment(align)};
    margin-top: ${(props) => getSpacing(props.theme.spacing, props.spacing) * -1 + "px"};
`;

export const StackItem = styled.div<Spacable>`
    padding-top: ${(props) => `${getSpacing(props.theme.spacing, props.spacing)}px`};
`;
