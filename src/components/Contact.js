import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <div className="contact-content">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="contact-title">Let's Connect</h1>
          <p className="contact-subtitle">
            Have a project in mind? Looking to partner or work together? Reach out through the form below.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="contact-info-title">Contact Information</h2>
            <div className="contact-details">
              <div className="contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div className="contact-item-content">
                  <span className="contact-item-label">Phone</span>
                  <div className="contact-item-value">+62 123 456 789</div>
                </div>
              </div>

              <div className="contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <div className="contact-item-content">
                  <span className="contact-item-label">Email</span>
                  <div className="contact-item-value">
                    <a href="mailto:hello@febrian.com">hello@febrian.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <svg className="contact-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="contact-item-content">
                  <span className="contact-item-label">Location</span>
                  <div className="contact-item-value">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                placeholder="Your name"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="your@email.com"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="form-textarea" 
                placeholder="How can I help you?"
                required
              />
            </div>

            <button type="submit" className="form-submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 