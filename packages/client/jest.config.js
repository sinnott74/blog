module.exports = {
    preset: "vite-jest",
    moduleNameMapper: {
        "\\.svg$": "<rootDir>/__mocks__/svgrMock.ts",
    },
    testEnvironment: "jsdom",
    collectCoverageFrom: ["**/*.{ts,tsx}", "!**/examples.tsx", "!**/node_modules/**"],
};
