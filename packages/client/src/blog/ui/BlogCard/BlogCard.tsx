import React, { FC } from "react";
import { Card, Stack, Inline, Box } from "../../../core/ui/Layout";
import { Chip } from "../../../core/ui/Chip/Chip";
import { LazyImage } from "../../../core/ui/LazyImage/LazyImage";
import { Heading3, Text } from "../../../core/ui/Typography/styled";
import { Link } from "../../../core/ui/Link/Link";

export interface Props {
    id: string;
    title: string;
    date: string;
    imageurl?: string;
    tags?: string[];
    onTagClick?: (tag: string) => void;
    className?: string;
}

export const BlogCard: FC<Props> = ({ id, title, date, imageurl, tags = [], onTagClick }) => {
    const Tags = tags?.map((tag) => (
        <Chip
            key={tag}
            onClick={() => {
                onTagClick && onTagClick(tag);
            }}
        >
            {tag}
        </Chip>
    ));

    return (
        <Card rounded raised spacing="none" height="full">
            <Link to={`/blog/${id}`} title={title} noDecorate>
                <LazyImage src={imageurl || ""} title={title} />
            </Link>
            <Box>
                <Stack>
                    <Stack spacing="none">
                        <Link to={`/blog/${id}`} title={title} noDecorate>
                            <Heading3>{title}</Heading3>
                        </Link>
                        <Text secondary>{date}</Text>
                    </Stack>
                    <Inline spacing="xsmall">{Tags}</Inline>
                </Stack>
            </Box>
        </Card>
    );
};
