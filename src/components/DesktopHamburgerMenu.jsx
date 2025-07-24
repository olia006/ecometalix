// src/components/DesktopHamburgerMenu.jsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search, ArrowRight, Clock, Phone, MapPin, DollarSign, Wrench } from "lucide-react";
import styles from "./DesktopHamburgerMenu.module.css";
import { BUSINESS_INFO } from "../config/constants";
import { isBusinessOpen } from "../utils/businessHours";

// Analytics tracking helper
const trackMenuEvent = (action, label = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'Navigation',
      event_label: label,
      value: 1
    });
  }
};

// Search suggestions based on site content
const SEARCH_SUGGESTIONS = [
  "Precios de cobre",
  "Tipos de fierro",
  "Horarios de atención",
  "Materiales aceptados",
  "Proceso de venta",
  "Ubicación centro",
  "Contacto WhatsApp"
];

export default function DesktopHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [businessOpen, setBusinessOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  const searchInputRef = useRef(null);
  const menuPanelRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // Ensure component is mounted before rendering portal (Vitaly Friedman - SSR Safety)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check business status
  useEffect(() => {
    setBusinessOpen(isBusinessOpen());
    const interval = setInterval(() => {
      setBusinessOpen(isBusinessOpen());
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      hamburgerButtonRef.current?.focus();
    }
    
    // Quick navigation shortcuts (Jakob Nielsen - Keyboard Accessibility)
    if (e.altKey && isOpen) {
      switch(e.key) {
        case 'p':
          e.preventDefault();
          router.push('/precios');
          closeMenu();
          trackMenuEvent('keyboard_shortcut', 'precios');
          break;
        case 'm':
          e.preventDefault();
          router.push('/materiales');
          closeMenu();
          trackMenuEvent('keyboard_shortcut', 'materiales');
          break;
        case 's':
          e.preventDefault();
          searchInputRef.current?.focus();
          break;
      }
    }
  }, [isOpen, router]);

  // Global keyboard listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Focus management and accessibility (Jakob Nielsen)
  const openMenu = useCallback(() => {
    setIsOpen(true);
    
    // Track menu opening (Neil Patel - Analytics)
    trackMenuEvent('menu_open');
    
    // Focus search input with delay for animation
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 150);
    
    // Prevent body scroll (Luke Wroblewski - Mobile UX)
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setSearchValue('');
    setSuggestions([]);
    
    // Track menu closing (Neil Patel - Analytics)
    trackMenuEvent('menu_close');
    
    // Restore body scroll
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }, []);

  // Touch gesture support (Luke Wroblewski - Mobile Gestures)
  const handleTouchStart = useRef({ x: 0, y: 0 });
  const handleTouchEnd = useCallback((e) => {
    if (!isOpen) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - handleTouchStart.current.x;
    const deltaY = touch.clientY - handleTouchStart.current.y;
    
    // Swipe right to close (minimum 100px, mostly horizontal)
    if (deltaX > 100 && Math.abs(deltaY) < 50) {
      closeMenu();
      trackMenuEvent('swipe_close');
    }
  }, [isOpen, closeMenu]);

  // Enhanced search with suggestions (Neil Patel - Conversion)
  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchValue(value);
    
    if (value.length > 0) {
      const filtered = SEARCH_SUGGESTIONS.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, []);

  // Search functionality with analytics (Brian Dean - SEO)
  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Track search
      trackMenuEvent('search_submit', searchValue.trim());
      
      // Intelligent search routing
      const searchQuery = searchValue.toLowerCase();
      
      if (searchQuery.includes('precio')) {
        router.push('/precios');
      } else if (searchQuery.includes('material') || searchQuery.includes('fierro') || searchQuery.includes('cobre')) {
        router.push('/materiales');
      } else if (searchQuery.includes('proceso') || searchQuery.includes('funciona')) {
        router.push('/como-funciona');
      } else if (searchQuery.includes('horario') || searchQuery.includes('abierto')) {
        router.push('/faq');
      } else {
        router.push(`/faq?search=${encodeURIComponent(searchValue)}`);
      }
      
      closeMenu();
    }
  }, [searchValue, router, closeMenu]);

  // Language switching with analytics
  const handleLanguageSwitch = useCallback(() => {
    const isEnglish = pathname.startsWith("/en");
    let newPath;
    
    if (isEnglish) {
      newPath = pathname === "/en" ? "/" : pathname.replace("/en", "") || "/";
    } else {
      newPath = pathname === "/" ? "/en" : `/en${pathname}`;
    }
    
    trackMenuEvent('language_switch', isEnglish ? 'to_spanish' : 'to_english');
    router.push(newPath);
    closeMenu();
  }, [pathname, router, closeMenu]);

  // Link tracking helper (Neil Patel - Conversion Tracking)
  const handleLinkClick = useCallback((href, label) => {
    trackMenuEvent('menu_navigation', label);
    closeMenu();
  }, [closeMenu]);

  const isActiveLink = (href) => pathname === href;

  // Menu overlay component (Brad Frost - Component Separation)
  const MenuOverlay = () => (
    <>
      {/* Skip link for accessibility (Jakob Nielsen) */}
      <a href="#main-content" className={styles.skipLink}>
        Saltar al contenido principal
      </a>
      
      <div 
        className={styles.overlay}
        onClick={closeMenu}
        onTouchStart={(e) => {
          handleTouchStart.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
        }}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-header"
        aria-describedby="menu-description"
      >
        <div 
          ref={menuPanelRef}
          className={styles.menuPanel}
          id="navigation-menu"
          onClick={(e) => e.stopPropagation()}
          role="document"
        >
          {/* Enhanced Header Section */}
          <div className={styles.headerSection}>
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Cerrar menú"
              type="button"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div className={styles.brandHeader}>
              <h2 id="menu-header" className={styles.companyName}>
                {BUSINESS_INFO.name}
              </h2>
              <div className={styles.businessStatus}>
                <Clock size={16} aria-hidden="true" />
                <span className={businessOpen ? styles.statusOpen : styles.statusClosed}>
                  {businessOpen ? 'Abierto ahora' : 'Cerrado - Abre a las 8:30'}
                </span>
              </div>
            </div>
            <p id="menu-description" className={styles.welcomeMessage}>
              Navegación rápida y búsqueda inteligente
            </p>
          </div>

          {/* Enhanced Search Section */}
          <div className={styles.searchSection}>
            <form 
              className={styles.searchContainer}
              onSubmit={handleSearchSubmit}
              role="search"
              aria-label="Buscar contenido del sitio"
            >
              <div className={styles.searchInputWrapper}>
                <Search size={18} className={styles.searchIcon} aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Buscar materiales, precios..."
                  className={styles.searchInput}
                  aria-label="Buscar en el sitio"
                  aria-describedby="search-hint"
                  autoComplete="off"
                  spellCheck="false"
                />
                <kbd className={styles.shortcutHint}>Alt+S</kbd>
              </div>
              
              {/* Search suggestions */}
              {suggestions.length > 0 && (
                <div className={styles.searchSuggestions} role="listbox">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      className={styles.suggestionItem}
                      onClick={() => {
                        setSearchValue(suggestion);
                        handleSearchSubmit({ preventDefault: () => {} });
                      }}
                      role="option"
                    >
                      <Search size={14} aria-hidden="true" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              
              <span id="search-hint" className="sr-only">
                Escribe para buscar materiales, precios o información del sitio. 
                Usa Alt+S para enfocar rápidamente.
              </span>
            </form>
          </div>

          {/* Enhanced Navigation */}
          <nav className={styles.navigation} aria-label="Navegación principal">
            {/* Quick Actions Section (Neil Patel - Conversion Focus) */}
            <div className={styles.quickActions}>
              <h3 className={styles.sectionTitle}>Acciones Rápidas</h3>
              <div className={styles.quickActionGrid}>
                                    <Link
                      href="/precios"
                      className={`${styles.quickAction} ${isActiveLink("/precios") ? styles.quickActionActive : ''}`}
                      onClick={() => handleLinkClick('/precios', 'precios_quick')}
                      aria-current={isActiveLink("/precios") ? "page" : undefined}
                    >
                      <DollarSign className={styles.quickActionIcon} size={24} aria-hidden="true" />
                      <span>Precios</span>
                      <kbd>Alt+P</kbd>
                    </Link>
                    
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                      className={styles.quickAction}
                      onClick={() => trackMenuEvent('contact_whatsapp', 'menu_quick_action')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className={styles.quickActionIcon} size={24} aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                    
                    <Link
                      href="/materiales"
                      className={`${styles.quickAction} ${isActiveLink("/materiales") ? styles.quickActionActive : ''}`}
                      onClick={() => handleLinkClick('/materiales', 'materiales_quick')}
                      aria-current={isActiveLink("/materiales") ? "page" : undefined}
                    >
                      <Wrench className={styles.quickActionIcon} size={24} aria-hidden="true" />
                      <span>Materiales</span>
                      <kbd>Alt+M</kbd>
                    </Link>
              </div>
            </div>

            {/* Main Navigation */}
            <div className={styles.mainNavigation}>
              <h3 className={styles.sectionTitle}>Navegación</h3>
              <ul className={styles.navList} role="list">
                <li role="listitem">
                  <Link
                    href="/"
                    className={`${styles.navLink} ${isActiveLink("/") ? styles.navLinkActive : ''}`}
                    onClick={() => handleLinkClick('/', 'inicio')}
                    aria-current={isActiveLink("/") ? "page" : undefined}
                  >
                    <span className={styles.navLinkText}>Inicio</span>
                    <ArrowRight size={16} className={styles.navLinkArrow} aria-hidden="true" />
                  </Link>
                </li>
                
                <li role="listitem">
                  <Link
                    href="/como-funciona"
                    className={`${styles.navLink} ${isActiveLink("/como-funciona") ? styles.navLinkActive : ''}`}
                    onClick={() => handleLinkClick('/como-funciona', 'proceso')}
                    aria-current={isActiveLink("/como-funciona") ? "page" : undefined}
                  >
                    <span className={styles.navLinkText}>Nuestro Proceso</span>
                    <ArrowRight size={16} className={styles.navLinkArrow} aria-hidden="true" />
                  </Link>
                </li>
                
                <li role="listitem">
                  <Link
                    href="/por-que-nosotros"
                    className={`${styles.navLink} ${isActiveLink("/por-que-nosotros") ? styles.navLinkActive : ''}`}
                    onClick={() => handleLinkClick('/por-que-nosotros', 'ventajas')}
                    aria-current={isActiveLink("/por-que-nosotros") ? "page" : undefined}
                  >
                    <span className={styles.navLinkText}>Por qué Nosotros</span>
                    <ArrowRight size={16} className={styles.navLinkArrow} aria-hidden="true" />
                  </Link>
                </li>
                
                <li role="listitem">
                  <Link
                    href="/faq"
                    className={`${styles.navLink} ${isActiveLink("/faq") ? styles.navLinkActive : ''}`}
                    onClick={() => handleLinkClick('/faq', 'faq')}
                    aria-current={isActiveLink("/faq") ? "page" : undefined}
                  >
                    <span className={styles.navLinkText}>Preguntas Frecuentes</span>
                    <ArrowRight size={16} className={styles.navLinkArrow} aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Enhanced Footer Section */}
          <div className={styles.footerSection}>
            <div className={styles.contactInfo}>
              <h3 className={styles.sectionTitle}>Contacto Rápido</h3>
              <div className={styles.contactGrid}>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className={styles.contactItem}
                  onClick={() => trackMenuEvent('contact_phone', 'menu')}
                >
                  <Phone size={16} aria-hidden="true" />
                  <span>Llamar</span>
                </a>
                <a 
                  href={BUSINESS_INFO.maps}
                  className={styles.contactItem}
                  onClick={() => trackMenuEvent('contact_maps', 'menu')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} aria-hidden="true" />
                  <span>Ubicación</span>
                </a>
              </div>
            </div>
            
            <button
              onClick={handleLanguageSwitch}
              className={styles.languageButton}
              aria-label={pathname.startsWith("/en") ? "Cambiar a español" : "Switch to English"}
            >
              {pathname.startsWith("/en") ? "🇪🇸 Español" : "🇺🇸 English"}
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger Button (stays in navbar) */}
      <div className={styles.container}>
        <button
          ref={hamburgerButtonRef}
          className={`${styles.hamburgerButton} ${isOpen ? styles.hamburgerButtonOpen : ''}`}
          onClick={isOpen ? closeMenu : openMenu}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls="navigation-menu"
          aria-keyshortcuts="Escape"
        >
          <span className={styles.hamburgerIcon}>
            {isOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </span>
        </button>
      </div>

      {/* Portal-rendered overlay (Vitaly Friedman - Architecture) */}
      {mounted && isOpen && createPortal(
        <MenuOverlay />,
        document.body
      )}
    </>
  );
}

 
 