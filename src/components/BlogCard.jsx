import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ post }) => {
  // Function to strip HTML tags from content
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  // Create a clean excerpt without HTML tags
  const cleanExcerpt = stripHtml(post.excerpt);

  return (
    <motion.article
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
        <p>{cleanExcerpt}</p>
        <Link to={`/blog/${post.id}`} className="read-more">
          Read More <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </motion.article>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default BlogCard; 