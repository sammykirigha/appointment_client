import React from "react";

import { render, screen } from "@testing-library/react";

import Button from "../Button";

describe("<Button />", () => {
  test("should display a text as a prop", () => {
    render(<Button text="Test Name" />);

    expect(screen.getByText(/Test Name/)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
