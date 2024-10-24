import Navbar from "./Navbar/Navbar";
import { useContext } from "react";
import CartContext from "./CartContext";
import ProductCard from "./ProductCard/ProductCard";
import styles from "./Shop/Shop.module.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className={styles.shopHeading}>Your Cart</h1>
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
