import type { Plugin } from "vite";
import { getPostsMetaData } from "./common";

const ID = "@metadata";

function makeModuleContent() {
    const postMetadata = getPostsMetaData();
    return `export const data = () => [${Object.values(postMetadata)
        .map((post) => JSON.stringify(post))
        .join(", \n")}]`;
}

interface Options {}

export default function ({}: Options = {}): Plugin {
    return {
        name: "metadata",
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
