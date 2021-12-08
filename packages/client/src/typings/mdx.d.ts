interface Blog {
    title: string;
    author: string;
    imageurl: string;
    tags: string[];
    date: string;
}

declare module "*.mdx" {
    const MDXComponent: ComponentType;
    export const title: string;
    export const author: string;
    export const tags: string[];
    export default MDXComponent;
}

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
