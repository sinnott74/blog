import React from "react";
import { BlogCard } from "./BlogCard";

export default {
    component: BlogCard,
    title: "BlogCard",
};

export const Default = () => {
    return (
        <BlogCard
            id={"1"}
            imageurl="https://i.imgur.com/ietahcb.png"
            title="Microservices with GoKit"
            tags={["Test", "Tag"]}
            date="Fri, 2nd Nov 2018"
        />
    );
};
