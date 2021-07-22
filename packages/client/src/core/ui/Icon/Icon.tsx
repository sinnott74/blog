import React, { FC } from "react";

interface IconProps {
    img: string;
    alt: string;
    className?: string;
}

export const Icon: FC<IconProps> = ({ img, alt, className }) => {
    return <img src={img} alt={alt} title={alt} className={className} />;
};
