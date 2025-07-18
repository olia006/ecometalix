import { useEffect } from 'react';
import { scrollToElement } from '../utils/scrollUtils';

/**
 * Custom hook for handling anchor scrolling within a page
 * @returns {Function} scrollToAnchor function for manual scrolling
 */
export default function useScrollToAnchor() {
  
  // Function to scroll to an anchor programmatically
  const scrollToAnchor = (anchorId, options = {}) => {
    if (!anchorId) return;
    
    // Remove # if present
    const cleanId = anchorId.replace('#', '');
    const element = document.getElementById(cleanId);
    
    if (element) {
      scrollToElement(element, options);
    } else {
      console.warn(`Element with id "${cleanId}" not found`);
    }
  };

  // Set up anchor link handlers for this page
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        event.preventDefault();
        scrollToAnchor(href);
      }
    };

    // Find all anchor links on the page
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click handlers
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup function
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return scrollToAnchor;
}

/**
 * Hook for handling URL hash on page load
 * Useful for direct links to sections within a page
 */
export function useHashScrollOnLoad() {
  useEffect(() => {
    // Check if URL has hash when component mounts
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          scrollToElement(element);
        }
      }, 100);
    }
  }, []);
} 