import React from "react";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Text } from "./Typography";

export default {
    component: () => <></>,
    title: "Typography",
};

export const Default = () => {
    return (
        <>
            <Heading1>Heading1</Heading1>
            <Heading2>Heading2</Heading2>
            <Heading3>Heading3</Heading3>
            <Heading4>Heading4</Heading4>
            <Heading5>Heading5</Heading5>
            <Heading6>Heading6</Heading6>
            <Text>Text</Text>
            <Text secondary>Secondary Text</Text>
        </>
    );
};
