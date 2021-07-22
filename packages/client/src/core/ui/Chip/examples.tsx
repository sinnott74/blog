import React from "react";
import { Chip } from "./Chip";

export default {
    component: Chip,
    title: "Chip",
};

export const Default = () => <Chip>Test</Chip>;

export const Closeable = () => <Chip closeable>Test</Chip>;
