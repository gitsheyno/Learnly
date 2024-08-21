import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../page";
import Banner from "../ui/Banner";

vi.mock("../ui/Banner", () => ({
  default: () => <div data-testid="banner"></div>,
}));

test("Page", () => {
  render(<Page />);

  const abas = render(<Banner />);

  expect(abas.getAllByTestId("banner")).toBeTruthy();
});
