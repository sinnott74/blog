import React, { FC } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import light from "prism-react-renderer/themes/vsLight";
import dark from "prism-react-renderer/themes/vsDark";
import { useColorScheme } from "../../services/colorScheme";
import { Card } from "../Layout";

interface Props {
    className?: string;
    children: string;
}

export const Code: FC<Props> = ({ children, className }) => {
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
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </Card>
            )}
        </Highlight>
    );
};
