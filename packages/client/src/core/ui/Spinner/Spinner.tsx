import React, { FC } from "react";
import { Container, Circle } from "./styled";

interface SpinnerProps {
    size?: number;
    className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ size = 48, className }) => (
    <Container data-testid="spinner" className={className}>
        <svg data-testid="spinner-svg" viewBox="0 0 32 32" width={size} height={size}>
            <Circle cx="16" cy="16" r="14" fill="none" />
        </svg>
    </Container>
);
