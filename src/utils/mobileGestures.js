// Mobile Gesture Utilities for Enhanced Touch UX
// Provides swipe detection, pinch-to-zoom, and other touch gestures

/**
 * Enhanced swipe detection for mobile carousels and navigation
 * @param {HTMLElement} element - Element to attach swipe listeners
 * @param {Object} options - Configuration options
 * @returns {Function} Cleanup function to remove listeners
 */
export function addSwipeGestures(element, options = {}) {
  const config = {
    threshold: 50,           // Minimum swipe distance
    velocityThreshold: 0.3,  // Minimum swipe velocity
    timeThreshold: 300,      // Maximum swipe duration
    allowedTime: 300,        // Maximum time for swipe
    restraint: 100,          // Maximum perpendicular movement
    onSwipeLeft: null,
    onSwipeRight: null,
    onSwipeUp: null,
    onSwipeDown: null,
    onTap: null,
    onLongPress: null,
    ...options
  };

  let startX = 0, startY = 0, endX = 0, endY = 0;
  let startTime = 0, endTime = 0;
  let longPressTimer = null;
  let isSwiping = false;

  // Touch start handler
  function handleTouchStart(e) {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startTime = Date.now();
    isSwiping = false;
    
    // Start long press timer
    if (config.onLongPress) {
      longPressTimer = setTimeout(() => {
        if (!isSwiping) {
          config.onLongPress(e);
        }
      }, 500);
    }
  }

  // Touch move handler
  function handleTouchMove(e) {
    isSwiping = true;
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
    
    // Prevent default scrolling for horizontal swipes
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - startX);
    const deltaY = Math.abs(touch.clientY - startY);
    
    if (deltaX > deltaY && deltaX > 20) {
      e.preventDefault();
    }
  }

  // Touch end handler
  function handleTouchEnd(e) {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }

    const touch = e.changedTouches[0];
    endX = touch.clientX;
    endY = touch.clientY;
    endTime = Date.now();

    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    const duration = endTime - startTime;
    const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / duration;

    // Check if it's a tap
    if (!isSwiping && absDeltaX < 10 && absDeltaY < 10 && duration < 200) {
      if (config.onTap) {
        config.onTap(e);
      }
      return;
    }

    // Check swipe conditions
    if (duration <= config.allowedTime && velocity >= config.velocityThreshold) {
      // Horizontal swipe
      if (absDeltaX >= config.threshold && absDeltaY <= config.restraint) {
        if (deltaX > 0 && config.onSwipeRight) {
          config.onSwipeRight(e, { distance: absDeltaX, velocity, duration });
        } else if (deltaX < 0 && config.onSwipeLeft) {
          config.onSwipeLeft(e, { distance: absDeltaX, velocity, duration });
        }
      }
      // Vertical swipe
      else if (absDeltaY >= config.threshold && absDeltaX <= config.restraint) {
        if (deltaY > 0 && config.onSwipeDown) {
          config.onSwipeDown(e, { distance: absDeltaY, velocity, duration });
        } else if (deltaY < 0 && config.onSwipeUp) {
          config.onSwipeUp(e, { distance: absDeltaY, velocity, duration });
        }
      }
    }
  }

  // Add passive event listeners for better performance
  element.addEventListener('touchstart', handleTouchStart, { passive: false });
  element.addEventListener('touchmove', handleTouchMove, { passive: false });
  element.addEventListener('touchend', handleTouchEnd, { passive: true });

  // Return cleanup function
  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
    element.removeEventListener('touchmove', handleTouchMove);
    element.removeEventListener('touchend', handleTouchEnd);
    if (longPressTimer) {
      clearTimeout(longPressTimer);
    }
  };
}

/**
 * Add pinch-to-zoom gesture support for images
 * @param {HTMLElement} element - Image element
 * @param {Object} options - Configuration options
 * @returns {Function} Cleanup function
 */
export function addPinchZoom(element, options = {}) {
  const config = {
    minScale: 1,
    maxScale: 3,
    duration: 300,
    onZoomStart: null,
    onZoomEnd: null,
    ...options
  };

  let initialDistance = 0;
  let initialScale = 1;
  let currentScale = 1;
  let isZooming = false;

  function getDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function handleTouchStart(e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      isZooming = true;
      initialDistance = getDistance(e.touches);
      initialScale = currentScale;
      if (config.onZoomStart) config.onZoomStart(e);
    }
  }

  function handleTouchMove(e) {
    if (e.touches.length === 2 && isZooming) {
      e.preventDefault();
      const distance = getDistance(e.touches);
      const scale = initialScale * (distance / initialDistance);
      
      currentScale = Math.max(config.minScale, Math.min(config.maxScale, scale));
      element.style.transform = `scale(${currentScale})`;
    }
  }

  function handleTouchEnd(e) {
    if (isZooming) {
      isZooming = false;
      if (config.onZoomEnd) config.onZoomEnd(e, currentScale);
      
      // Reset to bounds if needed
      if (currentScale < config.minScale) {
        currentScale = config.minScale;
        element.style.transform = `scale(${currentScale})`;
      }
    }
  }

  element.addEventListener('touchstart', handleTouchStart, { passive: false });
  element.addEventListener('touchmove', handleTouchMove, { passive: false });
  element.addEventListener('touchend', handleTouchEnd, { passive: true });

  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
    element.removeEventListener('touchmove', handleTouchMove);
    element.removeEventListener('touchend', handleTouchEnd);
  };
}

/**
 * Mobile-optimized scroll utilities
 */
export const mobileScrollUtils = {
  // Smooth scroll with mobile optimization
  scrollTo(element, options = {}) {
    const config = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      ...options
    };

    // Use native scroll on mobile for better performance
    if ('scrollIntoView' in element) {
      element.scrollIntoView(config);
    } else {
      // Fallback for older browsers
      element.scrollTop = 0;
    }
  },

  // Disable scroll temporarily (useful for modals)
  disableScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  },

  // Re-enable scroll
  enableScroll() {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  },

  // Get scroll position with mobile considerations
  getScrollPosition() {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  }
};

/**
 * Detect mobile device capabilities
 */
export const mobileDetection = {
  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },

  isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  },

  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  },

  isAndroid() {
    return /Android/.test(navigator.userAgent);
  },

  supportsHover() {
    return window.matchMedia('(hover: hover)').matches;
  },

  hasCoarsePointer() {
    return window.matchMedia('(pointer: coarse)').matches;
  },

  getViewportSize() {
    return {
      width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };
  },

  // Safe area insets for devices with notches
  getSafeAreaInsets() {
    const style = getComputedStyle(document.documentElement);
    return {
      top: parseInt(style.getPropertyValue('env(safe-area-inset-top)')) || 0,
      right: parseInt(style.getPropertyValue('env(safe-area-inset-right)')) || 0,
      bottom: parseInt(style.getPropertyValue('env(safe-area-inset-bottom)')) || 0,
      left: parseInt(style.getPropertyValue('env(safe-area-inset-left)')) || 0
    };
  }
}; 