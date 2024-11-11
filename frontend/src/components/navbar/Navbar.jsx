import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { totalCartItems } = useCart();

    return (
        <nav>
            <div className="logo">
                <span className="logo-text">Cape<span className="logo-highlight">Reads</span></span>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/limited-edition">Limited editions</Link></li>
                <li><Link to="/books">Books</Link></li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Search books..." />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <Link to="/dashboard" className="dashboard-icon">
                <FontAwesomeIcon icon={faTachometerAlt} />
                {/* <span>Dashboard</span> */}
            </Link>
            <ul className="nav-links">
            <li><Link to="/contact">Contact</Link></li>
            </ul>
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
                    {totalCartItems > 0 && <span className="cart-item-count">{totalCartItems}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;