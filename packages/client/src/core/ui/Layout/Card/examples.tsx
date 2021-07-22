import React from "react";
import { Card } from "./Card";

export default {
    component: Card,
    title: "Layout/Card",
};

export const Default = () => (
    <>
        <Card>Test</Card>
        <br />
        <Card hover>WithHover</Card>
        <br />
        <Card rounded>WithRounded</Card>
    </>
);
