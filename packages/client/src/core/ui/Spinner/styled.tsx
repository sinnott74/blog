import { styled, keyframes } from "@compiled/react";
import { token } from "virtual:theme";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(450deg);
  }
`;

const line = keyframes`
  0% {
    stroke-dasharray: 2, 85.964;
    transform: rotate(0);
  }

  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    transform: rotate(90deg);
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
    animation: ${line} 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, ${rotate} 1.6s linear infinite;
`;
