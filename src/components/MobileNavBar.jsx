"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import {
  Menu,
  Search,
  DollarSign,
  X,
  Home,
  Heart,
  HelpCircle,
  Newspaper,
  Mail,
  Globe,
  Package,
  Sun,
  Moon
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./MobileNavBar.module.css";

// Helper function for language switching
function getLanguageSwitchUrl(currentPath) {
  const isEnglish = currentPath.startsWith("/en");
  
  if (isEnglish) {
    if (currentPath === "/en") return "/";
    return currentPath.replace("/en", "") || "/";
  } else {
    if (currentPath === "/") return "/en";
    return `/en${currentPath}`;
  }
}

export default function MobileNavBar({ darkMode, toggleDarkMode }) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);
  const borderRef = useRef(null);
  const pathname = usePathname();

  const whatsappLink = "https://wa.me/56940244042?text=Hola,%20quisiera%20cotizar%20el%20precio%20de%20mi%20chatarra";

  // Hide on scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide if scrolling down and past a threshold
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleItemClick = (index, element) => {
    setActiveItem(index);
    
    if (index === 1) {
      setIsHamburgerOpen(!isHamburgerOpen);
    }
    
    // Move border animation
    if (borderRef.current && element) {
      const { offsetLeft, offsetWidth } = element;
      borderRef.current.style.left = `${offsetLeft}px`;
      borderRef.current.style.width = `${offsetWidth}px`;
    }
  };

  const handleHamburgerNavigation = () => {
    setIsHamburgerOpen(false);
  };

  // Close hamburger menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isHamburgerOpen && !event.target.closest(`.${styles.hamburgerMenu}`)) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isHamburgerOpen]);

  return (
    <>
      {/* Hamburger Menu Overlay */}
      {isHamburgerOpen && (
        <div className={styles.hamburgerOverlay}>
          <div className={styles.hamburgerMenu}>
            <div className={styles.hamburgerHeader}>
              <h2>Menú</h2>
                             <button
                 className={styles.closeButton}
                 onClick={() => setIsHamburgerOpen(false)}
                 aria-label="Cerrar menú"
               >
                 <X />
               </button>
            </div>
            
            <nav className={styles.hamburgerNav}>
              <Link
                href="/materiales"
                className={styles.hamburgerItem}
                onClick={handleHamburgerNavigation}
              >
                <Package />
                <span>Materiales</span>
              </Link>
              
              <Link
                href="/por-que-nosotros"
                className={styles.hamburgerItem}
                onClick={handleHamburgerNavigation}
              >
                <Heart />
                <span>Nosotros</span>
              </Link>
              
              <Link
                href="/faq"
                className={styles.hamburgerItem}
                onClick={handleHamburgerNavigation}
              >
                <HelpCircle />
                <span>FAQ</span>
              </Link>
              
              <div className={styles.hamburgerItem}>
                <Newspaper />
                <span>Noticias</span>
              </div>
              
              <div className={styles.hamburgerItem}>
                <Mail />
                <span>Contacto</span>
              </div>
              
              <button
                className={styles.hamburgerItem}
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
              >
                {darkMode ? <Sun /> : <Moon />}
                <span>Tema</span>
              </button>
              
              <Link
                href={getLanguageSwitchUrl(pathname)}
                className={styles.hamburgerItem}
                onClick={handleHamburgerNavigation}
              >
                <Globe />
                <span>
                  {pathname.startsWith("/en") ? "Español" : "English"}
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className={`${styles.wrapper} ${!isVisible ? styles.hidden : ''}`}>
        <menu className={styles.menu} ref={menuRef}>
          
          {/* Home Button */}
          <Link
            href="/"
            className={`${styles.menuItem} ${activeItem === 0 ? styles.active : ''}`}
            onClick={(e) => handleItemClick(0, e.currentTarget)}
            style={{"--bgColorItem": "var(--color-electric-blue)"}}
            aria-label="Ir a inicio"
          >
            <Home className={styles.icon} />
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className={`${styles.menuItem} ${activeItem === 1 ? styles.active : ''}`}
            onClick={(e) => handleItemClick(1, e.currentTarget)}
            style={{"--bgColorItem": "var(--color-electric-blue)"}}
            aria-label="Abrir menú principal"
          >
            <Menu className={styles.icon} />
          </button>

          {/* Search Button */}
          <button 
            className={`${styles.menuItem} ${activeItem === 2 ? styles.active : ''}`}
            onClick={(e) => handleItemClick(2, e.currentTarget)}
            style={{"--bgColorItem": "var(--color-electric-blue)"}}
            aria-label="Buscar"
          >
            <Search className={styles.icon} />
          </button>

          {/* Prices Button */}
          <Link
            href="/precios"
            className={`${styles.menuItem} ${activeItem === 3 ? styles.active : ''}`}
            onClick={(e) => handleItemClick(3, e.currentTarget)}
            style={{"--bgColorItem": "var(--color-electric-blue)"}}
            aria-label="Ver precios"
          >
            <DollarSign className={styles.icon} />
          </Link>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.menuItem} ${activeItem === 4 ? styles.active : ''}`}
            onClick={(e) => handleItemClick(4, e.currentTarget)}
            style={{"--bgColorItem": "var(--color-electric-blue)"}}
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon />
          </a>

          {/* Animated border */}
          <div className={styles.border} ref={borderRef}></div>
        </menu>
      </div>
    </>
  );
}

MobileNavBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
