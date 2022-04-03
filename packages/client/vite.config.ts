import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import macrosPlugin from "vite-plugin-babel-macros";
import analyze from "rollup-plugin-analyzer";

const testPlugins = process.env.NODE_ENV !== "test" ? [reactRefresh()] : [];

// https://vitejs.dev/config/
export default defineConfig(async () => {
    const { metadata, routes, mdx: mdxPromise, theme, compiledCSS } = await import("./src/plugins");
    const mdx = await mdxPromise();
    return {
        build: {
            outDir: "build",
            rollupOptions: {
                plugins: [analyze()],
            },
        },
        base: process.env.VITE_BASE_URL || "/",
        plugins: [
            theme(),
            compiledCSS(),
            routes(),
            metadata(),
            ...testPlugins,
            svgr(),
            mdx(),
            macrosPlugin(),
        ],
    };
});
