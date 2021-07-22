import styled from "styled-components/macro";

export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`;

export const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.2s;
    border-radius: 34px;
    padding: 5px;

    ${Input}:checked + & {
        background-color: #2196f3;
    }

    ${Input}:focus + & {
        box-shadow: 0 0 1px #2196f3;
    }

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.2s;
        border-radius: 50%;
    }
    ${Input}:checked + &::before {
        transform: translateX(26px);
    }
`;
