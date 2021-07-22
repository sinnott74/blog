import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import svgr from "vite-plugin-svgr";
import mdx from "vite-plugin-mdx";
import gfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

import macrosPlugin from "vite-plugin-babel-macros";

// `options` are passed to `@mdx-js/mdx`
const options = {
    // See https://mdxjs.com/advanced/plugins
    remarkPlugins: [gfm, frontmatter, remarkMdxFrontmatter],
    // E.g. `remark-frontmatter`
    rehypePlugins: [],
};

const testPlugins = process.env.NODE_ENV !== "test" ? [reactRefresh()] : [];

// https://vitejs.dev/config/
export default defineConfig({
    // This changes the out put dir from dist to build
    // comment this out if that isn't relevant for your project
    build: {
        outDir: "build",
    },
    plugins: [...testPlugins, svgr(), mdx(options), macrosPlugin()],
});
