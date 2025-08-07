import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./checkout.css";

function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setPlaced(true);
    clearCart();
  };

  if (cart.length === 0 && !placed) {
    return <p className="centered-text">Cart is empty.</p>;
  }

  if (placed) {
    return <p className="success-text">Order placed! Thank you.</p>;
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      {cart.map((item) => (
        <div key={item.id} className="checkout-item">
          <span className="item-details">
            {item.name} x {item.quantity}
          </span>
          <span className="item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      ))}

      <div className="checkout-total">
        <h3 className="total-amount">Total: ${getTotalPrice().toFixed(2)}</h3>
      </div>

      <button onClick={handlePlaceOrder} className="place-order-btn">
        Place Order
      </button>
    </div>
  );
}

export default CheckoutPage;
