import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { withTheme } from "../theme/theme";

const Wrapper: FC = ({ children }) => {
    const Wrapped = withTheme(() => <>{children}</>);
    return <Wrapped />;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
    render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
