import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Blog.css';
import { fetchBlogPosts } from '../services/blogService';
import { getDefaultImage } from '../utils/imageUtils';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import Pagination from './common/Pagination';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Function to strip HTML tags from content
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setIsLoading(true);
        const posts = await fetchBlogPosts();
        
        // Process the posts data
        const processedPosts = posts.map((post, index) => {
          // Clean the content by removing HTML tags
          const cleanContent = stripHtml(post.content);
          
          return {
            id: index,
            title: post.title,
            content: post.content,
            excerpt: post.summary || cleanContent.substring(0, 150) + '...',
            category: getCategoryFromContent(cleanContent),
            permalink: post.url,
            date: new Date(post.date || Date.now()).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            readTime: calculateReadTime(cleanContent),
            image: post.image || getDefaultImage(post, index)
          };
        });
        
        setBlogPosts(processedPosts);
        setFilteredPosts(processedPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  // Filter posts when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
    // Reset to first page when category changes
    setCurrentPage(1);
  }, [activeCategory, blogPosts]);

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map(post => post.category));
    return ['All', ...uniqueCategories].filter(Boolean);
  }, [blogPosts]);

  // Helper function to determine category from content
  const getCategoryFromContent = (content) => {
    const contentLower = content.toLowerCase();
    
    if (contentLower.includes('ransomware')) return 'Ransomware';
    if (contentLower.includes('malware')) return 'Malware';
    if (contentLower.includes('threat')) return 'Threat Intelligence';
    if (contentLower.includes('exploit')) return 'Exploits';
    if (contentLower.includes('vulnerability')) return 'Vulnerabilities';
    if (contentLower.includes('detection')) return 'Detection';
    
    return 'Cybersecurity';
  };

  // Calculate estimated reading time
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          Insights and perspectives on cybersecurity, malware analysis, and threat intelligence.
        </p>
        
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <AnimatePresence mode="wait">
          {filteredPosts && (
            <motion.div
              key={activeCategory}
              className="blog-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))
              ) : (
                <div className="no-posts">
                  <p>No posts found in this category.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {filteredPosts.length > postsPerPage && (
          <Pagination 
            postsPerPage={postsPerPage} 
            totalPosts={filteredPosts.length} 
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
};

export default Blog; 