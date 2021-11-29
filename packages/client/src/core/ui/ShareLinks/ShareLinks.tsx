import React, { FC } from "react";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Reddit } from "../../images/reddit.svg";
import { ReactComponent as HackerNews } from "../../images/hackernews.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { Inline } from "../Layout";

interface ShareLinksProps {
    url: string;
    title: string;
}

const shareTargets = [
    {
        href: ({ url, title }: ShareLinksProps) =>
            `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        Icon: <Twitter title="Share to Twitter" />,
    },
    {
        href: ({ url, title }: ShareLinksProps) =>
            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        Icon: <Facebook title="Share to Facebook" />,
    },
    {
        href: ({ url, title }: ShareLinksProps) =>
            `http://www.reddit.com/submit?url=${url}&title=${title}`,
        Icon: <Reddit title="Share to reddit" />,
    },
    {
        href: ({ url, title }: ShareLinksProps) =>
            `https://news.ycombinator.com/submitlink?u=${url}&t=${title}`,
        Icon: <HackerNews title="Share to HackerNews" />,
    },
    {
        href: ({ url, title }: ShareLinksProps) =>
            `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        Icon: <LinkedIn title="Share to LinkedIn" />,
    },
];

export const ShareLinks: FC<ShareLinksProps> = ({ url, title }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    return (
        <Inline>
            {shareTargets.map(({ href, Icon }, index) => (
                <a
                    key={index}
                    href={href({ url: encodedUrl, title: encodedTitle })}
                    target="blank"
                    rel="noopener noreferrer"
                >
                    {Icon}
                </a>
            ))}
        </Inline>
    );
};
