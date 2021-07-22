import React, { FC } from "react";
import { Stack, Props } from "./Stack";
import { Story } from "@storybook/react";

export default {
    component: Stack,
    title: "Layout/Stack",
};

const Bordered: FC = ({ children }) => <div style={{ border: "1px solid red" }}>{children}</div>;

const Template: Story<Props> = (args) => (
    <Stack {...args}>
        <Bordered>1</Bordered>
        <Bordered>2</Bordered>
        <Bordered>3</Bordered>
        <Bordered>4</Bordered>
        <Bordered>5</Bordered>
    </Stack>
);

export const Default = Template.bind({});
Default.args = {};

export const XSmall = Template.bind({});
XSmall.args = { spacing: "xsmall" };

export const Small = Template.bind({});
Small.args = { spacing: "small" };

export const Medium = Template.bind({});
Small.args = { spacing: "medium" };

export const Large = Template.bind({});
Large.args = { spacing: "large" };

export const XLarge = Template.bind({});
XLarge.args = { spacing: "xlarge" };
