import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../page";
import Banner from "../ui/Banner";

test("it should render banner component", () => {
  render(<Banner />);
  console.log("foo");
});
