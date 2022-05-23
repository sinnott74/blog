import React, { FC } from "react";
import { Card } from "../Layout";

interface Props {}

export const Quote: FC<Props> = (props) => <Card accent spacing="medium" {...props} />;
