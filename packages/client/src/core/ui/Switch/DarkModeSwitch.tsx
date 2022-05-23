import { Switch } from "./Switch";

import React, { FC } from "react";
import { WbSunny, Brightness_2, SVGIcon } from "../Icons";
import { styled } from "@compiled/react";
import { useColorScheme } from "../../services/colorScheme";

interface Props {
    onToggle?: (checked: boolean) => void;
    checked?: boolean;
    className?: string;
}

const YellowSun = styled(WbSunny)`
    fill: yellow;
`;

export const DarkModeSwitch: FC<Props> = ({ className }) => {
    const { isDarkMode, toggleScheme } = useColorScheme();

    return (
        <Switch
            className={className}
            checked={!isDarkMode}
            onToggle={toggleScheme}
            CheckedIcon={YellowSun as SVGIcon}
            UncheckedIcon={Brightness_2}
        />
    );
};
