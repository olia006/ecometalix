// src/components/SecondaryButton.jsx
import React from "react";
import styles from "./SecondaryButton.module.css";

export default function SecondaryButton({ children, className = "", ...props }) {
  return (
    <div className={styles.buttonWrap + (className ? " " + className : "")}>
      <button className={styles.btn} {...props}>
        <span className={styles.btnText}>{children}</span>
      </button>
      <div className={styles.buttonShadow}></div>
    </div>
  );
}
