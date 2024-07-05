import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./page";

describe("Home component", () => {
  it("renders the paragraph with the correct text", () => {
    render(<Home />);
    const paragraph = screen.getByText("Hello there");

    expect(paragraph).toBeInTheDocument();
  });
});
