import React, { useState } from "react";
import { Toast } from "./Toast";

export default {
    component: Toast,
    title: "Toast",
};

const ToastStory = () => {
    const [opened, setOpened] = useState(false);
    const handleClose = () => {
        setOpened(false);
    };

    return (
        <>
            <button onClick={() => setOpened((opened) => !opened)}>Toggle Toast</button>
            <Toast message={"Whoooo it worked"} showing={opened} onClose={handleClose} />
        </>
    );
};

export const Default = () => <ToastStory />;
