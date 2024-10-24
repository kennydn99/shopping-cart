import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../CartContext"; // Assuming you have this
import Shop from "../Shop/Shop";

// Setup for mock fetch
beforeEach(() => {
  vi.spyOn(globalThis, "fetch").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks(); // Ensure fetch is restored after each test
});

describe("Shop Component", () => {
  it("displays a loading message while fetching products", () => {
    // Mock fetch with a delayed promise to simulate loading state
    globalThis.fetch.mockResolvedValueOnce(new Promise(() => {}));

    render(
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );

    // Assert that loading message is displayed
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays an error message when the fetch fails", async () => {
    // Mock fetch to reject and simulate an error
    globalThis.fetch.mockRejectedValueOnce(new Error("Network error"));

    render(
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );

    // Wait for the error message to appear
    await waitFor(() => {
      expect(
        screen.getByText("A network error was encountered")
      ).toBeInTheDocument();
    });
  });

  it("renders products after a successful fetch", async () => {
    const mockProducts = [
      { id: 1, title: "Product 1", price: 100, image: "img1.jpg" },
      { id: 2, title: "Product 2", price: 200, image: "img2.jpg" },
    ];

    // Mock successful fetch response
    globalThis.fetch.mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve(mockProducts),
    });

    render(
      <BrowserRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </BrowserRouter>
    );

    // Wait for products to be displayed
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("$100")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
      expect(screen.getByText("$200")).toBeInTheDocument();
    });
  });
});
