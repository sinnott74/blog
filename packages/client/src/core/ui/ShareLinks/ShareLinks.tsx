import React, { FC } from "react";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { Inline } from "../Layout";
import { Link } from "../Link/Link";

interface ShareLinksProps {
    url: string;
    title: string;
}

export const ShareLinks: FC<ShareLinksProps> = ({ url, title }) => (
    <Inline>
        <Link
            to={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
            target="blank"
            rel={["noopener", "noreferrer"]}
        >
            <Twitter title="Share to Twitter" />
        </Link>
        <Link
            to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="blank"
            rel={["noopener", "noreferrer"]}
        >
            <Facebook title="Share to Facebook" />
        </Link>
    </Inline>
);
