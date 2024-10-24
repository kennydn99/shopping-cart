import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import CartContext from "../CartContext";

const ProductCard = ({ id, name, imageUrl, price, showQuantityControls }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const cartItem = cartItems.find((item) => item.id === id);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const handleAddToCart = () => {
    addToCart({ id, name, price, imageUrl }, quantity);
  };

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

  // Function to handle manual input change for quantity
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={imageUrl} alt={name} />
      <div className={styles.productInfo}>
        <span className="product-name">{name}</span>
        <span className="product-price">${price}</span>
      </div>
      <div className={styles.productActions}>
        {showQuantityControls ? (
          <>
            <div className={styles.quantity}>
              <button onClick={handleDecrement}>-</button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </>
        ) : (
          <>
            <span className={styles.productQuantity}>
              Quantity: {cartItem?.quantity || 1}
            </span>
            <button>Remove from Cart</button>
          </>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  showQuantityControls: PropTypes.bool,
};

ProductCard.defaultProps = {
  showQuantityControls: true,
};

export default ProductCard;
