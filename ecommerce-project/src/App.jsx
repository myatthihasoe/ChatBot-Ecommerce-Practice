import HomePage from "./pages/home/HomePage";
import "./App.css";
import { Routes, Route } from "react-router";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/order/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFound from "./pages/notfound/NotFoundPage";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} /> index = path="/"
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
