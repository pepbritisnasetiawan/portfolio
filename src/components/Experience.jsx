import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior SOC Analyst",
      company: "CyberGuard Solutions",
      period: "2022 - Present",
      description: [
        "Lead a team of 5 analysts in 24/7 security monitoring operations",
        "Reduced average incident response time by 40% through process automation",
        "Implemented SOAR playbooks for common security incidents",
        "Conducted regular threat hunting exercises and vulnerability assessments",
        "Mentored junior analysts and developed training materials"
      ]
    },
    {
      title: "Fullstack Developer",
      company: "TechCorp International",
      period: "2020 - 2022",
      description: [
        "Developed and maintained enterprise-level web applications using React and Node.js",
        "Implemented secure authentication systems using OAuth2 and JWT",
        "Optimized database queries resulting in 50% faster load times",
        "Led the migration of legacy systems to modern microservices architecture",
        "Collaborated with security teams to implement secure coding practices"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Innovations Ltd",
      period: "2018 - 2020",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Implemented RESTful APIs and integrated third-party services",
        "Participated in code reviews and contributed to coding standards",
        "Assisted in security audits and vulnerability assessments"
      ]
    }
  ];

  return (
    <section className="experience section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="experience-content"
      >
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 