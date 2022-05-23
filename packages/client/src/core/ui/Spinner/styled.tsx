import { styled, keyframes } from "@compiled/react";
import { token } from "virtual:theme";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`;

export const Circle = styled.circle`
    box-sizing: border-box;
    stroke: ${token("color-background-boldBrand-resting")};
    stroke-width: 3px;
    transform-origin: 50%;
    stroke-dasharray: 66 100;
    animation: ${rotate} 0.8s linear infinite;
`;
