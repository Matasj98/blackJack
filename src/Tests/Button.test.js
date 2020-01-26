import React from "react";
import { render } from "@testing-library/react";
import Button from "../Components/Button/Button.component";

test("Button shows correct text - New Game", () => {
  const { container } = render(<Button text="New Game" />);
  const button = container.firstChild;
  expect(button.textContent).toBe("New Game");
});

test("Button shows correct text - Hit", () => {
  const { container } = render(<Button text="Hit" />);
  const button = container.firstChild;
  expect(button.textContent).toBe("Hit");
});
