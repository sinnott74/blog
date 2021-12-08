import React, { lazy, Suspense, FC } from "react";
import { Routes as ReactRouterRoutes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AbsolutelyCenteredSpinner as Spinner } from "./core/ui/Spinner/Spinner";
import styled, { createGlobalStyle } from "styled-components/macro";
import { data } from "virtual:routes";
import { PostMetadata } from "./blog/services/blog";

export const ROUTES = {
    home: "/",
    blogPost: (id: string) => `/blog/${id}`,
    about: "/about",
};

const LazyBlogList = lazy(() => import("./pages/BlogList"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyBlogPost = lazy(() => import("./pages/BlogPost"));
const Lazy404 = lazy(() => import("./pages/404"));

const postRoutes = data<PostMetadata>().map((post) => ({
    path: post.path,
    element: <LazyBlogPost Post={post.component} {...post.data} />,
}));

const StyledTransitionGroup = styled(TransitionGroup)`
    display: flex;
    flex: 1;
    flex-direction: row;
    overflow-x: hidden;
`;

const TransitionStyle = createGlobalStyle`
.fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 150ms ease-in;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0.01;
  transition: opacity 150ms ease-in;
}
`;

export const Routes: FC<{}> = () => {
    const location = useLocation();
    return (
        <>
            <TransitionStyle />
            <StyledTransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 150 }}
                    classNames="fade"
                    exit={false}
                >
                    <Suspense fallback={<Spinner />}>
                        <ReactRouterRoutes>
                            <Route path={ROUTES.home} element={<LazyBlogList />} />
                            <Route path={ROUTES.about} element={<LazyAbout />} />
                            {postRoutes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element} />
                            ))}
                            <Route path="*" element={<Lazy404 />} />
                        </ReactRouterRoutes>
                    </Suspense>
                </CSSTransition>
            </StyledTransitionGroup>
        </>
    );
};

export default Routes;
