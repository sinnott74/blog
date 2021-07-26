import { FC } from "react";

export interface PostMetadata {
    id: string;
    title: string;
    imageurl: string;
    author: string;
    tags: string[];
    date: string;
    created: string;
}
export interface Post extends PostMetadata {
    Post: FC;
}
