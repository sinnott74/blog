import React, { FC } from "react";
import { TagsContainer } from "../../services/tags";
import UI from "./main";

export type Props = {};

export const BlogList: FC<Props> = () => {
    return (
        <TagsContainer>
            <UI />
        </TagsContainer>
    );
};
