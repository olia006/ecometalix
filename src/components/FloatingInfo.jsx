import React from "react";
import Clock from "./Clock";
import styles from "./FloatingInfo.module.css";

export default function FloatingInfo() {
  return (
    <div className={styles.floatingContainer}>
      {/* Brutalism Info Panel with Logo and Clock */}
      <div className={styles.infoPanel}>
        <div className={styles.infoRow}>
          <div className={styles.logoContainer}>
            <img
              src="/images/logoecometalix.png"
              alt="Ecometalix Logo"
              className={styles.logo}
            />
          </div>
          <Clock variant="minimal" />
        </div>
      </div>
    </div>
  );
} 