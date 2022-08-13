import React, { FC } from "react";
import { createPortal } from "react-dom";

export interface Props {}

/**
 * Responsible for rendering into the html's head
 */
export const Head: FC<Props> = ({ children }) => {
    return createPortal(children, document.head);
};
