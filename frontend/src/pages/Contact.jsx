import React, { useState, useEffect } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        contactSubject: '',
        contactMessage: ''
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cooldownTime, setCooldownTime] = useState(0);
    const [isFormValid, setIsFormValid] = useState(false);
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        const isValid = Object.values(formData).every(value => value.trim() !== '');
        setIsFormValid(isValid && !phoneError);
    }, [formData, phoneError]);

    useEffect(() => {
        let timer;
        if (cooldownTime > 0) {
            timer = setTimeout(() => setCooldownTime(cooldownTime - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [cooldownTime]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        if (name === 'contactPhone') {
            validatePhone(value);
        }
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            setPhoneError('Phone number must be exactly 10 digits');
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (phoneError || !isFormValid || isSubmitting || cooldownTime > 0) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://formbold.com/s/3pN88', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setShowSuccessPopup(true);
                setCooldownTime(10); // Set a 30-second cooldown
                setFormData({
                    contactName: '',
                    contactEmail: '',
                    contactPhone: '',
                    contactSubject: '',
                    contactMessage: ''
                });
                setTimeout(() => setShowSuccessPopup(false), 5000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setShowErrorPopup(true);
            setTimeout(() => setShowErrorPopup(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="contactName">Full Name</label>
                            <input 
                                type="text" 
                                id="contactName" 
                                name="contactName" 
                                placeholder="Junior Mkhize" 
                                required 
                                value={formData.contactName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contactEmail">Email</label>
                            <input 
                                type="email" 
                                id="contactEmail" 
                                name="contactEmail" 
                                placeholder="junit@gmail.com" 
                                required 
                                value={formData.contactEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contactPhone">Phone Number</label>
                            <input 
                                type="tel" 
                                id="contactPhone" 
                                name="contactPhone" 
                                placeholder="e.g., 0810986765" 
                                required 
                                value={formData.contactPhone}
                                onChange={handleChange}
                            />
                            {phoneError && <div className="error-message">{phoneError}</div>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="contactSubject">Subject</label>
                            <input 
                                type="text" 
                                id="contactSubject" 
                                name="contactSubject" 
                                required 
                                value={formData.contactSubject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contactMessage">Message</label>
                            <textarea 
                                id="contactMessage" 
                                name="contactMessage" 
                                rows="4" 
                                required
                                value={formData.contactMessage}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="contact-button"
                            disabled={!isFormValid || isSubmitting || cooldownTime > 0}
                        >
                            {isSubmitting ? 'Sending...' : cooldownTime > 0 ? `Wait ${cooldownTime}s` : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            {showSuccessPopup && (
                <div className="success-popup">
                    <FontAwesomeIcon icon={faCheckCircle} size="3x" color="green" />
                    <p>Form submitted successfully!</p>
                </div>
            )}
            {showErrorPopup && (
                <div className="error-popup">
                    <FontAwesomeIcon icon={faExclamationTriangle} size="3x" color="red" />
                    <p>An error occurred. Please try again later.</p>
                </div>
            )}
        </>
    );
};

export default Contact;