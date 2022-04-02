import React, { FC } from "react";
import { Button, ButtonProps } from "./Button";
import { AddAlert } from "../Icons";
import { Stack } from "../Layout";

const Buttons: FC<ButtonProps> = ({ children, ...rest }) => (
    <>
        <Button {...rest}>{children ? children : "Default"}</Button>
        <Button {...rest} palette="primary">
            {children ? children : "Primary"}
        </Button>
        <Button {...rest} palette="warning">
            {children ? children : "Warning"}
        </Button>
        <Button {...rest} disabled>
            {children ? children : "Disabled"}
        </Button>
    </>
);

export default {
    component: Button,
    title: "Button",
};

export const Default = () => (
    <Stack>
        <Buttons />
        <h2>Disable Elevation</h2>
        <Buttons disableElevation />
        <h2>Text Button</h2>
        <Buttons type="text" />
        <h2>Outlined</h2>
        <Buttons outlined />
        <h2>Sizes</h2>
        <Buttons size="small" />
        <Buttons size="medium" />
        <Buttons size="large" />
        <h2>Icon</h2>
        <Buttons type="icon">
            <AddAlert />
        </Buttons>
    </Stack>
);
