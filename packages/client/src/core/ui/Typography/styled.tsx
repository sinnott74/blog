import styled from "styled-components/macro";

interface TypographyProps {
    alternative?: boolean;
}

interface TextProps extends TypographyProps {
    secondary?: boolean;
}

export const Heading1 = styled.h1<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    /* font-family: ${(props) => `var(${props.theme.typography.fontFamily})`}; */
    color: ${(props) =>
        props.alternative ? props.theme.palette.background.main : props.theme.palette.text.main};
    font-weight: 300;
    margin: 0;
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize * 3.75}px`};
    /* font-size: ${(props) => `calc(var(${props.theme.typography.fontSize}) * 3.75)`}; */
`;

export const Heading2 = styled.h2<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    /* font-family: ${(props) => `var(${props.theme.typography.fontFamily})`}; */
    color: ${(props) =>
        props.alternative ? props.theme.palette.background.main : props.theme.palette.text.main};
    font-weight: 300;
    margin: 0;
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize * 2.5}px`};
    /* font-size: ${(props) => `calc(var(${props.theme.typography.fontSize}) * 2.5)`}; */
`;

export const Heading3 = styled.h3<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    /* font-family: ${(props) => `var(${props.theme.typography.fontFamily})`}; */
    color: ${(props) =>
        props.alternative ? props.theme.palette.background.main : props.theme.palette.text.main};
    font-weight: 400;
    margin: 0;
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize * 2.125}px`};
    /* font-size: ${(props) => `calc(var(${props.theme.typography.fontSize}) * 2.125)`}; */
`;

export const Heading4 = styled.h4<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    /* font-family: ${(props) => `var(${props.theme.typography.fontFamily})`}; */
    color: ${(props) =>
        props.alternative ? props.theme.palette.background.main : props.theme.palette.text.main};
    font-weight: ${(props) => props.theme.typography.fontWeight};
    margin: 0;
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize * 1.5}px`};
    /* font-size: ${(props) => `calc(var(${props.theme.typography.fontSize}) * 1.5)`}; */
`;

export const Heading5 = styled.h5<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    /* font-family: ${(props) => `var(${props.theme.typography.fontFamily})`}; */
    color: ${(props) =>
        props.alternative ? props.theme.palette.background.main : props.theme.palette.text.main};
    font-weight: 400;
    margin: 0;
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize * 1.25}px`};
    /* font-size: ${(props) => `calc(var(${props.theme.typography.fontSize}) * 1.25)`}; */
`;

export const Heading6 = styled.h6<TypographyProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    /* font-family: ${(props) => `var(${props.theme.typography.fontFamily})`}; */
    color: ${(props) =>
        props.alternative ? props.theme.palette.background.main : props.theme.palette.text.main};
    font-weight: 500;
    margin: 0;
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize}px`};
    /* font-size: ${(props) => `var(${props.theme.typography.fontSize})`}; */
`;

export const Text = styled.p<TextProps>`
    font-family: ${(props) => props.theme.typography.fontFamily};
    /* font-family: ${(props) => `var(${props.theme.typography.fontFamily})`}; */
    color: ${(props) => {
        const weight = props.secondary ? "lighter" : "main";
        return props.alternative
            ? props.theme.palette.background[weight]
            : props.theme.palette.text[weight];
    }};
    font-weight: 400;
    margin: 0;
    line-height: ${(props) => `${props.theme.typography.fontSize * 1.5}px`};
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize}px`};
    /* font-size: ${(props) => `${props.theme.typography.fontSize}px`}; */
`;

export const Code = styled.code<TextProps>`
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    color: ${(props) => {
        const weight = props.secondary ? "lighter" : "main";
        return props.alternative
            ? props.theme.palette.background[weight]
            : props.theme.palette.text[weight];
    }};
    font-weight: 400;
    margin: 0;
    line-height: ${(props) => `${props.theme.typography.fontSize * 1.5}px`};
    /* margin-bottom: 0.35em; */
    font-size: ${(props) => `${props.theme.typography.fontSize * 0.875}px`};
    /* font-size: ${(props) => `${props.theme.typography.fontSize}px`}; */
    background-color: ${(props) => props.theme.palette.background.darker};
`;
