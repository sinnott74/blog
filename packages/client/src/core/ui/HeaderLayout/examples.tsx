import React from "react";
import { HeaderLayout } from "./HeaderLayout";

export default {
    component: HeaderLayout,
    title: "HeaderLayout",
};

export const Default = () => {
    return (
        <HeaderLayout>
            <div style={{ height: "10000px" }}>Test</div>
        </HeaderLayout>
    );
};
