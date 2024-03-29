import React, { FC } from "react";
import { useColorScheme } from "../../services/colorScheme";
import { Box } from "../Layout";
import { Code as CodeText } from "../Typography/Typography";
import { styled } from "@compiled/react";
import { token } from "virtual:theme";

interface Props {
    className?: string;
    children: string;
}

// Based off  highlight.js/styles/vs.css
const LightThemeCode = styled(CodeText)`
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: white;
        color: black;
    }

    .hljs-comment,
    .hljs-quote,
    .hljs-variable {
        color: #008000;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-built_in,
    .hljs-name,
    .hljs-tag {
        color: #00f;
    }

    .hljs-string,
    .hljs-title,
    .hljs-section,
    .hljs-attribute,
    .hljs-literal,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-type,
    .hljs-addition {
        color: #a31515;
    }

    .hljs-deletion,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-meta {
        color: #2b91af;
    }

    .hljs-doctag {
        color: #808080;
    }

    .hljs-attr {
        color: #f00;
    }

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link {
        color: #00b0e8;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }
`;

// highlight.js/styles/vs2015.css
const DarkThemeCode = styled(CodeText)`
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: #1e1e1e;
        color: #dcdcdc;
    }

    .hljs-keyword,
    .hljs-literal,
    .hljs-symbol,
    .hljs-name {
        color: #569cd6;
    }
    .hljs-link {
        color: #569cd6;
        text-decoration: underline;
    }

    .hljs-built_in,
    .hljs-type {
        color: #4ec9b0;
    }

    .hljs-number,
    .hljs-class {
        color: #b8d7a3;
    }

    .hljs-string,
    .hljs-meta-string {
        color: #d69d85;
    }

    .hljs-regexp,
    .hljs-template-tag {
        color: #9a5334;
    }

    .hljs-subst,
    .hljs-function,
    .hljs-title,
    .hljs-params,
    .hljs-formula {
        color: #dcdcdc;
    }

    .hljs-comment,
    .hljs-quote {
        color: #57a64a;
        font-style: italic;
    }

    .hljs-doctag {
        color: #608b4e;
    }

    .hljs-meta,
    .hljs-meta-keyword,
    .hljs-tag {
        color: #9b9b9b;
    }

    .hljs-variable,
    .hljs-template-variable {
        color: #bd63c5;
    }

    .hljs-attr,
    .hljs-attribute,
    .hljs-builtin-name {
        color: #9cdcfe;
    }

    .hljs-section {
        color: gold;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }

    .hljs-bullet,
    .hljs-selector-tag,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
        color: #d7ba7d;
    }

    .hljs-addition {
        background-color: #144212;
        display: inline-block;
        width: 100%;
    }

    .hljs-deletion {
        background-color: #600;
        display: inline-block;
        width: 100%;
    }
`;

const ThemedCode: FC<Props> = ({ children }) => {
    const { isDarkMode } = useColorScheme();
    const ThemeCode = isDarkMode ? DarkThemeCode : LightThemeCode;
    return <ThemeCode>{children}</ThemeCode>;
};

const CodeBox = styled(Box)`
    background: ${token("color-background-subtleNeutral-resting")};
    border-left: calc(${token("spacing")} / 2) solid ${token("color-background-boldBrand-resting")};
`;

export const BlockCode: FC<Props> = ({ children, className }) => (
    <CodeBox className={className} component="pre" display="flex">
        <ThemedCode>{children}</ThemedCode>
    </CodeBox>
);

const InlineCodeBox = styled(Box)`
    background: ${token("color-background-subtleNeutral-resting")};
`;

export const InlineCode: FC<Props> = (props) => (
    <InlineCodeBox component="span" display="inline" spacing="xxsmall">
        <CodeText {...props} />
    </InlineCodeBox>
);

export const Code: FC<Props> = ({ children, className }) => {
    const CodeType = className?.includes("language-") ? BlockCode : InlineCode;
    return <CodeType className={className}>{children}</CodeType>;
};
