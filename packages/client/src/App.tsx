import React from "react";
// import { withSideNav } from "./hooks/sidenav";
import { withMdx } from "./core/services/mdx";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import { HeaderLayout } from "./core/ui/HeaderLayout/HeaderLayout";
import { withTheme } from "./core/theme/theme";
// import { DarkModeSwitch } from "./core/ui/Switch/DarkModeSwitch";
import { withScheme } from "./core/services/colorScheme";

const App: React.FC = () => {
    return (
        <Router basename={import.meta.env.BASE_URL || ""}>
            <HeaderLayout>
                <Routes></Routes>
            </HeaderLayout>
        </Router>
    );
};
export default withScheme(withTheme(withMdx(App)));
