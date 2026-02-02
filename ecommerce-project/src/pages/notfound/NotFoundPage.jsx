import Header from "../../components/Header";
import "./NotFoundPage.css";
import { Link } from "react-router";

export default function NotFoundPage({ carts }) {
  return (
    <>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header carts={carts} />
      <div className="not-found-message">Page not found</div>

      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
