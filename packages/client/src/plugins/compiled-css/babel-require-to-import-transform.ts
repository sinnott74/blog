import { PluginItem } from "@babel/core";
import * as t from "@babel/types";

/**
 * Babel plugin responsible for transforming the token API into its css variable.
 * e.g. token("typography-fontFamily") => var(--TYPOGRAPHY-FONTFAMILY)
 */
export default (): PluginItem => {
    const imports: t.ImportDeclaration[] = [];
    return {
        visitor: {
            CallExpression(path, state) {
                if (
                    t.isIdentifier(path.node.callee) &&
                    path.node.callee.name === "require" &&
                    path.node.arguments.length === 1 &&
                    t.isStringLiteral(path.node.arguments[0])
                ) {
                    const requiredModule = path.node.arguments[0].value;
                    const importDeclaration = t.importDeclaration(
                        [],
                        t.stringLiteral(requiredModule),
                    );
                    imports.push(importDeclaration);

                    path.parentPath.remove();
                }
            },
            Program: {
                exit(path, state) {
                    // @ts-ignore
                    path.node.body.unshift(...imports);
                },
            },
        },
    };
};
