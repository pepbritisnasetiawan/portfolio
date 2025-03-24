import React, { useRef, useState, useEffect } from 'react';
import './VirtualizedList.css';

const VirtualizedList = ({ 
  items, 
  renderItem, 
  itemHeight = 100,
  overscan = 5,
  className = ''
}) => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateVisibleItems = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerHeight = container.clientHeight;
      const newVisibleCount = Math.ceil(containerHeight / itemHeight) + overscan * 2;
      
      setVisibleCount(newVisibleCount);
    };

    calculateVisibleItems();
    window.addEventListener('resize', calculateVisibleItems);
    
    return () => window.removeEventListener('resize', calculateVisibleItems);
  }, [itemHeight, overscan]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = containerRef.current.scrollTop;
      const newStart = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
      
      setStart(newStart);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [itemHeight, overscan]);

  const totalHeight = items.length * itemHeight;
  const visibleItems = items.slice(start, start + visibleCount);
  const offsetY = start * itemHeight;

  return (
    <div 
      ref={containerRef} 
      className={`virtualized-list-container ${className}`}
    >
      <div 
        className="virtualized-list-content"
        style={{ height: totalHeight }}
      >
        <div 
          className="virtualized-list-items"
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          {visibleItems.map((item, index) => (
            <div 
              key={index} 
              className="virtualized-list-item"
              style={{ height: itemHeight }}
            >
              {renderItem(item, start + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList; 