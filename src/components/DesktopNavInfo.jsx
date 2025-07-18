// src/components/DesktopNavInfo.jsx
import React from "react";
import Clock from "./Clock";
import styles from "./DesktopNavInfo.module.css";

export default function DesktopNavInfo() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoRow}>
        <Clock variant="minimal" />
      </div>
    </div>
  );
} 