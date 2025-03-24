import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-content"
      >
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>john.doe@techpro.dev</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco Bay Area, CA</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <span>github.com/johndoe-tech</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <span>linkedin.com/in/johndoe-security</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 