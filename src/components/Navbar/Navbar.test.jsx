import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../CartContext";
import Navbar from "./Navbar";

//Navbar: Test that links render and route correctly.

describe("Navbar Component", () => {
  it("renders navigation links", () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </BrowserRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });
});
