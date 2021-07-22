import React from "react";
import { Page } from "../core/ui/Page/Page";
import { Card } from "../core/ui/Layout";
import { Heading1, Text } from "../core/ui/Typography/Typography";

const Error404 = () => (
    <Page title="404">
        <Card raised>
            <Heading1>404</Heading1>
            <Text>Sorry that page couldn't be found... :/</Text>
        </Card>
    </Page>
);

export default Error404;
