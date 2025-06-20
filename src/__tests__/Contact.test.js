import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
