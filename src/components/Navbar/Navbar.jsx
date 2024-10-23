import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Navbar;
