import React, { useState, useEffect } from 'react';
import assets from '../assets';
import '../index.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        // Initialize cart items (this could be fetched from an API or local storage in a real app)
        const initialCartItems = [
            { id: 1, title: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell", price: 219.99, quantity: 1, image: assets.crackingInterview },
            { id: 2, title: "System Design Interview – An Insider's Guide: Volume 2", author: "Alex Xu, Sahn Lam", price: 219.99, quantity: 1, image: assets.systemsDesign },
            { id: 3, title: "Software Design Patterns: Elements of Reusable Object-Oriented Software", author: "Gamma, Helm, Johnson, and Vlissides", price: 219.99, quantity: 1, image: assets.python },
        ];
        setCartItems(initialCartItems);
    }, []);

    useEffect(() => {
        // Calculate subtotal whenever cart items change
        const newSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
    }, [cartItems]);

    const clearCart = () => {
        setCartItems([]);
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
        ).filter(item => item.quantity > 0));
    };

    const vat = subtotal * 0.15;
    const total = subtotal + vat;

    return (
        <>
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
                    {cartItems.map(item => (
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
                <button className="checkout-btn">Proceed to Checkout</button>
                <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
        </>
    );
};

export default Cart;