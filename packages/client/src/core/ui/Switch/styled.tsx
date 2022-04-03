import { styled } from "@compiled/react";
import { token } from "virtual:theme";

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
    background-color: ${token("color-background-subtleNeutral-resting")};
    transition: 0.15s;
    border-radius: 34px;
    padding: 5px;

    &:hover {
        background-color: ${token("color-background-subtleNeutral-hover")};
    }

    input:focus + & {
        box-shadow: 0 0 1px ${token("color-background-subtleNeutral-pressed")};
    }

    input:hover:focus + & {
        box-shadow: 0 0 1px ${token("color-background-subtleNeutral-hover")};
    }

    input:checked + & {
        background-color: ${token("color-background-subtleBrand-resting")};
    }

    input:hover:checked + & {
        background-color: ${token("color-background-subtleBrand-hover")};
    }

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${token("color-background-boldNeutral-resting")};
        transition: 0.15s;
        border-radius: 50%;
        opacity: 1;
    }
    &:hover::before {
        background-color: ${token("color-background-boldNeutral-hover")};
    }
    input:checked + &::before {
        transform: translateX(26px);
        background-color: ${token("color-background-boldBrand-resting")};
    }

    input:checked + &:hover::before {
        background-color: ${token("color-background-boldBrand-hover")};
    }

    input:checked + &:focus::before {
        background-color: ${token("color-background-boldBrand-pressed")};
    }
`;
