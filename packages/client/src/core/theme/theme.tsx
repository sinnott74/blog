import React, { FC } from "react";
import { createGlobalStyle } from "styled-components";
import { useColorScheme } from "../services/colorScheme";
import { token, themes as virtualThemes } from "virtual:theme";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
     box-sizing: border-box;
    }
  html {
    background: ${token("color-background-default")};
  }
`;

export const withTheme = (WrappedComponent: FC) => () => {
    const { scheme } = useColorScheme();
    const theme = virtualThemes[scheme] || virtualThemes.light;

    return (
        <>
            <Helmet htmlAttributes={{ "data-theme": theme }} />
            <GlobalStyle />
            <WrappedComponent />
        </>
    );
};
