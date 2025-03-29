import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3>Error</h3>
      <p>{message}</p>
      <button onClick={() => window.location.reload()} className="retry-button">
        Try Again
      </button>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage; 