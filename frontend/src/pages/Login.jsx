import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import '../index.css';

const Login = () => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            navigate('/dashboard');
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'An error occurred during login.');
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Handle password reset logic here
        console.log('Password reset requested for:', resetEmail);
        alert('Password reset link has been sent to your email.');
        setShowForgotPassword(false);
        setResetEmail('');
    };

    return (
        <div className="login-container">
            {!showForgotPassword ? (
                <div className="login-form">
                    <div className="login-left">
                        <h2>Login with Email</h2>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <form onSubmit={handleLogin}>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="login-button">Login</button>
                        </form>
                        <div className="forgot-password">
                            <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
                        </div>
                        <div className="not-registered">
                            <p>Not registered? <Link to="/signup">Create an account</Link></p>
                        </div>
                    </div>
                    <div className="login-right">
                        <h2>Login with Social Media</h2>
                        <div className="social-login">
                            <button className="social-button google">
                                <FontAwesomeIcon icon={faGoogle} /> Login with Google
                            </button>
                            <button className="social-button linkedin">
                                <FontAwesomeIcon icon={faLinkedin} /> Login with LinkedIn
                            </button>
                            <button className="social-button twitter">
                                <FontAwesomeIcon icon={faTwitter} /> Login with Twitter
                            </button>
                            <button className="social-button github">
                                <FontAwesomeIcon icon={faGithub} /> Login with GitHub
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="forgot-password-form">
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleResetPassword}>
                        <div className="input-group">
                            <label htmlFor="resetEmail">Email</label>
                            <input 
                                type="email" 
                                id="resetEmail" 
                                name="resetEmail" 
                                required
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="reset-button">Reset Password</button>
                    </form>
                    <div className="back-to-login">
                        <a href="#" onClick={() => setShowForgotPassword(false)}>Back to Login</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;