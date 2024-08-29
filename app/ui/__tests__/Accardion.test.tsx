import { render, screen, fireEvent } from "@testing-library/react";
import AccordionComponent from "../Accardion";
import { expect, test, it } from "vitest";

test("it should render the component", () => {
  render(<AccordionComponent />);
});

test("it should render default values", () => {
  render(<AccordionComponent />);

  const accordion = screen.getByTestId("Accordion 1");
  const paragraph = accordion.getElementsByTagName("p");

  expect(paragraph.length).toBeFalsy();

  const button = screen.getAllByRole<HTMLButtonElement>("button");
  fireEvent.click(button[0]);

  expect(paragraph).toBeTruthy();
  screen.debug();
});
