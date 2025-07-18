// src/components/DesktopHamburgerMenu.jsx
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import styles from "./DesktopHamburgerMenu.module.css";
import { BUSINESS_INFO } from "../config/constants";

// Helper function for language switching
function getLanguageSwitchUrl(currentPath) {
  const isEnglish = currentPath.startsWith("/en");
  
  if (isEnglish) {
    // Switch from English to Spanish
    if (currentPath === "/en") return "/";
    return currentPath.replace("/en", "") || "/";
  } else {
    // Switch from Spanish to English
    if (currentPath === "/") return "/en";
    return `/en${currentPath}`;
  }
}

export default function DesktopHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActiveLink = (href) => {
    return pathname === href;
  };

  return (
    <div className={styles.container}>
      {/* Hamburger Button */}
      <button
        className={styles.hamburgerButton}
        onClick={toggleMenu}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
        >
          <div 
            className={styles.menuPanel}
            role="dialog"
            aria-label="Menú de navegación"
          >
            {/* Header Section */}
            <div className={styles.headerSection}>
              <h2 className={styles.companyName}>{BUSINESS_INFO.name}</h2>
              <p className={styles.welcomeMessage}>¿Cómo podemos ayudarte hoy?</p>
            </div>

            {/* Search Bar */}
            <div className={styles.searchSection}>
              <div className={styles.searchContainer}>
                <Search size={18} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Buscar materiales, precios..."
                  className={styles.searchInput}
                  aria-label="Buscar en el sitio"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className={styles.navigation}>
              <ul className={styles.navList}>
                <li>
                  <Link
                    href="/"
                    className={isActiveLink("/") ? styles.activeLink : styles.navLink}
                    onClick={closeMenu}
                  >
                    Inicio
                  </Link>
                </li>
                
                {/* Primary Featured Links */}
                <li>
                  <Link
                    href="/precios"
                    className={`${isActiveLink("/precios") ? styles.activeFeaturedLink : styles.featuredLink}`}
                    onClick={closeMenu}
                  >
                    Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/como-funciona"
                    className={`${isActiveLink("/como-funciona") ? styles.activeFeaturedLink : styles.featuredLink}`}
                    onClick={closeMenu}
                  >
                    Nuestro Proceso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/por-que-nosotros"
                    className={`${isActiveLink("/por-que-nosotros") ? styles.activeFeaturedLink : styles.featuredLink}`}
                    onClick={closeMenu}
                  >
                    Por qué Nosotros
                  </Link>
                </li>

                {/* Regular Links */}
                <li>
                  <Link
                    href="/materiales"
                    className={isActiveLink("/materiales") ? styles.activeLink : styles.navLink}
                    onClick={closeMenu}
                  >
                    Materiales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={isActiveLink("/faq") ? styles.activeLink : styles.navLink}
                    onClick={closeMenu}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Language Selector at Bottom */}
            <div className={styles.languageSection}>
              <Link
                href={getLanguageSwitchUrl(pathname)}
                className={styles.languageLink}
                onClick={closeMenu}
                aria-label={pathname.startsWith("/en") ? "Cambiar a español" : "Cambiar a inglés"}
              >
                {pathname.startsWith("/en") ? "🇪🇸 Español" : "🇺🇸 English"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

 
 