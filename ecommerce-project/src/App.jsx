import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} /> index = path="/"
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </>
  );
}

export default App;
