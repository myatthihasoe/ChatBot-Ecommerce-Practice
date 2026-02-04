import axios from "axios";
import { useState } from "react";

export default function CartItemDetail({
  cartItem,
  formatMoney,
  deleteItem,
  loadCart,
}) {
  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const updateShowBox = async () => {
    setShowUpdateBox(!showUpdateBox);

    if (showUpdateBox === true) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setQuantity("");
      setShowUpdateBox(false);
    } else {
      setQuantity(cartItem.quantity);
    }
  };
  const updateQuantity = (event) => {
    setQuantity("");
    setQuantity(event.target.value);
  };
  const handleQuantityKeydown = (event) =>{
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
      updateShowBox();
    }
    else if(keyPressed === 'Escape') {
      setQuantity(cartItem.quantity);
      setShowUpdateBox(false)
    }
  }
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: 
            {showUpdateBox ? (
              <input
                type="text"
                style={{ width: "50px" }}
                value={quantity}
                onChange={updateQuantity}
                onKeyDown={handleQuantityKeydown}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateShowBox}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
