"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileNavBar from './MobileNavBar';
import ToastNotification from './ToastNotification';
import { autoSetupAnchorHandlers } from '../utils/scrollUtils';

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "info", message: "" });

  // Initialize theme from localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      setDarkMode(JSON.parse(saved));
    }
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

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const closeToast = () => setToast(prev => ({ ...prev, show: false }));

  return (
    <>
      {/* Site Header/Nav */}
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

      {/* Mobile Nav (app-bar) */}
      <nav aria-label="Mobile navigation">
        <MobileNavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
    </>
  );
} 