import { SVGIcon } from "../core/ui/Icons";

declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: SVGIcon;
    const src: string;
    export default src;
}
