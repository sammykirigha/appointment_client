import React from "react";

import { render, screen } from "@testing-library/react";

import Card from "../card";

describe("Testing the card", () => {
  test("The all the cards should render the category, number and percentege ", () => {
    render(
      <Card category="Test Category" number={23} percentageIncrease={45} />
    );

    expect(screen.getByText(/Test Category/)).toBeInTheDocument();
  });
});
