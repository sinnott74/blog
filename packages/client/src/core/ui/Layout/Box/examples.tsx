import React, { FC } from "react";
import { Box, Props } from "./Box";
import { Story } from "@storybook/react";

export default {
    component: Box,
    title: "Layout/Box",
};

const Bordered: FC = ({ children }) => <div style={{ border: "1px solid red" }}>{children}</div>;

const Template: Story<Props> = (args) => (
    <Box {...args}>
        <Bordered>1</Bordered>
        <Bordered>2</Bordered>
        <Bordered>3</Bordered>
        <Bordered>4</Bordered>
    </Box>
);

export const Default = Template.bind({});
Default.args = { spacing: { mobile: "xsmall", tablet: "medium", desktop: "xlarge" } };

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
