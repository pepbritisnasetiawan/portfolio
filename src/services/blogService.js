/**
 * Service for fetching and processing blog data
 */

// The target API URL
const TARGET_API_URL = 'https://bluegates.netlify.app/posts/index.json';

// Use a different CORS proxy service
// Options include:
// - https://corsproxy.io/
// - https://api.allorigins.win/raw?url=
// - https://proxy.cors.sh/
const CORS_PROXY = 'https://corsproxy.io/?';

/**
 * Fetches blog posts from the API
 * @returns {Promise<Array>} - Array of blog posts
 */
export const fetchBlogPosts = async () => {
  try {
    // Try first with the direct URL (in case CORS is allowed)
    try {
      const directResponse = await fetch(TARGET_API_URL, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (directResponse.ok) {
        const data = await directResponse.json();
        return data;
      }
    } catch (directError) {
      console.log('Direct request failed, trying with CORS proxy...');
    }
    
    // If direct request fails, try with CORS proxy
    const proxyUrl = `${CORS_PROXY}${encodeURIComponent(TARGET_API_URL)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Fallback to local data if both approaches fail
    console.log('Falling back to local data...');
    
    // You could import a local JSON file here as fallback
    // import fallbackData from '../data/blogPosts.json';
    // return fallbackData;
    
    throw error;
  }
}; 