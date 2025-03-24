import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Image.css';

const Image = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-wrapper ${className || ''}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="image-placeholder" />
      )}
    </div>
  );
};

export default Image; 