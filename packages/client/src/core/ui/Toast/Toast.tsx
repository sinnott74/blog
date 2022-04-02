import React, { FC } from "react";
import { Container } from "./styled";
import { Close } from "../Icons";
import { Button } from "../Button/Button";
import { Heading3 } from "../Typography/styled";

interface ToastProps {
    showing: boolean;
    message: string;
    onClose: () => void;
}

export const Toast: FC<ToastProps> = ({ showing, message, onClose }) => (
    <Container animate={showing}>
        <Heading3 alternative>{message}</Heading3>
        <Button type="icon" onClick={onClose}>
            <Close />
        </Button>
    </Container>
);
