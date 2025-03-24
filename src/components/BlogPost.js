import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

const blogData = {
  1: {
    title: 'Implementing Effective SIEM Solutions',
    category: 'Blue Team',
    date: '2024-03-15',
    author: 'Febrian Tisna Setiawan',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3',
    content: [
      {
        type: 'paragraph',
        content: 'In today\'s rapidly evolving threat landscape, implementing an effective Security Information and Event Management (SIEM) solution is crucial for organizations of all sizes. This comprehensive guide will walk you through the essential steps of setting up and optimizing your SIEM implementation.'
      },
      {
        type: 'heading',
        content: 'Understanding SIEM Basics'
      },
      {
        type: 'paragraph',
        content: 'SIEM solutions combine Security Information Management (SIM) and Security Event Management (SEM) into a comprehensive security monitoring system. The primary goals include:'
      },
      {
        type: 'list',
        items: [
          'Real-time collection and analysis of security alerts',
          'Log management and retention',
          'Threat detection and incident response',
          'Compliance reporting and documentation'
        ]
      },
      {
        type: 'heading',
        content: 'Key Implementation Steps'
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Example Elasticsearch query for security events
GET security-events-*/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "event.type": "alert" } },
        { "range": { "@timestamp": { "gte": "now-24h" } } }
      ]
    }
  }
}`
      },
      {
        type: 'paragraph',
        content: 'When implementing a SIEM solution, consider the following best practices:'
      },
      {
        type: 'list',
        items: [
          'Define clear use cases and objectives',
          'Start with critical systems and gradually expand',
          'Establish baseline behavior patterns',
          'Develop and document response procedures',
          'Regular tuning and optimization'
        ]
      },
      {
        type: 'heading',
        content: 'Common Challenges and Solutions'
      },
      {
        type: 'paragraph',
        content: 'Organizations often face several challenges during SIEM implementation:'
      },
      {
        type: 'table',
        headers: ['Challenge', 'Solution'],
        rows: [
          ['Data overload', 'Implement proper log filtering and aggregation'],
          ['False positives', 'Regular tuning of correlation rules'],
          ['Skills gap', 'Invest in training and documentation'],
          ['Performance issues', 'Optimize hardware resources and data retention']
        ]
      }
    ]
  },
  2: {
    title: 'Advanced Penetration Testing Techniques',
    category: 'Red Team',
    date: '2024-03-10',
    author: 'Febrian Tisna Setiawan',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3',
    content: [
      {
        type: 'paragraph',
        content: 'Modern penetration testing requires a comprehensive understanding of various attack vectors and methodologies. This article explores advanced techniques used in professional penetration testing engagements.'
      },
      {
        type: 'heading',
        content: 'Advanced Reconnaissance Techniques'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Example subdomain enumeration script
import dns.resolver
import concurrent.futures

def check_subdomain(domain, subdomain):
    try:
        dns.resolver.resolve(f"{subdomain}.{domain}", 'A')
        return f"{subdomain}.{domain}"
    except:
        return None`
      },
      {
        type: 'heading',
        content: 'Web Application Testing'
      },
      {
        type: 'list',
        items: [
          'Advanced SQL Injection techniques',
          'OAuth 2.0 vulnerability assessment',
          'JWT token manipulation',
          'GraphQL security testing'
        ]
      }
    ]
  }
  // Add more blog posts as needed
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData[id];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="blog-post section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-post-content"
      >
        <Link to="/blog" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Blog
        </Link>
        <div className="post-header">
          <span className="category-tag">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="author">By {post.author}</span>
            <span className="date">{post.date}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
        </div>
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="post-body">
          {post.content.map((section, index) => {
            switch (section.type) {
              case 'paragraph':
                return <p key={index}>{section.content}</p>;
              case 'heading':
                return <h2 key={index}>{section.content}</h2>;
              case 'list':
                return (
                  <ul key={index}>
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case 'code':
                return (
                  <pre key={index} className={`language-${section.language}`}>
                    <code>{section.content}</code>
                  </pre>
                );
              case 'table':
                return (
                  <table key={index}>
                    <thead>
                      <tr>
                        {section.headers.map((header, i) => (
                          <th key={i}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              default:
                return null;
            }
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogPost; 