import React from 'react';
import { useCart } from '../components/context/CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="total">
          <strong>Total:</strong> ${totalPrice.toFixed(2)}
        </div>
      </div>
      {/* Add payment form and confirmation button here */}
    </div>
  );
};

export default Checkout;