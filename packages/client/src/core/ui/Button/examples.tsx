import React, { FC } from "react";
import { Button, ButtonProps } from "./Button";
import { AddAlert } from "../Icons";
import { Stack } from "../Layout";

const Buttons: FC<ButtonProps> = ({ children, ...rest }) => (
    <>
        <Button {...rest}>{children ? children : "Default"}</Button>
        <Button {...rest} primary>
            {children ? children : "Primary"}
        </Button>
        <Button {...rest} secondary>
            {children ? children : "Secondary"}
        </Button>
        <Button {...rest} warning>
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
        <Buttons textButton />
        <h2>Outlined</h2>
        <Buttons outlined />
        <h2>Sizes</h2>
        <Buttons small />
        <Buttons medium />
        <Buttons large />
        <h2>Icon</h2>
        <Buttons icon>
            <AddAlert />
        </Buttons>
    </Stack>
);
