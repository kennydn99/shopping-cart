import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </div>
  );
};

export default Navbar;
