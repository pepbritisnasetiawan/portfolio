import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="home-content"
      >
        <h1>Hi, I'm Febrian Tisna Setiawan</h1>
        <h2>Fullstack Developer & SOC Analyst</h2>
        <p>
          With 5+ years of experience in cybersecurity and web development,
          I specialize in creating secure, scalable applications while protecting
          digital assets through proactive threat detection and incident response.
        </p>
        <div className="home-buttons">
          <Link to="/projects" className="btn">View My Work</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 