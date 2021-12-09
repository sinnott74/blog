import matter from "gray-matter";
import fs from "fs";

type Metadata = {
    [key: string]: any;
};
type Filename = string;

export const getPostsMetaData = () => {
    const posts = getPostFilenames();
    return posts.reduce((acc, post) => {
        const metadata = matter.read(`./posts/${post}`).data;
        acc[post] = metadata;
        return acc;
    }, {} as Record<Filename, Metadata>);
};

export const getPostFilenames = () => {
    const files = fs.readdirSync("./posts");
    return files;
};
