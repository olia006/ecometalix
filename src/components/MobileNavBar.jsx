import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaDollarSign,
  FaQuestionCircle
} from "react-icons/fa";
import styles from "./MobileNavBar.module.css";

export default function MobileNavBar() {
  return (
    <nav className={styles.mobileNav} aria-label="Menú móvil principal">
      {/* Left group */}
      <NavLink
        to="/por-que-nosotros"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
      >
        <FaInfoCircle className={styles.icon} aria-hidden="true" />
        <span>Por qué</span>
      </NavLink>
      <NavLink
        to="/precios"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
      >
        <FaDollarSign className={styles.icon} aria-hidden="true" />
        <span>Precios</span>
      </NavLink>

      {/* Floating home button */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${styles.homeItem} ${styles.homeActive}`
            : styles.homeItem
        }
        aria-label="Ir a inicio"
      >
        <FaHome className={styles.homeIcon} aria-hidden="true" />
      </NavLink>

      {/* Right group */}
      <NavLink
        to="/faq"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
      >
        <FaQuestionCircle className={styles.icon} aria-hidden="true" />
        <span>FAQ</span>
      </NavLink>
    </nav>
  );
}
