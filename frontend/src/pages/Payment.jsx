import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import valid from 'card-validator';
import '../index.css';
import visaIcon from '../assets/visa-icon.png';
import mastercardIcon from '../assets/mastercard-icon.png';
import amexIcon from '../assets/amex-icon.png';
import discoverIcon from '../assets/discover-icon.png';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardType, setCardType] = useState(null);
    const [paypalEmail, setPaypalEmail] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const number = valid.number(cardNumber);
        setCardType(number.card ? number.card.type : null);
    }, [cardNumber]);

    const validateForm = () => {
        const newErrors = {};
        
        if (!valid.number(cardNumber).isValid) {
            newErrors.cardNumber = 'Invalid card number';
        }

        if (!valid.expirationDate(expiry).isValid) {
            newErrors.expiry = 'Invalid expiration date';
        }

        if (!valid.cvv(cvv).isValid) {
            newErrors.cvv = 'Invalid CVV';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Process payment
            alert('Payment successful!');
            navigate('/');
        }
    };

    const getCardIcon = () => {
        switch (cardType) {
            case 'visa': return visaIcon;
            case 'mastercard': return mastercardIcon;
            case 'american-express': return amexIcon;
            case 'discover': return discoverIcon;
            default: return null;
        }
    };

    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    const formatExpiry = (value) => {
        const expiry = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (expiry.length > 2) {
            return `${expiry.slice(0, 2)}/${expiry.slice(2, 4)}`;
        }
        return expiry;
    };

    return (
        <div className="payment-container">
            <h2>Payment</h2>
            <form onSubmit={handleSubmit}>
                <div className="payment-methods">
                    <h3>Select Payment Method</h3>
                    {['paypal', 'creditCard', 'debitCard', 'other'].map((method) => (
                        <div key={method} className="payment-method-option">
                            <input 
                                type="radio" 
                                id={method} 
                                name="paymentMethod" 
                                value={method}
                                checked={paymentMethod === method}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label htmlFor={method}>{method.charAt(0).toUpperCase() + method.slice(1)}</label>
                        </div>
                    ))}
                </div>
                {paymentMethod === 'paypal' && (
                    <div className="paypal-details">
                        <h3>PayPal Details</h3>
                        <div className="input-group">
                            <input 
                                type="email" 
                                placeholder="PayPal Email" 
                                value={paypalEmail}
                                onChange={(e) => setPaypalEmail(e.target.value)}
                                required
                            />
                            {errors.paypalEmail && <span className="error">{errors.paypalEmail}</span>}
                        </div>
                    </div>
                )}

                {(paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && (
                    <div className="card-details">
                        <h3>Card Details</h3>
                        <div className="input-group">
                            <div className="input-with-icon">
                                <input 
                                    type="text" 
                                    placeholder="Card Number" 
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                    maxLength="19"
                                    required
                                />
                                {getCardIcon() && <img src={getCardIcon()} alt="Card type" className="card-icon" />}
                            </div>
                            {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                        </div>
                        
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="MM/YY" 
                                value={expiry}
                                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                maxLength="5"
                                required
                            />
                            {errors.expiry && <span className="error">{errors.expiry}</span>}
                        </div>
                        
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="CVV" 
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                                maxLength="4"
                                required
                            />
                            {errors.cvv && <span className="error">{errors.cvv}</span>}
                        </div>
                    </div>
                )}

                <button type="submit" className="pay-btn">Pay Now</button>
            </form>
        </div>
    );
};

export default Payment;