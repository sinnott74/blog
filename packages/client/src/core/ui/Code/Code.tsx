import React, { FC } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import light from "prism-react-renderer/themes/vsLight";
import dark from "prism-react-renderer/themes/vsDark";
import { useColorScheme } from "../../services/colorScheme";
import { Box, Card } from "../Layout";
import { Code as CodeText } from "../Typography/Typography";

interface Props {
    className?: string;
    children: string;
}

export const BlockCode: FC<Props> = ({ children, className }) => {
    const { scheme } = useColorScheme();
    const themes = {
        light,
        dark,
    };
    const theme = themes[scheme] || dark;
    const language = className ? (className.replace(/language-/, "") as Language) : "markup";

    return (
        <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Card
                    forwardedAs="pre"
                    accent
                    background="darker"
                    className={className}
                    // style={style}
                >
                    <CodeText>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </CodeText>
                </Card>
            )}
        </Highlight>
    );
};

export const InlineCode: FC<Props> = (props) => (
    <Box component="span" display="inline" spacing="xxsmall" background="darker" {...props}>
        <CodeText {...props} />
    </Box>
);

export const Code: FC<Props> = ({ children, className }) => {
    const CodeType = className?.includes("language-") ? BlockCode : InlineCode;
    return <CodeType className={className}>{children}</CodeType>;
};
