import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import gfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";
import unwrapImages from "remark-unwrap-images";

import { metadata, routes } from "./src/plugins";

import macrosPlugin from "vite-plugin-babel-macros";

import analyze from "rollup-plugin-analyzer";

import rehypePrism from "@mapbox/rehype-prism";

import { SourceMapGenerator } from "source-map";

// @ts-ignore
const macrosPluginDefault: typeof macrosPlugin = macrosPlugin.default;

// `options` are passed to `@mdx-js/mdx`
const options = {
    // See https://mdxjs.com/advanced/plugins
    remarkPlugins: [gfm, frontmatter, remarkMdxFrontmatter, unwrapImages],
    // E.g. `remark-frontmatter`
    rehypePlugins: [rehypePrism],
    providerImportSource: "@mdx-js/react",
    SourceMapGenerator,
};

const testPlugins = process.env.NODE_ENV !== "test" ? [reactRefresh()] : [];

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "build",
        rollupOptions: {
            plugins: [analyze()],
        },
    },
    base: process.env.VITE_BASE_URL || "/",
    plugins: [routes(), metadata(), ...testPlugins, svgr(), mdx(options), macrosPluginDefault()],
});
