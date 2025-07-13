// src/App.jsx
import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { autoSetupAnchorHandlers } from "./utils/scrollUtils";

// --- Global Layout Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNavBar from "./components/MobileNavBar";
import ToastNotification from "./components/ToastNotification";
import ErrorBoundary from "./components/ErrorBoundary";
import OfflineIndicator from "./components/OfflineIndicator";
import ScrollToTop from "./components/ScrollToTop";

// --- Lazy-load Main Pages (Bilingual) ---
const BilingualHomePage = React.lazy(() => import("./pages/BilingualHomePage"));
const WhyUsPage = React.lazy(() => import("./pages/WhyUsPage"));
const PricesPage = React.lazy(() => import("./pages/PricesPage"));
const FAQPage = React.lazy(() => import("./pages/FAQPage"));
const NotFoundPage = React.lazy(() => import("./pages/404Page"));

// --- Lazy-load Material Pages ---
const MaterialsIndexPage = React.lazy(() => import("./pages/MaterialsIndexPage"));
const CobrePage = React.lazy(() => import("./pages/materials/CobrePage"));
const BroncePage = React.lazy(() => import("./pages/materials/BroncePage"));
const AluminiumPage = React.lazy(() => import("./pages/materials/AluminiumPage"));
const FierroLataPage = React.lazy(() => import("./pages/materials/FierroLataPage"));
const FierroLargoPage = React.lazy(() => import("./pages/materials/FierroLargoPage"));
const FierroCortoPage = React.lazy(() => import("./pages/materials/FierroCortoPage"));
const FierroMixtoPage = React.lazy(() => import("./pages/materials/FierroMixtoPage"));
const VirutaPage = React.lazy(() => import("./pages/materials/VirutaPage"));
const ElectricoPage = React.lazy(() => import("./pages/materials/ElectricoPage"));

export default function App() {
  // Toast/notification state
  const [toast, setToast] = useState({ show: false, type: "info", message: "" });
  
  // Dark mode state - get system preference initially
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      return JSON.parse(saved);
    }
    // Get system preference if no saved preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode data-theme to html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Initialize anchor link handlers
  useEffect(() => {
    autoSetupAnchorHandlers();
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // const showToast = (message, type = "info") => setToast({ show: true, type, message });

  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div className="app-wrapper">
        {/* ---- Offline Indicator ---- */}
        <OfflineIndicator />
        
        {/* ---- Site Header/Nav ---- */}
        <header role="banner">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </header>

        {/* ---- Toast Notifications (always visible, polite for a11y) ---- */}
        <ToastNotification
          show={toast.show}
          type={toast.type}
          message={toast.message}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
        />

        {/* ---- Main Content ---- */}
        <main id="main-content" role="main" tabIndex={-1}>
          <ErrorBoundary>
            <Suspense
              fallback={
                <div
                  role="status"
                  aria-live="polite"
                  className="page-loader"
                  style={{
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem"
                  }}
                >
                  <div style={{
                    width: "40px",
                    height: "40px",
                            border: "3px solid var(--color-surface)",
        borderTop: "3px solid var(--color-primary)",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                  }}></div>
                  <span style={{ fontSize: "1.1rem", color: "var(--color-muted)" }}>
                    Cargando…
                  </span>
                  <style>{`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                </div>
              }
            >
              <Routes>
                {/* ---- Bilingual Home Page ---- */}
                <Route path="/" element={<BilingualHomePage />} />
                <Route path="/en" element={<BilingualHomePage />} />
                
                {/* ---- Other Pages (Spanish) ---- */}
                <Route path="/por-que-nosotros" element={<WhyUsPage />} />
                <Route path="/precios" element={<PricesPage />} />
                <Route path="/faq" element={<FAQPage />} />

                {/* ---- Materials Index Page ---- */}
                <Route path="/materiales" element={<MaterialsIndexPage />} />

                {/* ---- Material Pages (Spanish) ---- */}
                <Route path="/materiales/cobre" element={<CobrePage />} />
                <Route path="/materiales/bronce" element={<BroncePage />} />
                <Route path="/materiales/aluminio" element={<AluminiumPage />} />
                <Route path="/materiales/fierro-lata" element={<FierroLataPage />} />
                <Route path="/materiales/fierro-largo" element={<FierroLargoPage />} />
                <Route path="/materiales/fierro-corto" element={<FierroCortoPage />} />
                <Route path="/materiales/fierro-mixto" element={<FierroMixtoPage />} />
                <Route path="/materiales/viruta" element={<VirutaPage />} />
                <Route path="/materiales/electrico" element={<ElectricoPage />} />

                {/* ---- English Pages (you can make these bilingual too) ---- */}
                <Route path="/en/why-us" element={<WhyUsPage />} />
                <Route path="/en/prices" element={<PricesPage />} />
                <Route path="/en/faq" element={<FAQPage />} />

                {/* ---- 404 (always last) ---- */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>

        {/* ---- Mobile Nav (app-bar) ---- */}
        <nav aria-label="Mobile navigation">
          <MobileNavBar />
        </nav>

        {/* ---- Site Footer ---- */}
        <footer role="contentinfo">
          <Footer />
        </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}
