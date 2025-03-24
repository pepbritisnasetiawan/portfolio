import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Wrap blogPosts in useMemo to prevent recreation on every render
  const blogPosts = useMemo(() => [
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
    },
    {
      id: 5,
      category: 'Cybersecurity',
      title: 'Zero Trust Architecture Explained',
      excerpt: 'A deep dive into implementing Zero Trust security models in modern organizations...',
      date: '2024-02-20',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3'
    },
    {
      id: 6,
      category: 'Technology',
      title: 'The Future of Cloud Security',
      excerpt: 'Exploring emerging trends and best practices in securing cloud infrastructure...',
      date: '2024-02-15',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3'
    }
  ], []); // Empty dependency array means this will only be created once

  // Get all unique categories
  const categories = useMemo(() => ['All', ...new Set(blogPosts.map(post => post.category))], [blogPosts]);

  // Filter posts when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory, blogPosts]);

  return (
    <section className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Blog & Articles</h1>
          <p className="blog-subtitle">
            Thoughts, insights, and perspectives on cybersecurity, technology, and more.
          </p>
        </div>

        <div className="blog-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="blog-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  layout
                >
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
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
              ))
            ) : (
              <div className="no-posts">
                <p>No posts found in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog; 