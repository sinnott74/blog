import React from "react";
import { render, fireEvent } from "../../test/test-util";
import { Chip } from "./Chip";

describe("Chip", () => {
    it("renders without crashing", () => {
        render(<Chip />);
    });

    it("matches the snapshot", () => {
        const { container } = render(<Chip>Test</Chip>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it("is closable", () => {
        const wrapper = render(<Chip closeable />);
        const closeButton = wrapper.getByTestId("chip.close-btn");
        expect(closeButton).toBeTruthy();
    });

    it("calls onClick", () => {
        const handleClick = jest.fn();
        const wrapper = render(<Chip onClick={handleClick} />);
        wrapper.getByTestId("chip").click();
        expect(handleClick).toBeCalled();
    });
});
