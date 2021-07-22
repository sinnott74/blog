import React, { FC } from "react";
import { Tiles, Props } from "./Tiles";
import { Story } from "@storybook/react";

export default {
    component: Tiles,
    title: "Layout/Tiles",
};

const Bordered: FC = ({ children }) => <div style={{ border: "1px solid red" }}>{children}</div>;

const Template: Story<Props> = (args) => (
    <Tiles {...args}>
        <Bordered>1</Bordered>
        <Bordered>2</Bordered>
        <Bordered>3</Bordered>
        <Bordered>4</Bordered>
    </Tiles>
);

export const Default = Template.bind({});
Default.args = {
    columns: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
        wide: 4,
    },
};

export const XSmall = Template.bind({});
XSmall.args = { columns: 3, spacing: "xsmall" };

export const Small = Template.bind({});
Small.args = { columns: 3, spacing: "small" };

export const Medium = Template.bind({});
Medium.args = { columns: 3, spacing: "medium" };

export const Large = Template.bind({});
Large.args = { columns: 3, spacing: "large" };

export const XLarge = Template.bind({});
XLarge.args = { columns: 3, spacing: "xlarge" };
