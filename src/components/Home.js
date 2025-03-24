import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from './Image'; // Import the new Image component
import './Home.css';

const Home = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="home section">
      <motion.div
        className="home-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="home-left">
          <motion.h1 
            className="home-title"
            variants={itemVariants}
          >
            Crafting Secure<br />
            <span className="highlight">Digital Solutions</span>
          </motion.h1>
          <motion.p 
            className="home-description"
            variants={itemVariants}
          >
            Fullstack Developer & SOC Analyst based in Indonesia, specializing in secure application development
            and cybersecurity operations.
          </motion.p>
          <motion.div 
            className="home-buttons"
            variants={itemVariants}
          >
            <Link to="/projects" className="btn">View My Work</Link>
            <Link to="/contact" className="btn btn-outline">Let's Talk</Link>
          </motion.div>
        </div>

        <motion.div 
          className="home-right"
          variants={itemVariants}
        >
          <div className="stats-grid">
            {[
              {
                number: "5+",
                label: "Years of Experience"
              },
              {
                number: "50+",
                label: "Projects Completed"
              },
              {
                number: "100+",
                label: "Security Incidents Handled"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
            <motion.div
              className="stat-card featured"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="stat-label">Currently</span>
              <span className="stat-text">SOC Analyst at CyberGuard Solutions</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Add memo to prevent unnecessary re-renders
export default React.memo(Home); 