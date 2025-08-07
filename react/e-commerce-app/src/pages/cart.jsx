import React from "react";
import { useCart } from "../context/CartContext";
import "./cart.css";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-items-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price">${item.price}</div>

            <div className="quantity-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
              >
                −
              </button>
              <span className="quantity-display">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>

            <div className="item-total-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3 className="total-amount">Total: ${getTotalPrice().toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartPage;
