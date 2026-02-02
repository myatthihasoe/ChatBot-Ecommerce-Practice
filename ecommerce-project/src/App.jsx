import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/home/HomePage";
import "./App.css";
import { Routes, Route } from "react-router";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/order/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
function App() {
  const [carts, setCarts] = useState([]);
  const loadCart = async () => {
    let response = await axios.get("/api/cart-items?expand=product");
    setCarts(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage carts={carts} setCarts={setCarts} loadCart={loadCart} />} /> index = path = "/"
        <Route
          path="/checkout"
          element={<CheckoutPage carts={carts} setCarts={setCarts} />}
        />
        <Route path="/orders" element={<OrdersPage carts={carts} />} />
        <Route
          path="/tracking/:orderId/:productId"
          element={<TrackingPage carts={carts} />}
        />
        <Route path="*" element={<NotFoundPage carts={carts} />} />
      </Routes>
    </>
  );
}

export default App;
