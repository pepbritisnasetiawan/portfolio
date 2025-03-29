/**
 * Utility functions for handling images
 */

// Default cybersecurity-related images
const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3', // Security dashboard
  'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3', // Hacker
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3', // Code
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3', // Lock
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3', // Binary
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3', // Network
  'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3', // Cybersecurity
  'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3'  // Keyboard
];

/**
 * Gets an appropriate default image based on post content/category
 * @param {Object} post - The blog post object
 * @param {number} index - The index of the post in the list
 * @returns {string} - URL of the image
 */
export const getDefaultImage = (post, index) => {
  // Check title or content for keywords to assign relevant images
  const title = post.title?.toLowerCase() || '';
  const content = (post.content || post.summary || '').toLowerCase();
  
  if (title.includes('malware') || content.includes('malware')) {
    return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3';
  } else if (title.includes('siem') || content.includes('siem')) {
    return 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3';
  } else if (title.includes('waf') || content.includes('waf') || content.includes('firewall')) {
    return 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3';
  } else if (title.includes('ransomware') || content.includes('ransomware')) {
    return 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3';
  } else if (title.includes('threat') || content.includes('threat')) {
    return 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3';
  } else if (title.includes('exploit') || content.includes('exploit')) {
    return 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3';
  } else if (title.includes('confluence') || content.includes('confluence')) {
    return 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3';
  }
  
  // If no specific match, use the default images array with the index as fallback
  return DEFAULT_IMAGES[index % DEFAULT_IMAGES.length];
}; 