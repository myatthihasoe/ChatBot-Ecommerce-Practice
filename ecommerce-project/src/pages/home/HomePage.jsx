import "./HomePage.css";
import Header from "../../components/Header";
import ProductGrids from "./ProductGrids";
import { useSearchParams } from "react-router";

export default function HomePage({ carts, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  console.log(search);
  return (
    <>
      <title>Home Page</title>
      <Header carts={carts} />
      <div className="home-page">
        <ProductGrids loadCart={loadCart} search={search} />
      </div>
    </>
  );
}
