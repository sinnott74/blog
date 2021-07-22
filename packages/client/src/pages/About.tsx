import React, { FC } from "react";
import { Card, Stack } from "../core/ui/Layout";
import { Heading1, Text } from "../core/ui/Typography/styled";
import { Page } from "../core/ui/Page/Page";

export const About: FC = () => (
    <Page title="Blog | DanielSinnott.com">
        <Card rounded raised spacing={"large"}>
            <Stack>
                <Heading1>I'm Daniel Sinnott</Heading1>
                <Text>
                    I'm a software developer, thought leader, boxer, mascot, astronaut, imitation
                    Krusty, baby proofer, trucker, hippie, plow driver, food critic, conceptual
                    artist, grease salesman, carny, mayor, drifter, bodyguard for the mayor, country
                    western manager, garbage commissioner, mountain climber, farmer, inventor,
                    Smithers, Poochie, celebrity assistant, power plant worker, fortune cookie
                    writer, beer baron, Kwik-E-Mart clerk, missionary and Simpson's fan.
                </Text>
                <Text>
                    This App has been created to curate various works & to challenge myself each
                    month. The goal is progressively enhance this site and to blog about what I did,
                    how I did it & what I learned from it.
                </Text>

                <Text>Super profundo on the early eve of your day</Text>
            </Stack>
        </Card>
    </Page>
);

export default About;
