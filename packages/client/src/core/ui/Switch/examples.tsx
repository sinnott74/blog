import React from "react";
import { Switch } from "./Switch";

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
