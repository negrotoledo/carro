import React from "react";
import "./css/cart.css";

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <p className="cart-item-name">{item.name}</p>
          <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
          <img className="cart-item-image" src={item.image} alt={item.name} />
        </div>
      ))}
      <button className="cart-checkout-button" onClick={onCheckout}>Pagar</button>
    </div>
  );
};

export default Cart;

