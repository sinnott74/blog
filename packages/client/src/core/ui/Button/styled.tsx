import styled, { DefaultTheme, keyframes, css } from "styled-components/macro";
import { Palette } from "../../theme/theme";

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

const getPaletteName = ({ primary, secondary, warning }: ButtonBaseProps): keyof Palette => {
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
    theme,
    hover,
}: ButtonBaseProps & { theme: DefaultTheme } & States) => {
    if (disabled) {
        if (textButton || outlined || icon) {
            return "transparent";
        }
        return theme.palette.grey.lighter;
    }
    const palette = getPaletteName({ primary, secondary, warning });
    if (textButton || outlined || icon) {
        if (hover) {
            return theme.palette[palette].lighter;
        }
        return "transparent";
    }
    if (hover) {
        return theme.palette[palette].darker;
    }
    return theme.palette[palette].main;
};

const getBaseTextColor = ({
    primary,
    secondary,
    warning,
    disabled,
    outlined,
    textButton,
    icon,
    theme,
}: ButtonBaseProps & { theme: DefaultTheme }) => {
    if (disabled) {
        return theme.palette.grey.main;
    }
    if (!textButton && !outlined && !icon) {
        return theme.palette.background.lighter;
    }
    const palette = getPaletteName({ primary, secondary, warning });
    return palette === "grey" ? theme.palette.text.main : theme.palette[palette].main;
};

const getPadding = ({ small, large, icon }: ButtonBaseProps & { theme: DefaultTheme }) => {
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
    box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : props.theme.shadow.z1)};
    font-weight: 500;
    line-height: 1.5;
    border-radius: ${(props) => (props.icon ? "50%" : "4px")};
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.typography.fontFamily};
    color: ${(props) => getBaseTextColor(props)};
    fill: ${(props) => getBaseTextColor(props)};
    background: ${(props) => getBaseBackgroundColor(props)};
    &:hover {
        background: ${(props) => getBaseBackgroundColor({ ...props, hover: true })};
        box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : props.theme.shadow.z2)};
    }
    &:active {
        box-shadow: ${(props) => (shouldDisableShadow(props) ? "" : props.theme.shadow.z0)};
        /* box-shadow: none; */
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
