import { Link } from "react-router";
export default function NotFoundPage() {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to="/">Home</Link>
    </>
  );
}
