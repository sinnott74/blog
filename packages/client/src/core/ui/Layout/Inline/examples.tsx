import React, { FC } from "react";
import { Inline, Props } from "./Inline";
import { Story } from "@storybook/react";

export default {
    component: Inline,
    title: "Layout/Inline",
};

const Bordered: FC = ({ children }) => <div style={{ border: "1px solid red" }}>{children}</div>;

const Template: Story<Props> = (args) => (
    <Inline {...args}>
        <Bordered>1</Bordered>
        <Bordered>2</Bordered>
        <Bordered>3</Bordered>
        <Bordered>4</Bordered>
    </Inline>
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
