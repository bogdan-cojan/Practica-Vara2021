import { render, screen } from "@testing-library/react";

import Top from "../components/clasament";

test("renders glass", () => {
  render(<Top />);
  const glass = screen.getByTestId("glass-top");
  expect(glass).toBeVisible();
});

test("check title boys", () => {
  render(<Top />);
  const title = screen.getByText("Top - Baieti");
  expect(title).toHaveTextContent("Top - Baieti");
});

test("check title girls", () => {
  render(<Top />);
  const title = screen.getByText("Top - Fete");
  expect(title).toHaveTextContent("Top - Fete");
});

test("exista etichete", () => {
  render(<Top />);
  const etichete = screen.getAllByTestId("etichete");
  expect(etichete).toBeTruthy();
});
