import React, { FC } from "react";
import { Card, Stack, Box } from "../../../core/ui/Layout";
import { LazyImgur } from "../../../core/ui/LazyImage/LazyImgur";
import { Heading3, SecondaryText } from "../../../core/ui/Typography/styled";
import { Link } from "../../../core/ui/Link/Link";
import { Tags } from "../Tags";

export interface Props {
    id: string;
    title: string;
    date: string;
    imageurl?: string;
    tags?: string[];
    onTagClick?: (tag: string) => void;
    className?: string;
}

export const BlogCard: FC<Props> = ({ id, title, date, imageurl, tags = [], onTagClick }) => (
    <Card rounded raised spacing="none" height="full">
        <Link to={`/blog/${id}`} title={title} noDecorate>
            <LazyImgur src={imageurl || ""} title={title} />
        </Link>
        <Box>
            <Stack>
                <Stack spacing="none">
                    <Link to={`/blog/${id}`} title={title} noDecorate>
                        <Heading3>{title}</Heading3>
                    </Link>
                    <SecondaryText>{date}</SecondaryText>
                </Stack>
                <Tags tags={tags} onTagClick={onTagClick} />
            </Stack>
        </Box>
    </Card>
);
