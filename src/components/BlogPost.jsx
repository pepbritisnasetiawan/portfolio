import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  
  // This would typically come from an API or data store
  const post = {
    id: id,
    title: 'Implementing Effective SIEM Solutions',
    date: '2024-03-15',
    author: 'Febrian Tisna',
    category: 'Blue Team',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3',
    content: `
      <p>Security Information and Event Management (SIEM) solutions are essential components of modern cybersecurity infrastructure. They provide organizations with the ability to collect, analyze, and respond to security events across their network in real-time.</p>
      
      <h2>Why SIEM Matters</h2>
      <p>In today's threat landscape, organizations face increasingly sophisticated attacks. A properly implemented SIEM solution offers several key benefits:</p>
      <ul>
        <li>Real-time threat detection and alerting</li>
        <li>Centralized logging and monitoring</li>
        <li>Compliance reporting and management</li>
        <li>Incident response automation</li>
        <li>Forensic analysis capabilities</li>
      </ul>
      
      <h2>Key Components of an Effective SIEM</h2>
      <p>When implementing a SIEM solution, organizations should focus on these critical components:</p>
      
      <h3>1. Log Collection and Normalization</h3>
      <p>The foundation of any SIEM is its ability to collect logs from diverse sources across the network. This includes servers, workstations, network devices, security appliances, and applications. The SIEM must normalize these logs into a consistent format for analysis.</p>
      
      <h3>2. Real-time Correlation and Analysis</h3>
      <p>SIEM solutions use correlation rules and analytics to identify patterns that might indicate security incidents. This real-time analysis is crucial for detecting threats as they emerge.</p>
      
      <h3>3. Alerting and Incident Response</h3>
      <p>When potential threats are detected, the SIEM should generate alerts and trigger appropriate response actions. This might include notifying security personnel, initiating automated remediation, or escalating to incident response teams.</p>
      
      <h3>4. Dashboards and Reporting</h3>
      <p>Effective visualization tools help security teams understand their environment and respond to threats more efficiently. Customizable dashboards and detailed reporting capabilities are essential for both operational and compliance purposes.</p>
      
      <h2>Implementation Best Practices</h2>
      <p>To maximize the value of your SIEM investment:</p>
      <ul>
        <li>Start with clear use cases and objectives</li>
        <li>Implement in phases rather than all at once</li>
        <li>Tune correlation rules to reduce false positives</li>
        <li>Integrate with existing security tools and processes</li>
        <li>Regularly review and update your SIEM configuration</li>
      </ul>
      
      <p>Remember that a SIEM is not a "set it and forget it" solution. It requires ongoing maintenance, tuning, and adaptation to remain effective against evolving threats.</p>
    `
  };

  return (
    <section className="blog-post">
      <div className="blog-post-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/blog" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8332 10H4.1665" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.99984 15.8334L4.1665 10.0001L9.99984 4.16675" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>

          <div className="post-header">
            <span className="post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-author">By {post.author}</span>
            </div>
          </div>

          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost; 