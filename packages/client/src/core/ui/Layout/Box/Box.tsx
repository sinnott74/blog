import React, { FC } from "react";
import {
    Spacable,
    Alignable,
    getSpacing,
    getAlignment,
    Componentable,
    WidthSizable,
    HeightSizable,
    TRBLSpacable,
    getSizing,
    getBackground,
    Backgroundable,
    getResponsive,
    Align,
    Size,
    Spacing,
    MaxWidth,
    MaxWidthable,
    getMaxWidth,
    Display,
    getDisplay,
    Displayable,
} from "../util";
import { Box as BoxX } from "virtual-box";

export type Props = {
    className?: string;
    accent?: boolean;
    backgroundColor?: string;
} & Spacable &
    Alignable &
    Componentable &
    WidthSizable &
    HeightSizable &
    TRBLSpacable &
    Backgroundable &
    MaxWidthable &
    Displayable;

export const Box: FC<Props> = ({
    component: as,
    display = "flex",
    children,
    spacing = "small",
    spacingTop,
    spacingLeft,
    spacingBottom,
    spacingRight,
    align,
    ...rest
}) => (
    <BoxX
        as={as}
        {...rest}
        display={display}
        position="relative"
        flexDirection="column"
        overflow="auto"
        margin="none"
        alignItems={align}
        padding={spacing}
        paddingTop={spacingTop}
        paddingRight={spacingRight}
        paddingBottom={spacingBottom}
        paddingLeft={spacingLeft}
    >
        {children}
    </BoxX>
);
