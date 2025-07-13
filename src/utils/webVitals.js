// src/utils/webVitals.js
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

// Simple function to log web vitals (replace with analytics service later)
function sendToAnalytics(metric) {
  // In production, you'd send this to Google Analytics, DataDog, etc.
  console.log('Web Vital:', metric);
  
  // Optional: Send to Google Analytics 4 if available
  // eslint-disable-next-line no-undef
  if (typeof gtag !== 'undefined') {
    // eslint-disable-next-line no-undef
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

// Initialize Web Vitals tracking
export function initWebVitals() {
  try {
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
    console.warn('Web Vitals tracking failed:', error);
  }
} 