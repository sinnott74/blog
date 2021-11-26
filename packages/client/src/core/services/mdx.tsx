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
import { InlineCode } from "../ui/Code/InlineCode";
import { Stack } from "../ui/Layout";
import { Row, DataCell, HeaderCell } from "../ui/Table";
import { ListItem, OrderedList, UnorderedList } from "../ui/List/List";
import { Quote } from "../ui/Quote/Quote";
import { LazyImgur } from "../ui/LazyImage/LazyImgur";

const Children: FC = ({ children }) => <>{children}</>;
const Wrapper: FC = (props) => <Stack spacing="medium" {...props} />;

const components: any = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
    img: (props: any) => <LazyImgur {...props} caption />,
    p: Text,
    hr: Line,
    inlineCode: InlineCode,
    code: Code,
    pre: Children,
    wrapper: Wrapper,
    li: ListItem,
    ol: OrderedList,
    ul: UnorderedList,
    tr: Row,
    td: DataCell,
    th: HeaderCell,
    blockquote: Quote,
};

export const withMdx = <T extends {}>(WrappedComponent: FC<T>) => (props: T) => (
    <MDXProvider components={components}>
        <WrappedComponent {...props} />
    </MDXProvider>
);
