const ProductCard = ({ key, name, imageUrl, price }) => {
  return (
    <div className="product-card" key={key}>
      <img src={imageUrl} alt={name} width="100" />
      <div className="product-info">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <div className="product-actions">
        <button>-</button>
        <input type="number" />
        <button>+</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
