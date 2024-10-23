import Navbar from "./Navbar/Navbar";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data: ", data);
        setProducts(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div>
        <Navbar></Navbar>
        <p>Loading...</p>
      </div>
    );

  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      <Navbar></Navbar>
      <h1>Hello this is the Shop page!</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            imageUrl={product.image}
            price={product.price}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
