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
    disableElevation,
    disabled,
    outlined,
    size,
    type,
    palette,
    selected,
}) => {
    const [animate, setAnimate] = useState(false);
    const [origin, setOrigin] = useState<Origin>(kInitialOrigin);

    const handleClick = useCallback(
        (e: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - left,
                y = e.clientY - top;
            setOrigin({ x, y });
            setAnimate(true);
            onClick && onClick();
        },
        [onClick],
    );

    const onRippleAnimationEnd = () => {
        setAnimate(false);
    };

    return (
        <ButtonBase
            className={className}
            disableElevation={disableElevation}
            disabled={disabled}
            outlined={outlined}
            size={size}
            palette={palette}
            type={type}
            selected={selected}
            onClick={handleClick}
        >
            {children}
            {!disableRipple && animate && (
                <Ripple
                    style={{ left: `${origin.x}px`, top: `${origin.y}px` }}
                    onAnimationEnd={onRippleAnimationEnd}
                />
            )}
        </ButtonBase>
    );
};
