"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ToastNotification from './ToastNotification';
import { autoSetupAnchorHandlers } from '../utils/scrollUtils';

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "info", message: "" });

  // Initialize theme from localStorage or system preference after mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    
    if (saved !== null) {
      // Use saved preference
      setDarkMode(JSON.parse(saved));
    } else {
      // No saved preference - detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }

    // Listen for system theme changes (when no saved preference exists)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const savedPreference = localStorage.getItem("darkMode");
      if (savedPreference === null) {
        // Only follow system if user hasn't manually set preference
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  // Initialize anchor link handlers
  useEffect(() => {
    autoSetupAnchorHandlers();
  }, []);

  // Analytics tracking for theme changes
  const trackThemeChange = (newTheme) => {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'theme_preference', {
        theme: newTheme ? 'dark' : 'light',
        timestamp: Date.now(),
        page_title: document.title
      });
    }
    
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Theme changed to:', newTheme ? 'dark' : 'light');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newValue = !prev;
      trackThemeChange(newValue);
      return newValue;
    });
  };
  const closeToast = () => setToast(prev => ({ ...prev, show: false }));

  return (
    <>
      {/* Site Header/Nav - Desktop only */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Toast Notifications */}
      {toast.show && (
        <ToastNotification
          show={toast.show}
          type={toast.type}
          message={toast.message}
          onClose={closeToast}
        />
      )}

      {/* Main Content */}
      {children}

      {/* Mobile navigation is now handled by the responsive Navbar */}
    </>
  );
} 