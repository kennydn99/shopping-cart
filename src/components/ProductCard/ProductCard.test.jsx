import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "../CartContext"; // Adjust the import path as necessary
import ProductCard from "./ProductCard";

const MockedProductCard = (props) => (
  <CartProvider>
    <ProductCard {...props} />
  </CartProvider>
);

describe("ProductCard", () => {
  const product = {
    id: 1,
    name: "Product 1",
    imageUrl: "http://example.com/image.jpg",
    price: 20,
  };

  it("renders product information correctly", () => {
    render(<MockedProductCard {...product} />);

    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/\$20/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", product.imageUrl);
  });

  it("adds item to cart when 'Add to Cart' button is clicked", () => {
    render(<MockedProductCard {...product} />);

    const addButton = screen.getByText(/Add to Cart/i);
    fireEvent.click(addButton);
  });

  it("increments and decrements quantity", () => {
    render(<MockedProductCard {...product} />);

    const decrementButton = screen.getByText("-");
    const incrementButton = screen.getByText("+");
    const quantityInput = screen.getByRole("spinbutton");

    // Increment
    fireEvent.click(incrementButton);
    expect(quantityInput).toHaveValue(2); // Quantity should now be 2

    // Decrement
    fireEvent.click(decrementButton);
    expect(quantityInput).toHaveValue(1); // Quantity should now be back to 1

    // Try to decrement below 1
    fireEvent.click(decrementButton);
    expect(quantityInput).toHaveValue(1); // Quantity should still be 1
  });
});
