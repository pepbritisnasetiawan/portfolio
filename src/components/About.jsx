import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-content"
      >
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              As a dedicated Fullstack Developer and SOC Analyst with over 5 years of experience,
              I bridge the gap between web development and cybersecurity. My unique background
              allows me to build secure, scalable applications while maintaining a strong focus
              on security best practices.
            </p>
            <p>
              I hold several certifications including CompTIA Security+, CEH, and AWS Solutions
              Architect. My experience spans from developing enterprise-level applications to
              managing security operations and incident response.
            </p>
            <p>
              When I'm not coding or hunting threats, I contribute to open-source security
              tools and speak at local tech meetups about web security best practices.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">SIEM</span>
              <span className="skill-tag">Network Security</span>
              <span className="skill-tag">Incident Response</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Threat Hunting</span>
              <span className="skill-tag">SOAR</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;