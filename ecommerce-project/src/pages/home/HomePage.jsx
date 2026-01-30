import "./HomePage.css";
import Header from "../../components/Header";
import ProductGrids from "./ProductGrids";

export default function HomePage({ carts }) {
  return (
    <>
      <title>Home Page</title>
      <Header carts={carts} />
      <div className="home-page">
        <ProductGrids />
      </div>
    </>
  );
}
