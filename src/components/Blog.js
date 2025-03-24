import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Blue Team',
      title: 'Implementing Effective SIEM Solutions',
      excerpt: 'A comprehensive guide to setting up and optimizing Security Information and Event Management systems...',
      date: '2024-03-15',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3'
    },
    {
      id: 2,
      category: 'Red Team',
      title: 'Advanced Penetration Testing Techniques',
      excerpt: 'Exploring modern penetration testing methodologies and tools for comprehensive security assessments...',
      date: '2024-03-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3'
    },
    {
      id: 3,
      category: 'Blue Team',
      title: 'Incident Response Best Practices',
      excerpt: 'Learn about effective incident response strategies and how to handle security breaches...',
      date: '2024-03-05',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3'
    },
    {
      id: 4,
      category: 'Red Team',
      title: 'Social Engineering Tactics',
      excerpt: 'Understanding and defending against modern social engineering attacks...',
      date: '2024-02-28',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1563206767-0c897e525511?ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className="blog section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-content"
      >
        <h2>Security Blog</h2>
        <div className="blog-categories">
          <button className="category-btn active">All</button>
          <button className="category-btn">Blue Team</button>
          <button className="category-btn">Red Team</button>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="blog-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <span className="category-tag">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="date">{post.date}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog; 