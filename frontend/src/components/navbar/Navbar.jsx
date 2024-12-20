import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav>
            <div className="logo">
                <span className="logo-text">Cape<span className="logo-highlight">Reads</span></span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Search books..." />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>

            <div className="utility-links">
                <div className="language-selector">
                    <select>
                        <option value="en-ZA">English | ZA</option>
                        <option value="af-ZA">Afrikaans | ZA</option>
                        <option value="xh-ZA">isiXhosa | ZA</option>
                    </select>
                </div>
                <Link to="/login" className="login-icon">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/cart" className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;