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
