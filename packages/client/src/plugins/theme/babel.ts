import { PluginItem } from "@babel/core";
import * as t from "@babel/types";
import { Scope, Binding } from "@babel/traverse";
import { TokenKey, tokenKeys, VIRTUAL_MODULE_ID } from "./const";
import { tokenToCssVar } from "./util";

/**
 * Checks if a name in a given scope is the token API
 *
 * Imports can have aliases / be renamed at time of import
 */
const isTokenAPI = (scope: Scope, name: string): boolean => {
    const binding = getBinding(scope, name);
    if (!binding) {
        return false;
    }
    if (!t.isImportSpecifier(binding.path.node)) {
        return false;
    }
    if (!t.isIdentifier(binding.path.node.imported)) {
        return false;
    }
    return binding.path.node.imported.name === "token";
};

/**
 * Get the Binding of a given name from the current or parent scope if the Binding exists.
 */
const getBinding = (scope: Scope, name: string): Binding | undefined => {
    if (!scope) {
        return undefined;
    }
    return scope.bindings[name] || getBinding(scope.parent, name);
};

/**
 * Babel plugin responsible for transforming the token API into its css variable.
 * e.g. token("typography-fontFamily") => var(--TYPOGRAPHY-FONTFAMILY)
 */
export default (): PluginItem => ({
    visitor: {
        Program: {
            exit(path, state) {
                path.traverse({
                    ImportDeclaration(path) {
                        if (path.node.source.value !== VIRTUAL_MODULE_ID) {
                            return;
                        }

                        // Go through each import and enable each found API
                        path.get("specifiers").forEach((specifier) => {
                            if (!specifier.isImportSpecifier()) {
                                return;
                            }

                            ["token"].forEach((apiName) => {
                                if (
                                    t.isIdentifier(specifier.node.imported) &&
                                    specifier.node.imported.name === apiName
                                ) {
                                    // Remove import
                                    specifier.remove();
                                }
                            });
                        });

                        // Remove import declaration if nothing imported from it
                        if (path.node.specifiers.length === 0) {
                            path.remove();
                        }
                    },
                });
            },
        },
        CallExpression(path, state) {
            if (t.isIdentifier(path.node.callee) && isTokenAPI(path.scope, path.node.callee.name)) {
                if (!path.node.arguments[0] || !t.isStringLiteral(path.node.arguments[0])) {
                    throw new Error("Token required");
                }

                const token = path.node.arguments[0].value as TokenKey;
                if (!tokenKeys.includes(token)) {
                    throw new Error("Token not recoignised");
                }
                const replacement = tokenToCssVar(token);

                if (t.isTemplateLiteral(path.parent)) {
                    const expressionIndex = path.parent.expressions.indexOf(path.node);
                    const prevTemplateElement = path.parent.quasis[expressionIndex];
                    const nextTemplateElement = path.parent.quasis[expressionIndex + 1];

                    if (t.isTemplateElement(prevTemplateElement)) {
                        // combine previous, replacement css var and next strings
                        prevTemplateElement.value.cooked =
                            prevTemplateElement.value.cooked +
                            replacement +
                            nextTemplateElement.value.cooked;
                        prevTemplateElement.value.raw =
                            prevTemplateElement.value.raw +
                            replacement +
                            nextTemplateElement.value.raw;

                        // If next element is last, previous is now last
                        prevTemplateElement.tail = nextTemplateElement.tail;

                        // remove token call expression
                        path.remove();
                        // remove next template element
                        path.parent.quasis.splice(expressionIndex + 1, 1);
                    }
                } else {
                    path.replaceWith(t.stringLiteral(replacement));
                }
            }
        },
    },
});
