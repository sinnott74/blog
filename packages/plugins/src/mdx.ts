import { defineConfig } from "vite";

import mdx from "@mdx-js/rollup";
import gfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";
import unwrapImages from "remark-unwrap-images";

// @ts-ignore
import rehypePrism from "@mapbox/rehype-prism";

import { SourceMapGenerator } from "source-map";

// `options` are passed to `@mdx-js/mdx`
const options = {
    // See https://mdxjs.com/advanced/plugins
    remarkPlugins: [gfm, frontmatter, remarkMdxFrontmatter, unwrapImages],
    // E.g. `remark-frontmatter`
    rehypePlugins: [rehypePrism],
    providerImportSource: "@mdx-js/react",
    SourceMapGenerator,
};

export default () => mdx(options);
