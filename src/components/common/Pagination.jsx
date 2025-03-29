import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button 
              onClick={() => paginate(currentPage - 1)} 
              className="page-link prev"
              aria-label="Previous page"
            >
              &laquo;
            </button>
          </li>
        )}
        
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
        
        {currentPage < pageNumbers.length && (
          <li className="page-item">
            <button 
              onClick={() => paginate(currentPage + 1)} 
              className="page-link next"
              aria-label="Next page"
            >
              &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination; 