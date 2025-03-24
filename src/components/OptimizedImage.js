import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import './OptimizedImage.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  placeholderColor = '#f0f0f0',
  loading = 'lazy'
}) => {
  const [imgSrc, setImgSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px'
  });

  useEffect(() => {
    if (inView) {
      // Generate WebP version URL if possible
      const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');
      
      // Create new image to preload
      const img = new Image();
      img.src = webpSrc;
      img.onload = () => {
        setImgSrc(webpSrc);
        setIsLoaded(true);
      };
      img.onerror = () => {
        // Fallback to original format
        const fallbackImg = new Image();
        fallbackImg.src = src;
        fallbackImg.onload = () => {
          setImgSrc(src);
          setIsLoaded(true);
        };
      };
    }
  }, [inView, src]);

  return (
    <div 
      ref={ref}
      className={`optimized-image-container ${className}`}
      style={{ 
        width: width || '100%',
        height: height || 'auto',
        backgroundColor: placeholderColor,
        aspectRatio: width && height ? width / height : 'auto'
      }}
    >
      {inView && (
        <picture>
          <source srcSet={imgSrc.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
          <source srcSet={imgSrc} type={`image/${src.split('.').pop()}`} />
          <img
            src={imgSrc || src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
            onLoad={() => setIsLoaded(true)}
          />
        </picture>
      )}
      {!isLoaded && (
        <div className="image-placeholder" style={{ backgroundColor: placeholderColor }}></div>
      )}
    </div>
  );
};

export default OptimizedImage; 