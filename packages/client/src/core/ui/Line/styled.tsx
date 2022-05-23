import { styled } from "@compiled/react";
import { token } from "virtual:theme";

export const Line = styled.hr`
    background-color: ${token("color-background-boldBrand-resting")};
    border: 0px;
    width: 50%;
    height: ${token("spacing")};
    border-radius: 5px;
    max-width: 430px;
    clear: both;
`;
