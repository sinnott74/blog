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
// Based off themes in https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const LightThemeCode = styled(CodeText)`
    & .comment {
        color: rgb(0, 128, 0);
    }
    & .builtin {
        color: rgb(0, 112, 193);
    }
    & .number,
    & .variable,
    & .inserted {
        color: rgb(9, 134, 88);
    }
    & .operator {
        color: rgb(0, 0, 0);
    }
    & .constant,
    & .chars {
        color: rgb(129, 31, 63);
    }
    & .tag {
        color: rgb(128, 0, 0);
    }
    & .attr-name {
        color: rgb(255, 0, 0);
    }
    & .deleted,
    & .string {
        color: rgb(163, 21, 21);
    }
    & .changed,
    & .punctuation {
        color: rgb(4, 81, 165);
    }
    & .function,
    & .keyword {
        color: rgb(0, 0, 255);
    }
    & .class-name {
        color: rgb(38, 127, 153);
    }
`;

const DarkThemeCode = styled(CodeText)`
    & .prolog {
        color: rgb(0, 0, 128);
    }

    & .comment {
        color: rgb(106, 153, 85);
    }

    & .builtin,
    & .changed,
    & .keyword,
    & .interpolation-punctuation {
        color: rgb(86, 156, 214);
    }

    & .number,
    & .inserted {
        color: rgb(181, 206, 168);
    }

    & .constant {
        color: rgb(100, 102, 149);
    }

    & .attr-name,
    & .variable {
        color: rgb(156, 220, 254);
    }

    & .deleted,
    & .string,
    & .attr-value,
    & .template-punctuation {
        color: rgb(206, 145, 120);
    }

    & .selector {
        color: rgb(215, 186, 125);
    }

    & .tag {
        color: rgb(78, 201, 176);
    }

    & .language-markup .tag {
        color: rgb(86, 156, 214);
    }

    & .punctuation,
    & .operator {
        color: rgb(212, 212, 212);
    }

    & .language-markup .punctuation {
        color: #808080;
    }

    & .function {
        color: rgb(220, 220, 170);
    }

    & .class-name {
        color: rgb(78, 201, 176);
    }

    & .char {
        color: rgb(209, 105, 105);
    }
`;

const ThemedCode: FC<Props> = ({ children }) => {
    const { isDarkMode } = useColorScheme();
    const ThemeCode = isDarkMode ? DarkThemeCode : LightThemeCode;
    return <ThemeCode>{children}</ThemeCode>;
};

export const BlockCode: FC<Props> = ({ children, className }) => {
    return (
        <Box
            component="pre"
            className={className}
            accent
            background={token("color-background-subtleNeutral-resting")}
        >
            <ThemedCode>{children}</ThemedCode>
        </Box>
    );
};

export const InlineCode: FC<Props> = (props) => (
    <Box
        component="span"
        display="inline"
        spacing="xxsmall"
        background={token("color-background-subtleNeutral-resting")}
        {...props}
    >
        <CodeText {...props} />
    </Box>
);

export const Code: FC<Props> = ({ children, className }) => {
    const CodeType = className?.includes("language-") ? BlockCode : InlineCode;
    return <CodeType className={className}>{children}</CodeType>;
};
