import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumb.module.css";
import { ChevronRight, Home } from "lucide-react";

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
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter(x => x);
  
  // Don't show breadcrumbs on home page
  if (pathname === "/" || pathname === "/en") {
    return null;
  }

  const isEnglish = pathname.startsWith("/en");
  const homeUrl = isEnglish ? "/en" : "/";
  const homeTitle = isEnglish ? "Home" : "Inicio";

  return (
    <nav className={`${styles.breadcrumb} ${className}`.trim()} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {/* Home link */}
        <li className={styles.breadcrumbItem}>
          <Link href={homeUrl} className={styles.breadcrumbLink}>
                          <Home className={styles.homeIcon} aria-hidden="true" />
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
              <ChevronRight className={styles.separator} aria-hidden="true" />
              {isLast ? (
                <span className={styles.breadcrumbCurrent} aria-current="page">
                  {title}
                </span>
              ) : (
                <Link href={routeTo} className={styles.breadcrumbLink}>
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