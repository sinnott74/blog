import React, { FC } from "react";
import { Chip } from "../../../core/ui/Chip/Chip";
import { Inline } from "../../../core/ui/Layout";
import { Align } from "../../..//core/ui/Layout/util";

interface Props {
    align?: Align;
    tags: string[];
    onTagClick?: (tag: string) => void;
    closeable?: boolean;
}
export const Tags: FC<Props> = ({ tags, onTagClick, align, closeable }) => (
    <Inline spacing="xxsmall" align={align}>
        {tags.filter(Boolean).map((tag) => (
            <Chip
                key={tag}
                onClick={() => {
                    onTagClick && onTagClick(tag);
                }}
                closeable={closeable}
            >
                {tag}
            </Chip>
        ))}
    </Inline>
);
