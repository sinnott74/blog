import { FC } from "react";

export interface Post {
    Post: FC;
    id: string;
    title: string;
    imageurl: string;
    author: string;
    tags: string[];
    date: string;
    created: string;
}

const postImports = import.meta.globEager("../../../posts/*.mdx");

// const postImports: { [key: string]: any } = {};

export const posts: Post[] = Object.keys(postImports).map((key) => {
    const post = postImports[key];
    return {
        Post: post.default,
        id: post.id,
        title: post.title,
        imageurl: post.imageurl,
        author: post.defaulauthort,
        tags: post.tags,
        date: post.date,
        created: post.created,
    };
});

export const useBlogPosts = () => {
    return posts.sort(
        (post1, post2) => new Date(post2.created).getTime() - new Date(post1.created).getTime(),
    );
};
