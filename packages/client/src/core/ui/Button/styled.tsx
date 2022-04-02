import styled, { DefaultTheme, keyframes, css } from "styled-components/macro";
import { token } from "virtual:theme";

export interface ButtonBaseProps {
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    disableElevation?: boolean;
    textButton?: boolean;
    disabled?: boolean;
    outlined?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    icon?: boolean;
}

interface States {
    hover?: boolean;
}

const getPaletteName = ({ primary, secondary, warning }: ButtonBaseProps) => {
    if (warning) {
        return "warning";
    }
    if (primary) {
        return "primary";
    }
    if (secondary) {
        return "secondary";
    }
    return "grey";
};

const getBaseBackgroundColor = ({
    primary,
    secondary,
    warning,
    disabled,
    textButton,
    outlined,
    icon,
    hover,
}: ButtonBaseProps & States) => {
    if (disabled) {
        if (textButton || outlined || icon) {
            return "transparent";
        }
        return token("color-background-disabled");
    }
    const palette = getPaletteName({ primary, secondary, warning });
    if (textButton || outlined || icon) {
        if (!hover) {
            return "transparent";
        }
        switch (palette) {
            case "primary":
                return token("color-background-subtleBrand-resting");
            case "secondary":
                return token("color-background-subtleBrand-resting");
            case "warning":
                return token("color-background-subtleWarning-resting");
            case "grey":
                return token("color-background-subtleNeutral-resting");
            default:
                return token("color-background-subtleBrand-resting");
        }
    }
    if (hover) {
        switch (palette) {
            case "primary":
                return token("color-background-subtleBrand-hover");
            case "secondary":
                return token("color-background-subtleBrand-hover");
            case "warning":
                return token("color-background-subtleWarning-hover");
            case "grey":
                return token("color-background-subtleNeutral-hover");
            default:
                return token("color-background-subtleBrand-hover");
        }
    }
    switch (palette) {
        case "primary":
            return token("color-background-subtleBrand-resting");
        case "secondary":
            return token("color-background-subtleBrand-resting");
        case "warning":
            return token("color-background-subtleWarning-resting");
        case "grey":
            return token("color-background-subtleNeutral-resting");
        default:
            return token("color-background-subtleBrand-resting");
    }
};

const getBaseTextColor = ({
    primary,
    secondary,
    warning,
    disabled,
    outlined,
    textButton,
    icon,
}: ButtonBaseProps) => {
    if (disabled) {
        return token("color-text-lowEmphasis");
    }
    if (!textButton && !outlined && !icon) {
        return token("color-text-mediumEmphasis");
    }
    const palette = getPaletteName({ primary, secondary, warning });
    switch (palette) {
        case "primary":
            return token("color-text-brand");
        case "secondary":
            return token("color-text-brand");
        case "warning":
            return token("color-text-warning");
        case "grey":
        default:
            return token("color-text-lowEmphasis");
    }
};

const getPadding = ({ small, large, icon }: ButtonBaseProps) => {
    if (icon) {
        return "0.75rem";
    }
    if (small) {
        return "0.25rem 0.625rem";
    }
    if (large) {
        return "0.5rem 1.25rem";
    }
    return "0.375rem 1rem";
};

const shouldDisableShadow = ({
    disableElevation,
    textButton,
    disabled,
    outlined,
    icon,
}: ButtonBaseProps) => {
    return disableElevation || textButton || disabled || outlined || icon;
};

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
    min-width: ${(props) => (props.icon ? "" : "4rem")};
    width: ${(props) => (props.icon ? "3rem" : "")};
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, s 1) 0ms;
    box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : token("shadow-resting"))};
    font-weight: 500;
    line-height: 1.5;
    border-radius: ${(props) => (props.icon ? "50%" : "4px")};
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    font-family: ${token("typography-fontFamily")};
    color: ${(props) => getBaseTextColor(props)};
    fill: ${(props) => getBaseTextColor(props)};
    background: ${(props) => getBaseBackgroundColor(props)};
    &:hover {
        background: ${(props) => getBaseBackgroundColor({ ...props, hover: true })};
        box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : token("shadow-hover"))};
        color: ${(props) => getBaseTextColor(props)};
    }
    &:active {
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
