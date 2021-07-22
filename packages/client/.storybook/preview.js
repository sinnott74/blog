import React from "react";
import StoryRouter from "storybook-react-router";
import { withScheme } from "../src/core/services/colorScheme";
import { withTheme } from "../src/core/theme/theme";

// Global decorator to apply the styles to all stories
export const decorators = [StoryRouter(), (Story) => withScheme(withTheme(Story))()];

export const parameters = {
    layout: "fullscreen",
};
