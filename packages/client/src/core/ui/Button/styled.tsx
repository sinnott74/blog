import styled, { keyframes, css } from "styled-components/macro";
import { token } from "virtual:theme";

type Type = "default" | "text" | "icon";
type Palette = "default" | "primary" | "warning";
type Size = "small" | "medium" | "large";

export interface ButtonBaseProps {
    type?: Type;
    palette?: Palette;
    size?: Size;
    disableElevation?: boolean;
    disabled?: boolean;
    outlined?: boolean;
    selected?: boolean;
}

const getBackgroundColor = ({ disabled, type, palette, selected }: ButtonBaseProps) => {
    if (type === "text" || (type === "icon" && !selected)) {
        return "transparent";
    }

    if (disabled) {
        return token("color-background-disabled");
    }

    switch (palette) {
        case "primary":
            return token("color-background-subtleBrand-resting");
        case "warning":
            return token("color-background-subtleWarning-resting");
        case "default":
        default:
            return token("color-background-subtleNeutral-resting");
    }
};

const getHoverBackgroundColor = ({ disabled, type, palette }: ButtonBaseProps) => {
    if (type === "text") {
        return "transparent";
    }
    if (disabled) {
        return token("color-background-disabled");
    }
    switch (palette) {
        case "primary":
            return token("color-background-subtleBrand-hover");
        case "warning":
            return token("color-background-subtleWarning-hover");
        case "default":
        default:
            return token("color-background-subtleNeutral-hover");
    }
};

const getPressedBackgroundColor = ({ disabled, type, palette }: ButtonBaseProps) => {
    if (type === "text") {
        return "transparent";
    }
    if (disabled) {
        return token("color-background-disabled");
    }
    switch (palette) {
        case "primary":
            return token("color-background-subtleBrand-pressed");
        case "warning":
            return token("color-background-subtleWarning-pressed");
        case "default":
        default:
            return token("color-background-subtleNeutral-pressed");
    }
};

const getBaseTextColor = ({ palette, disabled }: ButtonBaseProps) => {
    if (disabled) {
        return token("color-text-lowEmphasis");
    }

    switch (palette) {
        case "primary":
            return token("color-text-brand");
        case "warning":
            return token("color-text-warning");
        case "default":
        default:
            return token("color-text-lowEmphasis");
    }
};

const getPadding = ({ type, size }: ButtonBaseProps) => {
    if (type === "icon") {
        return "0.75rem";
    }
    switch (size) {
        case "small":
            return "0.25rem 0.625rem";
        case "large":
            return "0.5rem 1.25rem";
        case "medium":
        default:
            return "0.375rem 1rem";
    }
};

const shouldDisableShadow = ({ disableElevation, disabled, type }: ButtonBaseProps) => {
    return disableElevation || disabled || type === "text" || type === "icon";
};

const isIcon = ({ type }: ButtonBaseProps) => type === "icon";

export const ButtonBase = styled.button.attrs(() => ({
    tabIndex: "0",
}))<ButtonBaseProps>`
    display: inline-flex;
    position: relative;
    overflow: hidden;
    align-items: center;
    border: ${(props) => (props.outlined ? `1px solid ${getBaseTextColor(props)}` : "0")};
    outline: 0;
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    user-select: none;
    justify-content: center;
    text-decoration: none;
    padding: ${(props) => getPadding(props)};
    font-size: 0.875rem;
    min-width: ${(props) => (isIcon(props) ? "" : "4rem")};
    width: ${(props) => (isIcon(props) ? "3rem" : "")};
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, s 1) 0ms;
    box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : token("shadow-resting"))};
    font-weight: 500;
    line-height: 1.5;
    border-radius: ${(props) => (isIcon(props) ? "50%" : "4px")};
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    font-family: ${token("typography-fontFamily")};
    color: ${(props) => getBaseTextColor(props)};
    fill: ${(props) => getBaseTextColor(props)};
    background: ${(props) => getBackgroundColor(props)};
    &:hover {
        background: ${(props) => getHoverBackgroundColor(props)};
        box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : token("shadow-hover"))};
        color: ${(props) => getBaseTextColor(props)};
    }
    &:active {
        background: ${(props) => getPressedBackgroundColor(props)};
        box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : token("shadow-pressed"))};
    }
`;

export const Label = styled.span`
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
`;

const ripple = keyframes`
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(20);
  }
`;

interface Animatable {
    animate?: boolean;
}
interface Origin {
    x: number;
    y: number;
}

export const Ripple = styled.span.attrs(({ x, y }: Origin) => ({
    style: {
        left: `${x}px`,
        top: `${y}px`,
    },
}))<Animatable & Origin>`
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    pointer-events: none;
    width: 10px;
    height: 10px;
    animation: ${({ animate }) =>
        animate
            ? css`
                  ${ripple} 0.5s
              `
            : ""};
    opacity: 0;
`;
