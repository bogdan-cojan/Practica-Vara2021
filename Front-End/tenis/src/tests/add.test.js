import { render, screen } from "@testing-library/react";

import AddPlayer from "../components/add";

test("renders glass", () => {
  render(<AddPlayer />);
  const glass = screen.getByTestId("add-player");
  expect(glass).toBeVisible();
});

test("check title function", () => {
  render(<AddPlayer />);
  const title = screen.getByText("Adauga jucator nou");
  expect(title).toHaveTextContent("Adauga jucator nou");
});

test("expect all paragraphs", () => {
  const { container } = render(<AddPlayer />);
  const strings = container.querySelectorAll("p");
  expect(strings).toHaveLength(12);
});
