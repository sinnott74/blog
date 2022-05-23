import { styled, css, keyframes } from "@compiled/react";
import { token } from "virtual:theme";
import { ReactComponent as PlaceholderSVG } from "./placeholder.svg";

interface Animatable {
    animate?: boolean;
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const common = css`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    top: 0;
    left: 0;
    position: absolute;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
`;

interface ContainerProps {
    ratio: number;
}
export const Container = styled.div<ContainerProps>`
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: ${(props) => props.ratio};
`;
//aspect-ratio: ${(props) => props.ratio * 100}%;

export const Placeholder = styled(PlaceholderSVG)`
    ${common}
    animation-name: ${fadeIn};
    fill: ${token("color-background-subtleNeutral-resting")};
`;

export const Initial = styled.img`
    ${common}
    animation-name: ${fadeIn};
`;

export const Lazy = styled.img<Animatable>`
    ${common}
    opacity: 0;
    animation-name: ${fadeIn};
    animation-play-state: ${({ animate }) => (animate ? "running" : "paused")};
`;
