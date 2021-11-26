import React from "react";
// import { withSideNav } from "./hooks/sidenav";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import { HeaderLayout } from "./core/ui/HeaderLayout/HeaderLayout";
import { withTheme } from "./core/theme/theme";
import { withScheme } from "./core/services/colorScheme";
import { DarkModeSwitch } from "./core/ui/Switch/DarkModeSwitch";

const App: React.FC = () => {
    return (
        <Router basename={import.meta.env.BASE_URL || ""}>
            <HeaderLayout right={<DarkModeSwitch />}>
                <Routes />
            </HeaderLayout>
        </Router>
    );
};
export default withScheme(withTheme(App));
