import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import { metadata, routes, mdx } from "@internal/plugins";
import macrosPlugin from "vite-plugin-babel-macros";
import analyze from "rollup-plugin-analyzer";

// vite doesn't use my config so allowSyntheticDefaultImports doesn't get used
// @ts-ignore
const macrosPluginDefault: typeof macrosPlugin = macrosPlugin.default;

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
    plugins: [routes(), metadata(), ...testPlugins, svgr(), mdx(), macrosPluginDefault()],
});
