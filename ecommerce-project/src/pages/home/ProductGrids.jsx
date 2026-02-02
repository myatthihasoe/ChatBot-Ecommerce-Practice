import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
export default function ProductGrids({ loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products/");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-grid">
      {products.map((product) => {
        return <Product key={product.id} product={product} loadCart={loadCart} />;
      })}
    </div>
  );
}
