import React, { FC } from "react";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ShareLink } from "./styled";
import { Inline } from "../Layout";

interface ShareLinksProps {
    url: string;
    title: string;
}

export const ShareLinks: FC<ShareLinksProps> = ({ url, title }) => (
    <Inline>
        <ShareLink href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}>
            <Twitter title="Share to Twitter" />
        </ShareLink>
        <ShareLink href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            <Facebook title="Share to Facebook" />
        </ShareLink>
    </Inline>
);
