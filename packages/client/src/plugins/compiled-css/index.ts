import type { Plugin } from "vite";
import { VIRTUAL_MODULE_ID } from "./const";
import { transformAsync } from "@babel/core";
import transformRequire from "./babel-require-to-import-transform";

export default function (): Plugin[] {
    return [
        {
            name: VIRTUAL_MODULE_ID,
            enforce: "pre",
            resolveId(id) {
                const cssPrefix = "compiled-css.css?style=";
                if (id.startsWith(cssPrefix)) {
                    return id;
                }
            },
            load(id) {
                // Resolve the imports inserted by `@compiled/babel-plugin-strip-runtime`
                const cssPrefix = "compiled-css.css?style=";
                if (id.startsWith(cssPrefix)) {
                    const styleRule = id.slice(cssPrefix.length);
                    try {
                        const code = decodeURIComponent(styleRule);
                        return code;
                    } catch (e) {
                        // During vite preview each url is has already ran this through decodeURI
                        // It does this during its server middleware
                        // https://github.com/vitejs/vite/blob/dddda1e05dd2184960afdcdf2960053acb30f5a9/packages/vite/src/node/server/middlewares/transform.ts#L62
                        // decodeURI uri differs from decodeURIComponent however with the following chars: ; / ? : @ & = + $ , #
                        const decodedChars = {
                            "%3A": ":",
                            "%40": "@",
                        };
                        const decodedStyledRule = (
                            Object.keys(decodedChars) as Array<keyof typeof decodedChars>
                        ).reduce((rule, encodedChar) => {
                            const decodedChar = decodedChars[encodedChar];
                            return rule.replaceAll(encodedChar, decodedChar);
                        }, styleRule);
                        return decodedStyledRule;
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

                const result = await transformAsync(src, {
                    plugins: [
                        ["@babel/plugin-syntax-typescript", { isTSX: true }],
                        "@compiled/babel-plugin",
                        [
                            "@compiled/babel-plugin-strip-runtime",
                            {
                                styleSheetPath: "compiled-css.css",
                            },
                        ],
                        // compiledJs uses require instead of import
                        // https://github.com/atlassian-labs/compiled/blob/master/packages/babel-plugin-strip-runtime/src/index.ts#L38
                        // need to convert to esm
                        transformRequire,
                    ],
                });

                return {
                    code: result?.code || src,
                    map: null,
                };
            },
        },
    ];
}
