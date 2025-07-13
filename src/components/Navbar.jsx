// src/components/Navbar.jsx
import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import ThemeSwitcher from "./ThemeSwitcher";
import OptimizedImage from "./OptimizedImage";
import logoImage from "../assets/images/logoecometalix.png";

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

export default function Navbar({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Navegación principal">
        {/* Logo / Brand */}
        <div className={styles.logoContainer}>
          <NavLink to="/" aria-label="Ecometalix - Inicio">
            <OptimizedImage
              src={logoImage}
              alt="Ecometalix Logo"
              className={styles.logo}
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/por-que-nosotros"
              className={({ isActive }) => isActive ? styles.activeLink : ""}
            >
              Por qué Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/precios"
              className={({ isActive }) => isActive ? styles.activeLink : ""}
            >
              Precios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => isActive ? styles.activeLink : ""}
            >
              FAQ
            </NavLink>
          </li>
        </ul>

        {/* Utility Group: Language + Theme Switcher */}
        <div className={styles.ctaGroup}>
          {/* Language Switcher */}
          <NavLink
            to={getLanguageSwitchUrl(location.pathname)}
            className={styles.langSwitcher}
            aria-label={location.pathname.startsWith("/en") ? "Cambiar a español" : "Cambiar a inglés"}
          >
            {location.pathname.startsWith("/en") ? "ES" : "EN"}
          </NavLink>

          {/* Theme Switcher */}
          <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
