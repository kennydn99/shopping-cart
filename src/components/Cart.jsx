import Navbar from "./Navbar/Navbar";
import { useContext } from "react";
import CartContext from "./CartContext";

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
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
