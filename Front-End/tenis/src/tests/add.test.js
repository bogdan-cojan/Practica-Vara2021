import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

test("exista inputs", () => {
  const { container } = render(<AddPlayer />);
  const inputs = container.querySelectorAll("input");
  expect(inputs).toHaveLength(12);
});

test("scrie in input", () => {
  render(<AddPlayer />);
  const inputEl = screen.getByTestId("input-test");
  userEvent.type(inputEl, "mesaj test");
  expect(inputEl).toHaveValue("mesaj test");
});

test("renders button", () => {
  render(<AddPlayer />);
  const button = screen.getByTestId("button");
  expect(button).toBeVisible();
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Salveaza");
});

test("click the button", () => {
  render(<AddPlayer />);
  const alertMock = jest.spyOn(window, "alert").mockImplementation();
  const button = screen.getByTestId("button");
  fireEvent.click(button);
  expect(alertMock).toBeCalledWith("Jucator adaugat cu succes !");
});
