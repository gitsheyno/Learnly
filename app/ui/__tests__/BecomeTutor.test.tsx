import { render, screen, fireEvent } from "@testing-library/react";
import BecomeTutor from "../BecomeTutor";
import { describe, expect, test, vi } from "vitest";
import { useRouter } from "next/navigation";

// Create the mock for useRouter
const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: mockPush, // Use the mockPush function here
      events: {
        on: vi.fn(),
        off: vi.fn(),
      },
      beforePopState: vi.fn(() => null),
      prefetch: vi.fn(() => null),
    };
  },
}));

describe("BecomeTutor Component", () => {
  test("it should render the component and navigate on link click", async () => {
    // Render the component
    render(<BecomeTutor />);
    screen.debug();

    // Find the link element(s)
    const link = screen.getAllByRole("link");

    // Ensure the link is in the document
    expect(link[0]).toBeInTheDocument();

    // Simulate a click on the link
    fireEvent.click(link[0]);

    // Expect `push` to have been called with the correct URL
    expect(mockPush).toHaveBeenCalledWith("/google.com");
  });
});
