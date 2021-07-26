import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import svgr from "vite-plugin-svgr";
import mdx from "vite-plugin-mdx";
import gfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

import { metadata, routes } from "./src/plugins";

import macrosPlugin from "vite-plugin-babel-macros";

import analyze from "rollup-plugin-analyzer";

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
        rollupOptions: {
            plugins: [analyze()],
        },
    },
    base: process.env.VITE_BASE_URL || "/",
    plugins: [routes(), metadata(), ...testPlugins, svgr(), mdx(options), macrosPlugin()],
});
