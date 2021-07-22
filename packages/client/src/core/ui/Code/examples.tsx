import React from "react";
import { Code } from "./Code";

export default {
    component: Code,
    title: "Code",
};

export const HelloWorld = () => {
    const exampleCode = `
    (function someDemo() {
    var test = "Hello World!";
    console.log(test);
})();

return () => <App />;
    `;

    return <Code className="language-tsx">{exampleCode}</Code>;
};
