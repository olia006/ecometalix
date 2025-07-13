// Scroll utility functions for the entire application

/**
 * Get the appropriate header offset based on screen size
 * @returns {number} Header offset in pixels
 */
export function getHeaderOffset() {
  const isMobile = window.innerWidth < 900;
  
  if (isMobile) {
    // Mobile has bottom nav, no top offset needed
    return 20; // Small buffer for better UX
  } else {
    // Desktop has sticky header (72px) + buffer
    return 90;
  }
}

/**
 * Scroll to a specific element with proper header offset
 * @param {Element|string} elementOrSelector - DOM element or CSS selector
 * @param {Object} options - Scroll options
 */
export function scrollToElement(elementOrSelector, options = {}) {
  const element = typeof elementOrSelector === 'string' 
    ? document.querySelector(elementOrSelector)
    : elementOrSelector;
    
  if (!element) {
    console.warn('ScrollToElement: Element not found:', elementOrSelector);
    return;
  }

  const headerOffset = options.offset || getHeaderOffset();
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
    behavior: options.behavior || 'smooth'
  });

  // Focus the element for accessibility (after scroll completes)
  if (options.focus !== false) {
    setTimeout(() => {
      element.focus({ preventScroll: true });
    }, 500);
  }
}

/**
 * Scroll to top of page
 * @param {Object} options - Scroll options
 */
export function scrollToTop(options = {}) {
  window.scrollTo({ 
    top: 0, 
    left: 0, 
    behavior: options.behavior || 'smooth' 
  });
}

/**
 * Handle anchor link clicks with proper offset
 * @param {Event} event - Click event
 * @param {string} href - Href attribute value
 */
export function handleAnchorClick(event, href) {
  // Check if this is an anchor link (starts with #)
  if (href && href.startsWith('#')) {
    event.preventDefault();
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      scrollToElement(targetElement);
      
      // Update URL without triggering a route change
      if (window.history && window.history.pushState) {
        window.history.pushState(null, null, href);
      }
    }
  }
}

/**
 * Setup anchor link handlers for a container
 * @param {Element} container - Container element to setup handlers for
 */
export function setupAnchorHandlers(container = document) {
  const anchorLinks = container.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      handleAnchorClick(event, link.getAttribute('href'));
    });
  });
}

/**
 * Auto-setup anchor handlers when DOM is ready
 */
export function autoSetupAnchorHandlers() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupAnchorHandlers();
    });
  } else {
    setupAnchorHandlers();
  }
}

/**
 * Debounce function for scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} 