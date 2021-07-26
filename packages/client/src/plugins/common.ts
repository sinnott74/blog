import matter from "gray-matter";
import fs from "fs";

type Metadata = {
    [key: string]: any;
};
type Filename = string;

export const getPostsMetaData = () => {
    const posts = getPosts();
    return posts.reduce((acc, post) => {
        const metadata = matter.read(`./posts/${post}`).data;
        acc[post] = metadata;
        return acc;
    }, {} as Record<Filename, Metadata>);
};

const getPosts = () => {
    const files = fs.readdirSync("./posts");
    return files;
};
