import React from "react";

import { render, screen } from "@testing-library/react";

import Card from "../card";

describe("Testing the card", () => {
  test("The all the cards should render the category, number and percentage ", () => {
    render(
      <Card
        category="Test Category"
        number={23}
        percentageIncrease="10% Higher Then Last Month"
      />
    );

    expect(screen.getByText(/Test Category/)).toBeInTheDocument();
  });
});
