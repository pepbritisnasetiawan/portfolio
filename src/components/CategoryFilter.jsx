import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
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
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired
};

export default CategoryFilter; 