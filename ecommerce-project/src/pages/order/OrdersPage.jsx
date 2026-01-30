import "./OrdersPage.css";
import Header from "../../components/Header";

import { useEffect, useState } from "react";
import axios from "axios";

import OrderGrids from "./OrderGrids";

export default function OrdersPage({ carts }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      const response = axios.get("/api/orders?expand=products");
      setOrders((await response).data);
    };
    fetchOrder();
  }, []);
  return (
    <>
      <title>Orders Page</title>
      <Header carts={carts} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrderGrids orders={orders} />
      </div>
    </>
  );
}
