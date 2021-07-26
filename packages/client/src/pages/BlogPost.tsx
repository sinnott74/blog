import React, { FC, Suspense } from "react";
import { LazyImage } from "../core/ui/LazyImage/LazyImage";
import { Card, Stack } from "../core/ui/Layout";
import { Page } from "../core/ui/Page/Page";
import { Heading1, Text } from "../core/ui/Typography/styled";
import { ShareLinks } from "../core/ui/ShareLinks/ShareLinks";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import { ROUTES } from "../Routes";
import { withMdx } from "../core/services/mdx";
import { Spinner } from "../core/ui/Spinner/Spinner";
import { Tags } from "../blog/ui/Tags";

interface Props {
    Post: React.LazyExoticComponent<() => JSX.Element>;
    title: string;
    imageurl: string;
    author: string;
    tags: string[];
    date: string;
}

export const BlogPost: FC<Props> = ({ Post, title, imageurl, author, tags = [], date }) => {
    const { push } = useHistory();
    return (
        <Page title={title}>
            <Helmet>
                <meta name="keywords" content={tags.join()} />
                <meta name="author" content={author} />
            </Helmet>
            <Card
                rounded
                raised
                spacing={{ mobile: "small", tablet: "large", desktop: "large", wide: "large" }}
                width="full"
                maxWidth="medium"
            >
                <Stack align="center">
                    <Heading1>{title}</Heading1>
                    <Text secondary>
                        {date} By {author}
                    </Text>
                    <Tags
                        tags={tags}
                        align="center"
                        onTagClick={(tag) => push(`${ROUTES.home}?tags=${tag}`)}
                    />
                    <ShareLinks url={window.location.href} title={title} />
                    {imageurl && <LazyImage src={imageurl} title={title} />}
                    <Suspense fallback={<Spinner />}>
                        <Post />
                    </Suspense>
                </Stack>
            </Card>
        </Page>
    );
};

export default withMdx(BlogPost);
