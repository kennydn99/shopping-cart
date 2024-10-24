import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../components/CartContext";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  it("renders the Home page content", () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    );
    expect(screen.getByText("Start shopping now!")).toBeInTheDocument();
  });
});
