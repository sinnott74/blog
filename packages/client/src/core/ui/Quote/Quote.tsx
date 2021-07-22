import React, { FC } from "react";
import { Card } from "../Layout";

interface Props {}

export const Quote: FC<Props> = (props) => (
    <Card forwardedAs="blockquote" accent spacing="medium" background="lighter" {...props} />
);
