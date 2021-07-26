import styled, { css, keyframes } from "styled-components/macro";
import { ReactComponent as PlaceholderSVG } from "./placeholder.svg";

interface Animatable {
    animate?: boolean;
}

const kFadeTime = "0.5s";

const fadeIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const common = css<Animatable>`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    top: 0;
    left: 0;
    position: absolute;
    animation: ${(props) =>
        props.animate
            ? css`
                  ${kFadeTime} ${fadeIn}
              `
            : ""};
`;

interface ContainerProps {
    ratio: number;
}
export const Container = styled.div<ContainerProps>`
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: ${({ ratio }) => ratio * 100 + "%"};
`;

export const Placeholder = styled(PlaceholderSVG)<Animatable>`
    ${common}
    animation-fill-mode: backwards;
`;

export const Initial = styled.img<Animatable>`
    ${common}
    animation-fill-mode: backwards;
`;

export const Lazy = styled.img<Animatable>`
    ${common}
    opacity: 0;
    animation-fill-mode: forwards;
`;