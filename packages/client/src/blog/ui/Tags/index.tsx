import React, { FC } from "react";
import { useTags } from "../../services/tags";
import { Chip } from "../../../core/ui/Chip/Chip";
import { Inline } from "../../../core/ui/Layout";

interface Props {
    useTagsDI?: typeof useTags;
}
export const Tags: FC<Props> = ({ useTagsDI = useTags }) => {
    const { tags, remove } = useTagsDI();
    return (
        <Inline align="center">
            {tags.map((tag) => (
                <Chip key={tag} closeable onClick={() => remove(tag)}>
                    {tag}
                </Chip>
            ))}
        </Inline>
    );
};
