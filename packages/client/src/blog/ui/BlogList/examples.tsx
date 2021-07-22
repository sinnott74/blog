import React from "react";
import { BlogList } from "./main";

export default {
    component: BlogList,
    title: "BlogList",
};

export const Default = () => {
    const tags = ["Test", "Tag"];
    const posts = Array.from({ length: 20 }).map((_, i) => ({
        id: i + "",
        imageurl: "https://i.imgur.com/ietahcb.png",
        title: "Microservices with GoKit",
        tags,
        date: "Fri, 2nd Nov 2018",
    }));
    return <BlogList posts={posts} onTagClick={console.log} />;
};
