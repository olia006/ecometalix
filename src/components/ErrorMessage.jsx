import React from "react";
import styles from "./ErrorMessage.module.css";
import { AlertTriangle } from "lucide-react";

export default function ErrorMessage({ message, children }) {
  return (
    <div className={styles.errorMessage} role="alert">
      <span className={styles.icon}><AlertTriangle /></span>
      <span className={styles.text}>{message}</span>
      {children && <div className={styles.extra}>{children}</div>}
    </div>
  );
}
