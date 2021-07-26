import type { Plugin } from "vite";
import { getPostsMetaData } from "./common";

const ID = "@routes";

export function makeModuleContent() {
    const postMetadata = getPostsMetaData();

    const lazyImportStatements = Object.keys(postMetadata)
        .map((filename) => {
            const id = postMetadata[filename].id;
            return `const Post${id} = React.lazy(() => import("./posts/${filename}"));`;
        })
        .join("\n");

    const routes = Object.keys(postMetadata)
        .map((filename) => {
            const id = postMetadata[filename].id;
            return `{
        key: Post${id},
        path: "/blog/${id}",
        exact: true,
        component: Post${id},
        data: ${JSON.stringify(postMetadata[filename])}
    }`;
        })
        .join(",\n");

    return `
    import React from "react";
    ${lazyImportStatements}
    export const data = () => [${routes}];
    `;
}

interface Options {}

export default function ({}: Options = {}): Plugin {
    return {
        name: "routes",
        resolveId(id) {
            if (id === ID) {
                return ID;
            }
        },
        load(id) {
            if (id === ID) {
                return makeModuleContent();
            }
        },
    };
}
