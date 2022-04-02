import React, { FC } from "react";
import { InnerCard, Props as InnerCardProps } from "./styled";

interface Props extends InnerCardProps {}

export const Card: FC<Props> = (props) => <InnerCard {...props} />;
