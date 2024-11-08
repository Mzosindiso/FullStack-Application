import React from 'react';
import assets from '../assets';
import '../index.css';

const Cart = () => {
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
                    {/* Example cart item */}
                    <div className="cart-item">
                        <div className="item-details">
                            <img src={assets.crackingInterview} />
                            <div>
                                <h4>Cracking the Coding Interview: 189 Programming Questions and Solutions
                                    (Cracking the Interview & Career) 6th Edition</h4>
                                <p>by Gayle Laakmann McDowell (Author)</p>
                            </div>
                        </div>
                        <p className="item-price">R219.99</p>
                        <div className="item-quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p className="item-total">R219.99</p>
                    </div>
                    <div className="cart-item">
                        <div className="item-details">
                            <img src={assets.systemsDesign} />
                            <div>
                                <h4>System Design Interview – An Insider's Guide: Volume 2</h4>
                                <p>by Alex Xu (Author), Sahn Lam (Author)</p>
                            </div>
                        </div>
                        <p className="item-price">R219.99</p>
                        <div className="item-quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p className="item-total">R219.99</p>
                    </div>
                    <div className="cart-item">
                        <div className="item-details">
                            <img src={assets.python} />
                            <div>
                                <h4>Software Design Patterns: Elements of Reusable Object-Oriented Software</h4>
                                <p>by Gamma, Helm, Johnson, and Vlissides (Author)</p>
                            </div>
                        </div>
                        <p className="item-price">R219.99</p>
                        <div className="item-quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p className="item-total">R219.99</p>
                    </div>
                    <div className="cart-item">
                        <div className="item-details">
                            <img src={assets.crackingInterview} />
                            <div>
                                <h4>Cracking the Coding Interview: 189 Programming Questions and Solutions
                                    (Cracking the Interview & Career) 6th Edition</h4>
                                <p>by Gayle Laakmann McDowell (Author)</p>
                            </div>
                        </div>
                        <p className="item-price">R219.99</p>
                        <div className="item-quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p className="item-total">R219.99</p>
                    </div>
                </div>
            </div>
            {/* Order summary */}
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>R0.00</span>
                </div>
                <div className="summary-row">
                    <span>VAT (15%)</span>
                    <span>R0.00</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>R.00</span>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
                <button className="clear-btn">Clear Cart</button>
            </div>
        </div>
        </>
    );
};

export default Cart;