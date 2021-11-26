import React from "react";
import { withScheme } from "../src/core/services/colorScheme";
import { withTheme } from "../src/core/theme/theme";
import { MemoryRouter } from "react-router-dom";

// Global decorator to apply the styles to all stories
export const decorators = [
    (Story) => (
        <MemoryRouter>
            <Story />
        </MemoryRouter>
    ),
    (Story) => withScheme(withTheme(Story))(),
];

export const parameters = {
    layout: "fullscreen",
};
