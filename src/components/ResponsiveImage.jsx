import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import './ResponsiveImage.css';

const ResponsiveImage = ({
  src,
  alt,
  sizes = '100vw',
  srcSet = [],
  width,
  height,
  className = '',
  placeholderColor = '#f0f0f0',
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px'
  });

  // Generate srcset string from array of image objects
  const generateSrcSet = () => {
    if (srcSet.length === 0) return '';
    return srcSet.map(img => `${img.src} ${img.width}w`).join(', ');
  };

  return (
    <div
      ref={ref}
      className={`responsive-image-container ${className}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
        backgroundColor: placeholderColor,
        aspectRatio: width && height ? width / height : 'auto'
      }}
    >
      {inView && (
        <picture>
          <source type="image/webp" srcSet={generateSrcSet()} sizes={sizes} />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            className={`responsive-image ${isLoaded ? 'loaded' : ''}`}
            onLoad={() => setIsLoaded(true)}
            sizes={sizes}
          />
        </picture>
      )}
      {!isLoaded && (
        <div className="image-placeholder" style={{ backgroundColor: placeholderColor }}></div>
      )}
    </div>
  );
};

export default ResponsiveImage; 