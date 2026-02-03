import "./CheckoutPage.css";
import CheckoutHeader from "./CheckoutHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

export default function CheckoutPage({ carts, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    const fetchDeliveryOption = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    };
    fetchDeliveryOption();
  }, []);
  return (
    <>
      <title>Checkout Page</title>
      <CheckoutHeader carts={carts} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            carts={carts}
            loadCart={loadCart}
          />
          <PaymentSummary carts={carts} />
        </div>
      </div>
    </>
  );
}
