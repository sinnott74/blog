import React from "react";
import { Switch } from "./Switch";
import { DarkModeSwitch } from "./DarkModeSwitch";

export default {
    component: Switch,
    title: "Switch",
};

export const Default = () => (
    <>
        <Switch />
        <Switch checked />
    </>
);

export const DarkMode = () => (
    <>
        <DarkModeSwitch />
    </>
);
