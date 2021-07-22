import { Theme } from "../core/theme/theme";

declare module "styled-components/macro" {
    interface DefaultTheme extends Theme {}
}
