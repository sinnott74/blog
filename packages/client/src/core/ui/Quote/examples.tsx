import React from "react";
import { Quote } from "./Quote";

export default {
    component: Quote,
    title: "Quote",
};

export const Default = () => <Quote>super perfundo on the eve of your day</Quote>;

export const QuoteWithAQuote = () => (
    <Quote>
        Inception totally made sense<Quote>said the guy trying to impress their friends</Quote>
    </Quote>
);
