import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll on route change
    const handleRouteChange = () => {
      // Check if this is an anchor link (hash in URL)
      if (location.hash) {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
          const element = document.querySelector(location.hash);
          if (element) {
            scrollToElement(element);
          }
        }, 100);
      } else {
        // No hash, scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    };

    handleRouteChange();
  }, [location]);

  return null;
}

// Utility function to scroll to element with proper offset
function scrollToElement(element) {
  if (!element) return;

  // Calculate offset for sticky header
  const headerOffset = getHeaderOffset();
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  // Focus the element for accessibility (after scroll completes)
  setTimeout(() => {
    element.focus({ preventScroll: true });
  }, 500);
}

// Get header offset based on screen size
function getHeaderOffset() {
  const isMobile = window.innerWidth < 900;
  
  if (isMobile) {
    // Mobile has bottom nav, no top offset needed
    return 20; // Small buffer for better UX
  } else {
    // Desktop has sticky header (72px) + buffer
    return 90;
  }
}

// Export utility function for use in other components
export { scrollToElement }; 