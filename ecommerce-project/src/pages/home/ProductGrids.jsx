import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
export default function ProductGrids({ loadCart, search }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products/";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    fetchProducts();
  }, [search]);

  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
}
