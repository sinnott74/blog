declare module "virtual:metadata" {
    export const data: <T>() => T[];
}

declare module "virtual:routes" {
    export const data: <T>() => {
        path: string;
        exact: boolean;
        component: React.LazyExoticComponent<() => JSX.Element>;
        data: T;
    }[];
}

import "./theme/typings";
