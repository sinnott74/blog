import React, { FC, useState, createContext, useContext } from "react";

interface SideNavContext {
    opened: boolean;
    openSideNav: () => void;
    closeSideNav: () => void;
    toggleSideNav: () => void;
}

const SideNavContext = createContext<SideNavContext>(null!);

const MessageProvider: FC = ({ children }) => {
    const [opened, setOpened] = useState(false);

    const openSideNav = () => {
        setOpened(true);
    };

    const closeSideNav = () => {
        setOpened(false);
    };

    const toggleSideNav = () => {
        setOpened(open => !open);
    };

    return (
        <SideNavContext.Provider value={{ opened, openSideNav, closeSideNav, toggleSideNav }}>
            {children}
        </SideNavContext.Provider>
    );
};

export const withSideNav = (WrappedComponent: any) => () => (
    <MessageProvider>
        <WrappedComponent />
    </MessageProvider>
);

export const useSideNav = () => useContext(SideNavContext);
