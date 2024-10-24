import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../CartContext";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

describe("ErrorPage Component", () => {
  it("renders error message", () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ErrorPage />
        </CartProvider>
      </BrowserRouter>
    );
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });
});
