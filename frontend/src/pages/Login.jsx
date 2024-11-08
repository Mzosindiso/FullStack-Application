import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

const Login = () => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetEmail, setResetEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempted with:', email, password);
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