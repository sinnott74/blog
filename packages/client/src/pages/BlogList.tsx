import React, { FC } from "react";
import { BlogList } from "../blog";
import { Page } from "../core/ui/Page/Page";

const page: FC = () => {
    return (
        <Page title="Blog">
            <BlogList />
        </Page>
    );
};

export default page;
