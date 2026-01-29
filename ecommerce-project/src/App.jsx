import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import { Routes, Route } from "react-router";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/order/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFound from "./pages/notfound/NotFoundPage";
function App() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCarts(response.data);
    });
  });
  return (
    <>
      <Routes>
        <Route index element={<HomePage carts={carts} setCarts={setCarts} />} />{" "}
        index = path="/"
        <Route
          path="/checkout"
          element={<CheckoutPage carts={carts} setCarts={setCarts} />}
        />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
