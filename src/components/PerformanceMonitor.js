import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Report Web Vitals
    const reportWebVitals = ({ name, delta, id }) => {
      // Analytics
      if (window.gtag) {
        window.gtag('event', name, {
          event_category: 'Web Vitals',
          event_label: id,
          value: Math.round(name === 'CLS' ? delta * 1000 : delta),
          non_interaction: true,
        });
      }
      
      // Console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${name}: ${Math.round(delta)}`);
      }
    };

    // Initialize Performance Observer
    if ('PerformanceObserver' in window) {
      // FID
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fid = entry.processingStart - entry.startTime;
          reportWebVitals({
            name: 'FID',
            delta: fid,
            id: entry.target.id || entry.target.className || 'unknown'
          });
        }
      }).observe({ type: 'first-input', buffered: true });

      // LCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportWebVitals({
          name: 'LCP',
          delta: lastEntry.startTime,
          id: lastEntry.id
        });
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      // CLS
      let clsValue = 0;
      let clsEntries = [];
      
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = clsEntries.length === 0;
            const largestSessionEntry = entry.value > clsValue;
            
            if (firstSessionEntry || largestSessionEntry) {
              clsValue = entry.value;
              clsEntries = [entry];
            }
            
            reportWebVitals({
              name: 'CLS',
              delta: clsValue,
              id: 'page'
            });
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    }
  }, []);

  return null;
};

export default PerformanceMonitor; 