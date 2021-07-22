import React, { FC, useRef, useState } from "react";
import { clamp } from "../../common/utils/clamp";
import { Container, Scrim, SideNav, Edge, Main } from "./styled";

interface SideNavLayoutProps {
    opened: boolean;
    onOpen: () => void;
    onClose: () => void;
    SideNavPanel: FC;
}

const THRESHOLD = 15 * window.devicePixelRatio;
const MAXOPACITY = 0.85;

type Direction = "horizontal" | "vertical";

const getDirection = (dx: number, dy: number): Direction =>
    Math.abs(dx) >= Math.abs(dy) ? "horizontal" : "vertical";

export const SideNavLayout: FC<SideNavLayoutProps> = ({
    opened,
    onOpen,
    onClose,
    SideNavPanel,
    children,
}) => {
    const sideNavRef = useRef<HTMLDivElement>(null);
    const scrimRef = useRef<HTMLDivElement>(null);
    const sideNavContentRef = useRef<HTMLDivElement>(null);

    const [touching, setTouching] = useState(false);
    const [direction, setDirection] = useState<Direction>();

    const open = () => {};

    const close = () => {};

    const handleScrimClick = () => {
        onClose();
    };

    return (
        <Container ref={sideNavRef}>
            <Scrim ref={scrimRef} />
            <SideNav ref={sideNavContentRef}>
                <SideNavPanel />
            </SideNav>
            <Edge />
            <Main>{children}</Main>
        </Container>
    );
};
