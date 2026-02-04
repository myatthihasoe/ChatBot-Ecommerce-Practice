import dayjs from "dayjs";
import OrderHeader from "./OrderHeader";
import OrderDetails from "./OrderDetails";

export default function OrderGrids({ orders, loadCart }) {
  return (
    <div className="orders-grid">
      {orders.length > 0 &&
        orders.map((order) => (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} dayjs={dayjs} />
            <OrderDetails order={order} dayjs={dayjs} loadCart={loadCart} />
          </div>
        ))}
    </div>
  );
}
