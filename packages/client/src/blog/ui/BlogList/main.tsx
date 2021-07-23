import React, { FC, useState } from "react";
import { useBlogPosts } from "../../services/blog";
import { useTags } from "../../services/tags";
import { BlogCard, Props as BlogCardProps } from "../BlogCard/BlogCard";
import { Pagination } from "../../../core/ui/Pagination/Pagination";
import { Tags } from "../Tags";
import { Container } from "./styled";
import { Box, Stack } from "../../../core/ui/Layout";

interface BlogListProps {
    posts: BlogCardProps[];
    onTagClick: (tag: string) => void;
}

export const BlogList: FC<BlogListProps> = ({ posts, onTagClick }) => {
    const [page, setPage] = useState(1);

    const renderPost = (index: number) => (
        <BlogCard key={posts[index].id} {...posts[index]} onTagClick={onTagClick} />
    );

    return (
        <Pagination
            page={page}
            total={posts.length}
            itemsPerPage={8}
            onPageChange={setPage}
            renderItem={renderPost}
            columns={{ mobile: 1, tablet: 2, desktop: 2, wide: 2 }}
        />
    );
};

export type Props = {
    useTagsDI?: typeof useTags;
    useBlogPostsDI?: typeof useBlogPosts;
};

const BlogListWithState: FC<Props> = ({ useTagsDI = useTags, useBlogPostsDI = useBlogPosts }) => {
    const { tags, add } = useTags();
    const posts = useBlogPosts();

    const filteredPosts = tags.length
        ? posts.filter((post) => {
              if (!post.tags || !post.tags.length) {
                  return false;
              }

              const postTags = post.tags.map((postTag) => postTag);
              return tags.every((tag) => {
                  return postTags.includes(tag);
              });
          })
        : posts;

    return (
        <Box width="full" maxWidth="medium" spacing="none">
            <Stack>
                <Tags />
                <BlogList posts={filteredPosts} onTagClick={add} />
            </Stack>
        </Box>
    );
};

export default BlogListWithState;
