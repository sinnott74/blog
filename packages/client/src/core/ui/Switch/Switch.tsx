import React, { FC, useCallback } from "react";
import { SVGIcon } from "../Icons";
import { Label, Input, Slider } from "./styled";

interface Props {
    onToggle?: (checked: boolean) => void;
    checked?: boolean;
    // checkedColor?: string;
    // uncheckedColor?: string;
    CheckedIcon?: SVGIcon;
    UncheckedIcon?: SVGIcon;
    className?: string;
}

export const Switch: FC<Props> = ({
    className,
    checked = false,
    onToggle,
    CheckedIcon,
    UncheckedIcon,
}) => {
    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onToggle && onToggle(event.target.checked);
        },
        [onToggle],
    );

    return (
        <Label className={className}>
            <Input type="checkbox" onChange={onChange} defaultChecked={checked} />
            <Slider>
                {CheckedIcon && <CheckedIcon />}
                {UncheckedIcon && <UncheckedIcon />}
            </Slider>
        </Label>
    );
};
