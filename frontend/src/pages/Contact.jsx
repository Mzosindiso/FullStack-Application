import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
        {/* Contact Form */}
        <div className="contact-container">
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="contactName">Full Name</label>
                        <input type="text" id="contactName" name="contactName" placeholder="Junior Mkhize" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="contactEmail">Email</label>
                        <input type="email" id="contactEmail" name="contactEmail" placeholder="junit@gmail.com" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="contactPhone">Phone Number</label>
                        <input type="tel" id="contactPhone" name="contactPhone" pattern="[0-9]{10}" placeholder="e.g., +27810986765" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" id="contactSubject" name="contactSubject" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="contactMessage">Message</label>
                        <textarea id="contactMessage" name="contactMessage" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="contact-button">Send Message</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Contact;