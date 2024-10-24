import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../components/CartContext";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

// Helper function to render Cart with CartContext
const renderWithCartContext = (cartItems) => {
  render(
    <BrowserRouter>
      <CartProvider value={{ cartItems }}>
        <Cart />
      </CartProvider>
    </BrowserRouter>
  );
};

describe("Cart Component", () => {
  it("renders 'Your cart is empty' message when there are no items in the cart", () => {
    // Render the component with an empty cart
    renderWithCartContext([]);

    // Expect the empty cart message to be displayed
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("renders cart items when there are products in the cart", () => {
    // Mock cart items
    const cartItems = [
      {
        id: 1,
        name: "Product 1",
        imageUrl: "http://example.com/product1.jpg",
        price: 10.0,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        imageUrl: "http://example.com/product2.jpg",
        price: 20.0,
        quantity: 1,
      },
    ];

    // Render the component with the mock cart items
    renderWithCartContext(cartItems);

    // Expect the product names to be displayed
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();

    // Expect the correct quantities to be displayed
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  });

  it("calculates and renders the correct total price", () => {
    // Mock cart items
    const cartItems = [
      {
        id: 1,
        name: "Product 1",
        imageUrl: "http://example.com/product1.jpg",
        price: 10.0,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        imageUrl: "http://example.com/product2.jpg",
        price: 20.0,
        quantity: 1,
      },
    ];

    // Render the component with the mock cart items
    renderWithCartContext(cartItems);

    // Expect the total price to be correctly calculated
    const totalPrice = 10.0 * 2 + 20.0 * 1; // 40.00
    expect(
      screen.getByText(`Total: $${totalPrice.toFixed(2)}`)
    ).toBeInTheDocument();
  });
});
