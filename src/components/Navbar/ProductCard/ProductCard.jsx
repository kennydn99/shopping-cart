import { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import CartContext from "../../CartContext";

const ProductCard = ({ id, name, imageUrl, price }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ id, name, price }, quantity);
  };

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={imageUrl} alt={name} />
      <div className="product-info">
        <span className="product-name">{name}</span>
        <span className="product-price">${price}</span>
      </div>
      <div className={styles.productActions}>
        <div className={styles.quantity}>
          <button onClick={handleDecrement}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
