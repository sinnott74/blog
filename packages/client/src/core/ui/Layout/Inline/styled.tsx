import styled from "styled-components/macro";
import { Alignable, getAlignment, getSpacing, Spacable } from "../util";

export const InlineContainer = styled.div<Spacable & Alignable>`
    margin-left: ${(props) => getSpacing(props.theme.spacing, props.spacing) * -1 + "px"};
    margin-top: ${(props) => getSpacing(props.theme.spacing, props.spacing) * -1 + "px"};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: ${({ align }) => getAlignment(align)};
`;

export const InlineItem = styled.div<Spacable>`
    justify-content: flex-start;
    display: block;
    min-width: 0;
    margin-left: ${(props) => getSpacing(props.theme.spacing, props.spacing) + "px"};
    margin-top: ${(props) => getSpacing(props.theme.spacing, props.spacing) + "px"};
`;
