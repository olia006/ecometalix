'use client';

import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './globals.css'

// Components
import Navbar from '../components/Navbar';
import MobileNavBar from '../components/MobileNavBar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import OfflineIndicator from '../components/OfflineIndicator';
import ToastNotification from '../components/ToastNotification';
import ErrorBoundary from '../components/ErrorBoundary';
import FloatingInfo from '../components/FloatingInfo';

// Utils
import { autoSetupAnchorHandlers } from '../utils/scrollUtils';

// Types
interface ToastState {
  show: boolean;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false); // Always start with light mode for SSR consistency
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, type: "info", message: "" });

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
    <html lang="es">
      <body>
        <HelmetProvider>
          <ScrollToTop />
          <div className="app-wrapper">
            {/* ---- Offline Indicator ---- */}
            <OfflineIndicator />
            
            {/* ---- Site Header/Nav ---- */}
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* ---- Toast Notifications ---- */}
            {toast.show && (
              // @ts-expect-error - JSX component props issue
              <ToastNotification
                show={toast.show}
                type={toast.type}
                message={toast.message}
                onClose={closeToast}
              />
            )}

            {/* ---- Main Content ---- */}
            <main id="main-content" role="main" tabIndex={-1}>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>

            {/* ---- Mobile Nav (app-bar) ---- */}
            <nav aria-label="Mobile navigation">
              <MobileNavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </nav>

            {/* ---- Floating Info Panel (Mobile Only) ---- */}
            <FloatingInfo />

            {/* ---- Site Footer ---- */}
            <footer role="contentinfo">
              <Footer />
            </footer>
          </div>
        </HelmetProvider>
      </body>
    </html>
  )
} 