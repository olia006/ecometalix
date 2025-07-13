// src/components/GhostButton.jsx
import React from "react";
import styles from "./GhostButton.module.css";
import { FaArrowRight } from "react-icons/fa"; // You can use any icon

export default function GhostButton({ children, className = "", showArrow = true, ...props }) {
  return (
    <button
      className={styles.ghostBtn + (className ? " " + className : "")}
      type="button"
      {...props}
    >
      <span className={styles.btnText}>
        {children}
        {showArrow && (
          <FaArrowRight className={styles.arrow} aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
