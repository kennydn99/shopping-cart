import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../CartContext";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

// Home: Basic rendering test to ensure content displays correctly.
describe("Home Component", () => {
  it("renders home page content", () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <Home />
        </CartProvider>
      </BrowserRouter>
    );
    expect(screen.getByText("Start shopping now!")).toBeInTheDocument();
  });
});
