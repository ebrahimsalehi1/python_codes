import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import App from "./App";

vi.mock("./Button", () => ({
  Button: () => <div>Hello EBI</div>,
}));

test("renders the main heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /vite \+ react/i,
    })
  ).toBeInTheDocument();
});
