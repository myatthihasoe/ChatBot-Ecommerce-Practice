import { formatMoney } from "../../utils/money";
import DeliveryOption from "./DeliveryOption";
import CartItemDetail from "./CartItemDetail";
import DeliveryDate from "./DeliveryDate";

export default function OrderSummary({ deliveryOptions, carts, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        carts.map((cartItem) => {
          const selectedDeliveryOptions = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );

          return (
            <div key={cartItem.id} className="cart-item-container">
              <DeliveryDate selectedDeliveryOptions={selectedDeliveryOptions} />

              <div className="cart-item-details-grid">
                <CartItemDetail cartItem={cartItem} formatMoney={formatMoney} />
                <DeliveryOption
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
