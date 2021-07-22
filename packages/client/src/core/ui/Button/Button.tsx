import React, { FC, useState, MouseEvent as ReactMouseEvent, useEffect, useCallback } from "react";
import { ButtonBase, ButtonBaseProps, Ripple } from "./styled";

export interface ButtonProps extends ButtonBaseProps {
    className?: string;
    onClick?: () => void;
    disableRipple?: boolean;
}

interface Origin {
    x: number;
    y: number;
}

const kInitialOrigin = { x: -1, y: -1 };

export const Button: FC<ButtonProps> = ({
    children,
    className,
    onClick,
    disableRipple,
    primary,
    secondary,
    warning,
    disableElevation,
    textButton,
    disabled,
    outlined,
    small,
    medium,
    large,
    icon,
}) => {
    const [animate, setAnimate] = useState(false);
    const [origin, setOrigin] = useState<Origin>(kInitialOrigin);

    const handleClick = useCallback(
        (e: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - left,
                y = e.clientY - top;
            setOrigin({ x, y });
            setAnimate(false);
            onClick && onClick();
        },
        [onClick],
    );

    useEffect(() => {
        if (origin !== kInitialOrigin) {
            setAnimate(true);
        }
    }, [origin]);

    return (
        <ButtonBase
            className={className}
            primary={primary}
            secondary={secondary}
            warning={warning}
            disableElevation={disableElevation}
            textButton={textButton}
            disabled={disabled}
            outlined={outlined}
            small={small}
            medium={medium}
            large={large}
            icon={icon}
            onClick={handleClick}
        >
            {children}
            {!disableRipple && <Ripple {...origin} animate={animate} />}
        </ButtonBase>
    );
};
