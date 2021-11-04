module.exports = {
    preset: "ts-jest/presets/js-with-babel-esm",
    globals: {
        "ts-jest": {
            useESM: true,
            babelConfig: {
                presets: ["@babel/preset-react"],
                plugins: ["macros"],
            },
        },
    },
    moduleNameMapper: {
        "\\.svg$": "<rootDir>/__mocks__/svgrMock.ts",
    },
    testEnvironment: "jsdom",
    collectCoverageFrom: ["**/*.{ts,tsx}", "!**/examples.tsx", "!**/node_modules/**"],
};
