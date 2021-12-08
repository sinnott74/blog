import React, { FC, useState } from "react";
import { useTags } from "../../services/tags";
import { BlogCard, Props as BlogCardProps } from "../BlogCard/BlogCard";
import { Pagination } from "../../../core/ui/Pagination/Pagination";
import { Tags } from "../Tags";
import { Box, Stack } from "../../../core/ui/Layout";
import { data } from "virtual:metadata";
import { PostMetadata } from "../../services/blog";

const useBlogPosts = () =>
    data<PostMetadata>().sort(
        (post1, post2) => new Date(post2.created).getTime() - new Date(post1.created).getTime(),
    );

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
    const { tags, add, remove } = useTagsDI();
    const posts = useBlogPostsDI();

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
                <Tags tags={tags} onTagClick={remove} closeable align="center" />
                <BlogList posts={filteredPosts} onTagClick={add} />
            </Stack>
        </Box>
    );
};

export default BlogListWithState;
