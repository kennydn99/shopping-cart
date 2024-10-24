import Navbar from "./Navbar/Navbar";
import { useContext } from "react";
import CartContext from "./CartContext";
import ProductCard from "./ProductCard/ProductCard";
import styles from "./Shop/Shop.module.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.cartHeader}>
        <h1 className={styles.shopHeading}>Your Cart</h1>
        <h2 className={styles.total}>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.container}>
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
