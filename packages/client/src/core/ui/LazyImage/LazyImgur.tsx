import React, { FC } from "react";
import { LazyImage } from "./LazyImage";

interface LazyImgurImageProps {
    src: string;
    alt?: string;
    title: string;
    className?: string;
    onClick?: () => void;
    caption?: boolean;
}

const reg = /(.*)(\.)(jpg|png)(.*)/;
export const LazyImgur: FC<LazyImgurImageProps> = ({ src, ...rest }) => {
    const initialSrc = src.replace(
        reg,
        (match, beforeDot, dot, extension, afterExtension) =>
            `${beforeDot}t.${extension}${afterExtension}`,
    );
    return <LazyImage {...rest} src={src} initialSrc={initialSrc} />;
};
