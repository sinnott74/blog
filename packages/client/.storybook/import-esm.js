// Storybook doesn't allow us to import of ESModules (yet)
// We are allowed to dynamic import() ESM files
// However, typescript will convert all import()'s to require's
// This file's responsibility is to force tsc to not convert the import
// Its ignore by our storybook tsconfig and doesn't get transpiled
// https://github.com/TypeStrong/ts-node/discussions/1290
function importESM(file) {
    return import(file);
}

module.exports = importESM;
