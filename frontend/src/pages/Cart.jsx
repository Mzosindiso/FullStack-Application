import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/context/CartContext';
import '../index.css';

const Cart = () => {
    const { cart, updateCartItem, removeFromCart, clearCart } = useCart();
    const [subtotal, setSubtotal] = useState(0);
    const [navigate] = useState(null);
    
    useEffect(() => {
        const newSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
    }, [cart]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
        } else {
            const itemToUpdate = cart.find(item => item.id === id);
            if (itemToUpdate) {
                updateCartItem({ ...itemToUpdate, quantity: newQuantity });
            }
        }
    };

    const vat = subtotal * 0.15;
    const total = subtotal + vat;

    const handleCheckout = () => {
      const token = localStorage.getItem('token');
      if (token) {
        // User is logged in, proceed to checkout
        navigate('/checkout');
      } else {
        // User is not logged in, redirect to login page
        navigate('/login', { state: { from: '/cart' } });
      }
    };

    return (
        <div className="cart-container">
            <div className="cart-content">
                <h2>Cart</h2>
                <h5>Your shopping cart</h5>
                <div className="cart-header">
                    <h4>Title</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Total</h4>
                </div>
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>by {item.author}</p>
                                </div>
                            </div>
                            <p className="item-price">R{item.price.toFixed(2)}</p>
                            <div className="item-quantity">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <p className="item-total">R{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Order summary */}
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>R{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>VAT (15%)</span>
                    <span>R{vat.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>R{total.toFixed(2)}</span>
                </div>
                <Link to="/payment" className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</Link>
                <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;