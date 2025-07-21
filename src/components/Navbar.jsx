// src/components/Navbar.jsx
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import ThemeSwitcher from "./ThemeSwitcher";
import DesktopHamburgerMenu from "./DesktopHamburgerMenu";
import DesktopNavInfo from "./DesktopNavInfo";
export default function Navbar({ darkMode, toggleDarkMode }) {

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Navegación principal">
        {/* Logo / Brand */}
        <div className={styles.logoContainer}>
          <Link href="/" aria-label="Ecometalix - Inicio" className={styles.logoLink}>
            <Image
              src="/images/logoecometalix.png"
              alt="Ecometalix Logo"
              width={150}
              height={50}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        {/* Center Group: Location/Time/Status Info */}
        <div className={styles.centerGroup}>
          <DesktopNavInfo />
        </div>

        {/* Right Group: Theme Switcher + Hamburger Menu */}
        <div className={styles.rightGroup}>
          <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <DesktopHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
