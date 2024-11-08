import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Logo from '../../assets/Logo-transparent-logo-size.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid-0">
                <div className="logo">
                    <span className="logo-text">Cape<span className="logo-highlight">Reads</span></span>
                </div>
                <img src={Logo} alt="CapeReads Logo" style={{width: '150px', height: '150px'}} />
            </div>
            <div className="footer-grid-1">
                <h3>Company</h3>
                <ul>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/accessibility">Accessibility</Link></li>
                    <li><Link to="/glossary">Glossary</Link></li>
                </ul>
            </div>
            <div className="footer-grid-2">
                <h3>Support</h3>
                <ul>
                    <li><Link to="/terms">General terms & conditions</Link></li>
                    <li><Link to="/privacy">Privacy policy</Link></li>
                    <li><Link to="/shipping">Returns & shipping</Link></li>
                </ul>
            </div>
            <div className="footer-grid-3">
                <h3>Connect</h3>
                <ul>
                    <li><a href="https://facebook.com/capereads" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://instagram.com/capereads" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://twitter.com/capereads" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://linkedin.com/company/capereads" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://youtube.com/capereads" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                </ul>
            </div>
            <div className="footer-grid-4">
                <h3>Sign up for newsletter</h3>
                <input type="email" placeholder="Enter your email" />
                <button className="submit-btn">Subscribe</button>
            </div>
        </footer>
    );
};

export default Footer;