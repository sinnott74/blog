import React, { FC, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useColorScheme } from "../services/colorScheme";
import { token, themes as virtualThemes } from "virtual:theme";

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

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <GlobalStyle />
            <WrappedComponent />
        </>
    );
};
