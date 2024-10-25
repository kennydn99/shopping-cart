import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../components/CartContext"; // Adjust the import path as necessary
import App from "../App"; // The root component
import Shop from "../components/Shop/Shop";
import Cart from "../components/Cart";

describe("Main Application", () => {
  it("renders the App component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <CartProvider>
          <App />
        </CartProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Start shopping now!")).toBeInTheDocument(); // Assuming your App renders Cart by default
  });

  it("navigates to shop page", async () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <CartProvider>
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Our Products")).toBeInTheDocument();
    });
  });

  it("navigates to cart page", () => {
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <CartProvider>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Your Cart")).toBeInTheDocument(); // Assuming Cart component contains "Your Cart"
  });
});
