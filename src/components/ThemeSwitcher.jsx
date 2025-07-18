// src/components/ThemeSwitcher.jsx
import React from "react";
import PropTypes from "prop-types";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher({ darkMode, toggleDarkMode }) {

  return (
    <button 
      className={styles.theme__icon}
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <Sun className={styles.sunIcon} size={24} />
      <Moon className={styles.moonIcon} size={24} />
    </button>
  );
}

ThemeSwitcher.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
