import { Switch } from "./Switch";

import { FC } from "react";
import { WbSunny, Brightness_2 } from "../Icons";
import { useColorScheme } from "../../services/colorScheme";

interface Props {
    onToggle?: (checked: boolean) => void;
    checked?: boolean;
}

export const DarkModeSwitch: FC<Props> = ({ checked = false, onToggle }) => {
    const { isDarkMode, toggleScheme } = useColorScheme();

    return (
        <Switch
            checked={!isDarkMode}
            onToggle={toggleScheme}
            CheckedIcon={WbSunny}
            UncheckedIcon={Brightness_2}
        />
    );
};
