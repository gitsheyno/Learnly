import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "../Banner";
import { expect, test, it } from "vitest";
import { renderComponent } from "../../../utils/test/utilityTest";
test("it should render the component", () => {
  render(<Banner />);
  screen.debug();
});

test("it should have correct src", () => {
  render(<Banner />);

  const image = screen.getByTestId<HTMLImageElement>("banner");
  expect(image.src).toBe(
    "http://localhost:3000/_next/image?url=%2Fpublic%2Fsample.png&w=1080&q=75",
  );
});

test("it should have a heading", () => {
  render(<Banner />);

  const heading = screen.getByRole<HTMLHeadingElement>("heading");
  expect(heading.textContent?.length).toBeTruthy();
});

test("it has a enabled  button", () => {
  render(<Banner />);

  const button = screen.getByRole<HTMLButtonElement>("button");
  expect(button).toBeEnabled();
});

test.todo("it should navigate to the defined route", () => {});
