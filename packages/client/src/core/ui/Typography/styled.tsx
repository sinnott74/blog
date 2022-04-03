import { styled } from "@compiled/react";
import { token } from "virtual:theme";

interface TypographyProps {
    alternative?: boolean;
}

export const Heading1 = styled.h1<TypographyProps>`
    font-family: ${token("typography-fontFamily")};
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-highEmphasis")};
    font-weight: 300;
    margin: 0;
    font-size: calc(${token("typography-fontSize")} * 3.75);
`;

export const Heading2 = styled.h2<TypographyProps>`
    font-family: ${token("typography-fontFamily")};
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-highEmphasis")};
    font-weight: 300;
    margin: 0;
    font-size: calc(${token("typography-fontSize")} * 2.5);
`;

export const Heading3 = styled.h3<TypographyProps>`
    font-family: ${token("typography-fontFamily")};
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-highEmphasis")};
    font-weight: 400;
    margin: 0;
    font-size: calc(${token("typography-fontSize")} * 2.125);
`;

export const Heading4 = styled.h4<TypographyProps>`
    font-family: ${token("typography-fontFamily")};
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-highEmphasis")};
    font-weight: 400;
    margin: 0;
    font-size: calc(${token("typography-fontSize")} * 1.5);
`;

export const Heading5 = styled.h5<TypographyProps>`
    font-family: ${token("typography-fontFamily")};
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-highEmphasis")};
    font-weight: 400;
    margin: 0;
    font-size: calc(${token("typography-fontSize")} * 1.25);
`;

export const Heading6 = styled.h6<TypographyProps>`
    font-family: ${token("typography-fontFamily")};
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-highEmphasis")};
    font-weight: 500;
    margin: 0;
    font-size: ${token("typography-fontSize")};
`;

export const Text = styled.p<TypographyProps>`
    font-family: ${token("typography-fontFamily")};
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-mediumEmphasis")};
    font-weight: 400;
    margin: 0;
    line-height: calc(${token("typography-fontSize")} * 1.5);
    font-size: ${token("typography-fontSize")};
`;

export const SecondaryText = styled(Text)<TypographyProps>`
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-lowEmphasis")};
`;

export const Code = styled.code<TypographyProps>`
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    color: ${(props) =>
        props.alternative ? token("color-text-onBold") : token("color-text-mediumEmphasis")};
    font-weight: 400;
    margin: 0;
    line-height: calc(${token("typography-fontSize")} * 1.5);
    font-size: calc(${token("typography-fontSize")} * 0.875);
`;
