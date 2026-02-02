import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./TrackingPage.css";
import { Link } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
import dayjs from "dayjs";

export default function TrackingPage({ carts }) {
  const params = useParams();
  // console.log(params);
  const { orderId, productId } = params;
  // console.log(productId);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const fetchOrderTrack = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setOrder(response.data);
    };
    fetchOrderTrack();
  }, [orderId]);
  if (!order) {
    return null;
  }
  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  //Progress Bar Calculation
  const totalDeliveryTimeMs =
    orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  // console.log(totalDeliveryTimeMs)
  let timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  // console.log(timePassedMs)
  // timePassedMs = totalDeliveryTimeMs * 0.3; //for testing purpose
  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  //  deliveryPercent = (80);
  if (deliveryPercent > 100) {
    // console.log(deliveryPercent);
    deliveryPercent = 100;
  }
  const isPreparing = deliveryPercent < 33;
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
  const isDelivered = deliveryPercent >= 100;

  return (
    <>
      <title>Tracking Page</title>
      <Header carts={carts} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {deliveryPercent >= 100 ? "Delivered on " : "Arriving on "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${isPreparing && "current-status"}`}
            >
              Preparing
            </div>
            <div className={`progress-label ${isShipped && "current-status"}`}>
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivered && "current-status"}`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${deliveryPercent}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
