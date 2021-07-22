import React, { FC } from "react";
import { Inline } from "../Layout";
import { Container, Label, Close } from "./styled";

interface ChipProps {
    children?: String;
    closeable?: boolean;
    onClick?: () => void;
}

export const Chip: FC<ChipProps> = ({ children, closeable, onClick }) => (
    <Container data-testid="chip" onClick={onClick}>
        <Inline spacing="none">
            <Label>{children}</Label>
            {closeable && <Close data-testid="chip.close-btn" />}
        </Inline>
    </Container>
);
