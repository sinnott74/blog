import styled from "styled-components/macro";

export const Line = styled.hr`
    background-color: ${(props) => props.theme.palette.primary.main};
    border: 0px;
    margin: 50px auto;
    width: 50%;
    height: ${(props) => props.theme.spacing + "px"};
    border-radius: 5px;
    max-width: 430px;
    clear: both;
`;
