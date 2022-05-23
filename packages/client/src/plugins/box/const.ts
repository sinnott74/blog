import { ReactHTML, FC, CSSProperties } from "react";
import { Responsive } from "./responsive";
import { properties } from "./properties";

export const VIRTUAL_MODULE_ID = "virtual-box";

/******************************
 * as
 ******************************/
export type NonRepsonsive = {
    as: keyof ReactHTML;
    className: string;
    styled: CSSProperties;
};

export type Props = Partial<NonRepsonsive & Responsive<typeof properties>>;

export type Box = FC<Props>;
