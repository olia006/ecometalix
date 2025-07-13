import React from "react";
import styles from "./ErrorMessage.module.css";
// You can use a little SVG, Emoji, or a react-icon for ⚠️
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorMessage({ message, children }) {
  return (
    <div className={styles.errorMessage} role="alert">
      <span className={styles.icon}><FaExclamationTriangle /></span>
      <span className={styles.text}>{message}</span>
      {children && <div className={styles.extra}>{children}</div>}
    </div>
  );
}
