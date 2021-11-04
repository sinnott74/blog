import React from "react";
// import { withSideNav } from "./hooks/sidenav";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import { HeaderLayout } from "./core/ui/HeaderLayout/HeaderLayout";
import { withTheme } from "./core/theme/theme";
// import { DarkModeSwitch } from "./core/ui/Switch/DarkModeSwitch";
import { withScheme } from "./core/services/colorScheme";
import { Search } from "./core/ui/Icons";
import { test } from "@search";

const baseUrl = import.meta.env.BASE_URL || "";

const onSearchClick = () => {
    const term = prompt("Search term");
    const documents = test(term || "");
    console.log(documents);
};

const App: React.FC = () => {
    return (
        <Router basename={baseUrl}>
            <HeaderLayout right={<Search onClick={onSearchClick} />}>
                <Routes />
            </HeaderLayout>
        </Router>
    );
};
export default withScheme(withTheme(App));
