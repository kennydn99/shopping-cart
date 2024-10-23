import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <div className={styles.productActions}>
        <div className={styles.quantity}>
          <button>-</button>
          <input type="number" placeholder="1" />
          <button>+</button>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
