const svgr = require("vite-plugin-svgr");
const macrosPlugin = require("vite-plugin-babel-macros");

exports.default = {
    core: {
        builder: "storybook-builder-vite",
    },
    stories: ["../src/**/examples.tsx"],
    addons: [
        "@storybook/addon-essentials",
        // "@storybook/addon-a11y",
        "@storybook/addon-storysource",
        // "@storybook/addon-viewport",
    ],
    viteFinal: async (config) => {
        const { metadata, routes, mdx } = await import("@internal/plugins");
        // mdx is already included in the plugins (at index 2). Removing it so we can configure it ourselves
        // https://github.com/eirslett/storybook-builder-vite/blob/main/packages/storybook-builder-vite/vite-config.js
        config.plugins?.splice(2, 1, metadata(), routes(), svgr(), mdx(), macrosPlugin.default());
        return config;
    },
};

// Should be able to move this away from the cjs & seperate package hack using this https://github.com/eirslett/storybook-builder-vite/issues/43#issuecomment-868025150
// once storybook supports .cts (commonjs typescript) - https://github.com/storybookjs/storybook/issues/16948
