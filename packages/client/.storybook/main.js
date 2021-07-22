const svgr = require("vite-plugin-svgr");
const mdx = require("vite-plugin-mdx").default;
const gfm = require("remark-gfm").default;
const frontmatter = require("remark-frontmatter").default;
const remarkMdxFrontmatter = require("remark-frontmatter").remarkMdxFrontmatter;
const macrosPlugin = require("vite-plugin-babel-macros").default;

const options = {
    remarkPlugins: [gfm, frontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
};

module.exports = {
    core: {
        builder: "storybook-builder-vite",
    },
    stories: ["../src/**/examples.tsx"],
    addons: [
        "@storybook/addon-essentials",
        // "@storybook/addon-a11y",
        "@storybook/addon-storysource",
        "@storybook/addon-viewport",
    ],
    viteFinal: async (config, { configType }) => {
        // mdx is already included in the plugins (at index 2). Removing it so we can configure it ourselves
        // https://github.com/eirslett/storybook-builder-vite/blob/main/packages/storybook-builder-vite/vite-config.js
        config.plugins.splice(2, 1, svgr(), mdx(options), macrosPlugin());
        return config;
    },
};
