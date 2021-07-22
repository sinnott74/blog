import React, { FC } from "react";
import { LazyImage } from "./LazyImage";

interface LazyImgurImageProps {
    fileName: string;
    alt?: string;
    title: string;
    className?: string;
    onClick?: () => void;
}

const getUrl = (fileName: string) => `https://i.imgur.com/${fileName}`;

export const LazyImgur: FC<LazyImgurImageProps> = ({ fileName, ...rest }) => {
    const src = getUrl(fileName);
    const smallFileName = fileName.replace(".", "t.");
    const initialSrc = getUrl(smallFileName);
    return <LazyImage {...rest} src={src} initialSrc={initialSrc} />;
};
