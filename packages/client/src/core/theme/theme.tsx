import React, { FC } from "react";
import styled, {
    ThemeProvider as StyledComponentThemeProvider,
    createGlobalStyle,
} from "styled-components/macro";
import { SchemeProvider, useColorScheme } from "../services/colorScheme";
import colors from "material-colors";
import { merge, CSSVariables } from "./utils";

const red = colors.red;
const blue = colors.blue;
const orange = colors.orange;
const grey = colors.grey;

interface Breakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

interface Typography {
    fontSize: number;
    fontFamily: string;
    fontWeight: number;
}

interface Color {
    lighter: string;
    main: string;
    darker: string;
}

export interface Palette {
    primary: Color;
    secondary: Color;
    warning: Color;
    grey: Color;
    background: Color;
    text: Color;
}

export interface Shadow {
    z0: string;
    z1: string;
    z2: string;
    z3: string;
}

export type Spacing = number;

export interface Theme {
    breakpoints: Breakpoints;
    typography: Typography;
    palette: Palette;
    shadow: Shadow;
    spacing: Spacing;
}

interface Themes {
    light: Theme;
    dark: Theme;
}

export const baseTheme = {
    breakpoints: {
        xs: 640,
        sm: 768,
        md: 1024,
        lg: 1280,
        xl: 1920,
    },
    typography: {
        fontSize: 16,
        fontFamily: [
            "HAvenir",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
        ].join(","),
        fontWeight: 400,
    },
    shadow: {
        z0:
            "0px 1px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 2px 0px rgba(0, 0, 0, 0.12)",
        z1:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        z2:
            "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        z3:
            "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);",
    },
    transition: "130ms ease-in",
    palette: {
        primary: {
            lighter: blue[50],
            main: blue[500],
            darker: blue[700],
        },
        secondary: {
            lighter: orange[50],
            main: orange[500],
            darker: orange[700],
        },
        warning: {
            lighter: red[50],
            main: red[500],
            darker: red[700],
        },
        background: {
            lighter: "#FFF",
            main: grey[200],
            darker: grey[300],
        },
        text: {
            lighter: grey[600],
            main: grey[900],
            darker: "#000",
        },
        grey: {
            lighter: "rgba(0,0,0,0.1)",
            main: grey[500],
            darker: grey[700],
        },
    },
    spacing: 8,
};

export const light = {
    ...baseTheme,
};

export const dark = merge(baseTheme, {
    palette: {
        background: {
            lighter: grey[700],
            main: grey[800],
            darker: grey[900],
        },
        text: {
            lighter: grey[50],
            main: grey[100],
            darker: grey[300],
        },
    },
});

export const themes: Themes = {
    light,
    dark,
};

// interface GlobalStylesProps {
//     variables: CSSVariables;
// }
// const GlobalStyled = styled.div<GlobalStylesProps>`
//     ${(props) => ({ ...props.variables })};
// `;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
     box-sizing: border-box;
    }
  html {
    background: ${(props) => `${props.theme.palette.background.darker}`};
  }
`;

export const withTheme = (WrappedComponent: FC) => () => {
    const { scheme } = useColorScheme();
    const theme = themes[scheme] || light;
    // const { variables, theme: variableTheme } = createCSSVariablesTheme(theme);

    return (
        <StyledComponentThemeProvider theme={light}>
            {/* <GlobalStyled variables={variables}> */}
            <GlobalStyle />
            <WrappedComponent />
            {/* </GlobalStyled> */}
        </StyledComponentThemeProvider>
    );
};
