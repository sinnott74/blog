declare module "@metadata" {
    const data: <T>() => T[];
    export const data;
}

declare module "@routes" {
    const data: <T>() => {
        path: string;
        exact: boolean;
        component: React.LazyExoticComponent<() => JSX.Element>;
        data: T;
    }[];
    export const data;
}
