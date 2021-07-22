import React from "react";
import { render } from "../../test/test-util";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
    it("renders without crashing", () => {
        render(<Spinner />);
    });

    it("has a defaqult size of 48", () => {
        const wrapper = render(<Spinner />);
        const svg = wrapper.getByTestId("spinner-svg");
        expect(svg.getAttribute("width")).toBe("48");
        expect(svg.getAttribute("height")).toBe("48");
    });

    it("can change size", () => {
        const size = 32;
        const wrapper = render(<Spinner size={size} />);
        const svg = wrapper.getByTestId("spinner-svg");
        expect(svg.getAttribute("width")).toBe(`${size}`);
        expect(svg.getAttribute("height")).toBe(`${size}`);
    });

    it("can take a classname", () => {
        const className = "TEST-CLASSNAME";
        const wrapper = render(<Spinner className={className} />);
        const spinner = wrapper.getByTestId("spinner");
        expect(spinner.classList.contains(className)).toBeTruthy();
    });
});
