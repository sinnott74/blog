import React, { useState, useEffect, createContext, FC, useContext, useCallback } from "react";

type Light = "light";
type Dark = "dark";
type Scheme = Light | Dark;
interface Schemes {
    [key: string]: Scheme;
}

const SCHEMES: Schemes = {
    light: "light",
    dark: "dark",
};

const LOCAL_STORAGE_KEY = "prefers-color-scheme";

const getLocalStoreTheme = () => {
    const initialLocalStoredTheme = (localStorage && localStorage.getItem(LOCAL_STORAGE_KEY)) || "";
    if (initialLocalStoredTheme === SCHEMES.light || initialLocalStoredTheme === SCHEMES.dark) {
        return initialLocalStoredTheme;
    }
    return null;
};

const getMatchMediaTheme = () => {
    return window.matchMedia && window.matchMedia(`(${LOCAL_STORAGE_KEY}: dark)`).matches
        ? SCHEMES.dark
        : SCHEMES.light;
};

const initialScheme = getLocalStoreTheme() || getMatchMediaTheme();

interface Context {
    scheme: Scheme;
    setScheme: (scheme: Scheme) => void;
    toggleScheme: () => void;
    isDarkMode: boolean;
}

const SchemeContext = createContext<Context>({
    scheme: initialScheme,
    setScheme: () => {},
    toggleScheme: () => {},
    isDarkMode: false,
});

export const SchemeProvider: FC = ({ children }) => {
    const [scheme, setScheme] = useState<Scheme>(initialScheme);

    useEffect(() => {
        localStorage && localStorage.setItem(LOCAL_STORAGE_KEY, scheme);
    }, [scheme]);

    const toggleScheme = useCallback(() => {
        setScheme((current) => (current === SCHEMES.light ? SCHEMES.dark : SCHEMES.light));
    }, []);

    const isDarkMode = scheme === SCHEMES.dark;

    return (
        <SchemeContext.Provider value={{ scheme, setScheme, toggleScheme, isDarkMode }}>
            {children}
        </SchemeContext.Provider>
    );
};

export const useColorScheme = () => useContext(SchemeContext);

export const withScheme = (WrappedComponent: FC) => () => {
    return (
        <SchemeProvider>
            <WrappedComponent />
        </SchemeProvider>
    );
};
