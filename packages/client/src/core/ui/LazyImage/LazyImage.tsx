import React, { FC, useState } from "react";
import { Container, Placeholder, Initial, Lazy } from "./styled";
import { useInView } from "react-intersection-observer";
import { calculateRatio } from "./utils";

interface LazyImageProps {
    src: string;
    initialSrc?: string;
    alt?: string;
    title: string;
    className?: string;
    onClick?: () => void;
    heightToWidthRatio?: number;
}

export const LazyImage: FC<LazyImageProps> = ({
    src,
    initialSrc,
    alt,
    title,
    className,
    onClick,
    heightToWidthRatio,
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const [placeholder, setPlaceholder] = useState(true);
    const [initial, setInitial] = useState(false);
    const [lazy, setLazy] = useState(false);

    const handleInitialLoaded = () => {
        setInitial(true);
    };

    const handleLazyLoaded = () => {
        setLazy(true);
    };

    const handleInitialImageFadeInEnd = () => {
        setPlaceholder(false);
    };

    const handleLazyImageFadeInEnd = () => {
        setPlaceholder(false);
        setInitial(false);
    };

    const ratio = calculateRatio({ heightToWidthRatio, src });

    return (
        <Container ratio={ratio} className={className} ref={ref} onClick={onClick}>
            {placeholder && <Placeholder />}
            {initialSrc && (
                <Initial
                    src={initialSrc}
                    alt={alt}
                    title={title}
                    animate={initial}
                    onLoad={handleInitialLoaded}
                    onAnimationEnd={handleInitialImageFadeInEnd}
                />
            )}
            {inView && (
                <Lazy
                    src={src}
                    alt={alt}
                    title={title}
                    animate={lazy}
                    onLoad={handleLazyLoaded}
                    onAnimationEnd={handleLazyImageFadeInEnd}
                />
            )}
        </Container>
    );
};
