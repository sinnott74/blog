import React, { lazy, Suspense, FC } from "react";
import { Switch, Route, RouteComponentProps, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Spinner } from "./core/ui/Spinner/Spinner";
import styled from "styled-components/macro";
import { posts } from "./blog/services/blog";

export const ROUTES = {
    home: "/",
    blogPost: (id: string) => `/blog/${id}`,
    about: "/about",
};

const LazyBlogList = lazy(() => import("./pages/BlogList"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyBlogPost = lazy(() => import("./pages/BlogPost"));
const Lazy404 = lazy(() => import("./pages/404"));

const postRoutes = posts.map((post) => {
    return {
        path: ROUTES.blogPost(post.id),
        exact: true,
        component: () => <LazyBlogPost {...post} />,
    };
});

// Array of Routes,
export const routes = [
    {
        path: ROUTES.home,
        exact: true,
        component: LazyBlogList,
    },
    {
        path: ROUTES.about,
        exact: true,
        component: LazyAbout,
    },
    ...postRoutes,
    {
        path: undefined, // Catch-all route for 404
        component: Lazy404,
    },
];

const StyledTransitionGroup = styled(TransitionGroup)`
    display: flex;
    flex: 1;
    flex-direction: row;
    overflow-x: hidden;
`;

export const Routes: FC<RouteComponentProps<any, any, any>> = ({ location }) => (
    <StyledTransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 150 }} classNames="fade" exit={false}>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </Suspense>
        </CSSTransition>
    </StyledTransitionGroup>
);

export default withRouter(Routes);
