import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
import { expect, test, it } from "vitest";
import { renderComponent } from "../../../utils/test/utilityTest";
test("it should render the component", () => {
  render(<Counter />);
});

test("ite should increment when the button is pushed", async () => {
  const { user } = renderComponent(<Counter />);
  screen.debug();

  const currentCounter = screen.getByTestId("current-count");
  expect(currentCounter).toHaveTextContent("0");

  const button = screen.getByRole("button", { name: "Increment" });
  await user.click(button);
  expect(currentCounter).toHaveTextContent("1");
});

test("ite should reset when the button is pushed", async () => {
  const { user } = renderComponent(<Counter />);
  screen.debug();

  const currentCounter = screen.getByTestId("current-count");
  expect(currentCounter).toHaveTextContent("0");

  const button = screen.getByRole("button", { name: "Increment" });
  await user.click(button);
  expect(currentCounter).toHaveTextContent("1");

  const buttonReset = screen.getByRole("button", { name: "Reset" });
  await user.click(buttonReset);
  expect(currentCounter).toHaveTextContent("0");
});
