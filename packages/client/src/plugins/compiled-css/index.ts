import type { Plugin } from "vite";
import { VIRTUAL_MODULE_ID } from "./const";
import { transformAsync } from "@babel/core";

export default function (): Plugin {
    return {
        name: VIRTUAL_MODULE_ID,
        enforce: "pre",

        resolveId(id) {
            const cssPrefix = "compiled-css.css?style=";
            if (id.startsWith(cssPrefix)) {
                return id;
            }
        },
        load(id) {
            const cssPrefix = "compiled-css.css?style=";
            if (id.startsWith(cssPrefix)) {
                const styleRule = id.slice(cssPrefix.length);
                console.log(styleRule);
                try {
                    const code = decodeURIComponent(styleRule);
                    return code;
                } catch (e) {
                    console.error(e);
                    return "";
                }
            }
        },

        async transform(src, id) {
            if (!src.includes("@compiled/react")) {
                return {
                    code: src,
                    map: null, // provide source map if available
                };
            }

            const newCode = await transformAsync(src, {
                plugins: [
                    ["@babel/plugin-syntax-typescript", { isTSX: true }],
                    "@compiled/babel-plugin",
                    [
                        "@compiled/babel-plugin-strip-runtime",
                        {
                            styleSheetPath: "compiled-css.css",
                        },
                    ],
                ],
            });

            return {
                code: newCode?.code || src,
                map: newCode?.map, // provide source map if available
            };
        },
    };
}
