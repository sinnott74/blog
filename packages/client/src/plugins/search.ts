import type { Plugin } from "vite";
import murmurhash from "murmurhash";
import { getPostFilenames } from "./common";
import { promises as fs } from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { toString } from "mdast-util-to-string";

const ID = "@search";

const TEST = {
    a: ["Saab", "Volvo", "BMW"],
    b: ["Saab", "Volvo", "Mazda"],
    c: ["Saab", "Volvo", "BMW"],
} as const;
type TestType = typeof TEST;
type TestKey = keyof TestType;

const numHashes = 7;
const numBits = 10000;

const processMarkdownFile = (file: Buffer) => {
    const ast = unified().use(remarkParse).parse(file);
    return toString(ast);
};

export async function makeModuleContent() {
    const posts = getPostFilenames();

    const postWords: {
        [post: string]: string[];
    } = {};
    for (const post of posts) {
        const file = await fs.readFile(`./posts/${post}`);
        const text = processMarkdownFile(file);
        const words = text
            .split(" ")
            .map((word) => word.toLowerCase().split("\n"))
            .flatMap((word) => word)
            .filter(Boolean);
        postWords[post] = words;
    }

    console.log(postWords);

    const encodedBlooms = Object.keys(postWords).reduce((acc, key) => {
        const bloom = new Array(numBits).fill(0);
        postWords[key as TestKey].forEach((word: string) => {
            new Array(numHashes).fill(0).forEach((_, i) => {
                const hash = murmurhash.v3(word, i) % numBits;
                bloom[hash] = 1;
            });
        });
        acc[key] = bloom.join("");
        return acc;
    }, {} as { [key: string]: string });

    const importStatement = "import murmurhash from 'murmurhash';";
    const hashesStatement = `const numHashes = ${numHashes};`;
    const bitsStatement = `const numBits = ${numBits};`;
    const bloomStatement = `
    console.time("blooms");
    const encodedBlooms = JSON.parse('${JSON.stringify(encodedBlooms)}');
    const blooms = Object.keys(encodedBlooms).reduce((acc, key) => {
        const encodedBloom = encodedBlooms[key];
        const bloom = encodedBloom.split("").map(n => n === "1");
        acc[key] = bloom;
        return acc;
    }, {});
    console.timeEnd("blooms");
    `;
    const bloomTestStatement = `
    export const test = (words) => {
        console.time(words);
        const wordHashes = words
            .split(" ")
            .map((word) => {
                return new Array(numHashes).fill(0).map((_, i) => {
                    const hash = murmurhash.v3(word, i) % numBits;
                    return hash;
                });
            })
            .flatMap((hash) => hash);

        const matches = Object.keys(blooms).filter((bloomKey) => {
            const bloom = blooms[bloomKey];
            return wordHashes.every((hash) => {
                return bloom[hash];
            });
        });
        console.timeEnd(words);

        return matches;
    };`;

    return `
    ${importStatement}
    ${hashesStatement}
    ${bitsStatement}
    ${bloomStatement}
    ${bloomTestStatement}
    `;
}

interface Options {}

export default function ({}: Options = {}): Plugin {
    return {
        name: "search",
        resolveId(id) {
            if (id === ID) {
                return ID;
            }
        },
        async load(id) {
            if (id === ID) {
                return makeModuleContent();
            }
        },
    };
}
