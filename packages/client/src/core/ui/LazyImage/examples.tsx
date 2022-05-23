import React from "react";
import { LazyImage } from "./LazyImage";
import { LazyImgur } from "./LazyImgur";

export default {
    component: LazyImage,
    title: "LazyImage",
};

export const Default = () => {
    return (
        // <div style={{ width: "400px", height: "200px" }}>
        <>
            <LazyImage
                src="https://i.imgur.com/ietahcb.png"
                initialSrc="https://i.imgur.com/ietahcbt.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImage
                src="https://i.imgur.com/ietahcb.png"
                initialSrc="https://i.imgur.com/ietahcbt.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImage
                src="https://i.imgur.com/ietahcb.png"
                initialSrc="https://i.imgur.com/ietahcbt.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImage
                src="https://i.imgur.com/ietahcb.png"
                initialSrc="https://i.imgur.com/ietahcbt.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImage
                src="https://i.imgur.com/4Ep7VSO.png"
                initialSrc="https://i.imgur.com/4Ep7VSOt.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImage
                src="https://i.imgur.com/axoBYe2.png#1.5"
                initialSrc="https://i.imgur.com/axoBYe2t.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImage
                src="https://i.imgur.com/ZVaDnJx.png"
                initialSrc="https://i.imgur.com/ZVaDnJxt.png"
                title="Lazy Image"
                alt="Image with react icon"
                widthToHeightRatio={1.5}
            />
        </>
        // </div>
    );
};

export const Imgur = () => {
    return (
        <div style={{ width: "400px", height: "200px" }}>
            <LazyImgur
                src="https://i.imgur.com/ietahcb.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImgur
                src="https://i.imgur.com/ietahcb.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImgur
                src="https://i.imgur.com/ietahcb.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImgur
                src="https://i.imgur.com/ietahcb.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImgur
                src="https://i.imgur.com/4Ep7VSO.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImgur
                src="https://i.imgur.com/axoBYe2.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
            <LazyImgur
                src="https://i.imgur.com/ZVaDnJx.png"
                title="Lazy Image"
                alt="Image with react icon"
            />
        </div>
    );
};
