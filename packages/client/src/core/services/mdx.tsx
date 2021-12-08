import React, { FC } from "react";
import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Text,
} from "../ui/Typography/Typography";
import { Line } from "../ui/Line/Line";

import { MDXProvider } from "@mdx-js/react";
import { Code } from "../ui/Code/Code";
import { StackContainer, StackItem } from "../ui/Layout/Stack/Stack";
import { Row, DataCell, HeaderCell } from "../ui/Table";
import { ListItem, OrderedList, UnorderedList } from "../ui/List/List";
import { Quote } from "../ui/Quote/Quote";
import { LazyImgur } from "../ui/LazyImage/LazyImgur";

/**
 * We no longer have access to each of the children within a .mdx
 * Manually adding the container and item code here for now
 */
const Children: FC = ({ children }) => <>{children}</>;
const Wrapper: FC = (props) => <StackContainer spacing="medium" {...props} />;

export const components: any = {
    h1: (props: any) => (
        <StackItem spacing="medium">
            <Heading1 {...props} />
        </StackItem>
    ),
    h2: (props: any) => (
        <StackItem spacing="medium">
            <Heading2 {...props} />
        </StackItem>
    ),
    h3: (props: any) => (
        <StackItem spacing="medium">
            <Heading3 {...props} />
        </StackItem>
    ),
    h4: (props: any) => (
        <StackItem spacing="medium">
            <Heading4 {...props} />
        </StackItem>
    ),
    h5: (props: any) => (
        <StackItem spacing="medium">
            <Heading5 {...props} />
        </StackItem>
    ),
    h6: (props: any) => (
        <StackItem spacing="medium">
            <Heading6 {...props} />
        </StackItem>
    ),
    img: (props: any) => (
        <StackItem spacing="medium">
            <LazyImgur {...props} caption />
        </StackItem>
    ),
    p: (props: any) => (
        <StackItem spacing="medium">
            <Text {...props} />
        </StackItem>
    ),
    hr: (props: any) => (
        <StackItem spacing="medium">
            <Line {...props} />
        </StackItem>
    ),
    code: Code,
    pre: (props: any) => (
        <StackItem spacing="medium">
            <Children {...props} />
        </StackItem>
    ),
    wrapper: Wrapper,
    li: ListItem,
    ol: (props: any) => (
        <StackItem spacing="medium">
            <OrderedList {...props} />
        </StackItem>
    ),
    ul: (props: any) => (
        <StackItem spacing="medium">
            <UnorderedList {...props} />
        </StackItem>
    ),
    table: (props: any) => (
        <StackItem spacing="medium">
            <table {...props} />
        </StackItem>
    ),
    tr: Row,
    td: DataCell,
    th: HeaderCell,
    blockquote: (props: any) => (
        <StackItem spacing="medium">
            <Quote {...props} />
        </StackItem>
    ),
};

export const withMdx = <T extends {}>(WrappedComponent: FC<T>) => (props: T) => (
    <MDXProvider components={components}>
        <WrappedComponent {...props} />
    </MDXProvider>
);
