import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.css";
import { FaChevronRight, FaHome } from "react-icons/fa";

// Route to title mapping
const routeTitles = {
  // Spanish routes
  "/": "Inicio",
  "/por-que-nosotros": "¿Por qué nosotros?",
  "/precios": "Precios",
  "/faq": "FAQ",
  "/contacto": "Contacto",
  
  // English routes
  "/en": "Home",
  "/en/why-us": "Why Us",
  "/en/prices": "Prices", 
  "/en/faq": "FAQ",
  "/en/contact": "Contact"
};

// eslint-disable-next-line react/prop-types
export default function Breadcrumb({ className = "" }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);
  
  // Don't show breadcrumbs on home page
  if (location.pathname === "/" || location.pathname === "/en") {
    return null;
  }

  const isEnglish = location.pathname.startsWith("/en");
  const homeUrl = isEnglish ? "/en" : "/";
  const homeTitle = isEnglish ? "Home" : "Inicio";

  return (
    <nav className={`${styles.breadcrumb} ${className}`.trim()} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {/* Home link */}
        <li className={styles.breadcrumbItem}>
          <Link to={homeUrl} className={styles.breadcrumbLink}>
            <FaHome className={styles.homeIcon} aria-hidden="true" />
            <span className={styles.srOnly}>{homeTitle}</span>
          </Link>
        </li>

        {/* Generate breadcrumb items */}
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const title = routeTitles[routeTo] || pathname;

          return (
            <li key={routeTo} className={styles.breadcrumbItem}>
              <FaChevronRight className={styles.separator} aria-hidden="true" />
              {isLast ? (
                <span className={styles.breadcrumbCurrent} aria-current="page">
                  {title}
                </span>
              ) : (
                <Link to={routeTo} className={styles.breadcrumbLink}>
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
} 