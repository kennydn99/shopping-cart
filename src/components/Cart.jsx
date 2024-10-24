import Navbar from "./Navbar/Navbar";
import { useContext } from "react";
import CartContext from "./CartContext";
import ProductCard from "./ProductCard/ProductCard";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Navbar></Navbar>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              showQuantityControls={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
