import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "SecureWatch Dashboard",
      description: "A real-time security monitoring dashboard that aggregates and analyzes logs from multiple sources, featuring automated alert triage and incident response workflows.",
      technologies: ["React", "Node.js", "ElasticSearch", "Redis"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with secure payment integration, user authentication, and real-time inventory management.",
      technologies: ["React", "Express.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3"
    },
    {
      title: "Threat Intel Portal",
      description: "An intelligence sharing platform for security teams to collaborate and track emerging threats, featuring automated IOC extraction and MISP integration.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3"
    },
    {
      title: "Asset Management System",
      description: "A comprehensive system for tracking and managing IT assets, including vulnerability assessment and patch management features.",
      technologies: ["Vue.js", "FastAPI", "MySQL", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="projects section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="projects-content"
      >
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 