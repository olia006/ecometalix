import React from "react";
import Image from "next/image";
import Clock from "./Clock";
import styles from "./FloatingInfo.module.css";

export default function FloatingInfo() {
  return (
    <div className={styles.floatingContainer}>
      {/* Brutalism Info Panel with Logo and Clock */}
      <div className={styles.infoPanel}>
        <div className={styles.infoRow}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/logoecometalix.png"
              alt="Ecometalix Logo"
              width={120}
              height={40}
              className={styles.logo}
              priority
            />
          </div>
          <Clock variant="minimal" />
        </div>
      </div>
    </div>
  );
} 