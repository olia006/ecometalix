// src/components/SectionHeader.jsx
import React from "react";
import styles from "./SectionHeader.module.css";

/**
 * Props:
 * - children: the header/title text (required)
 * - icon: optional React icon component (e.g. <FaStar />)
 * - className: optional, extra classes
 * - as: "h2" (default), or any heading level ("h3", "h4", etc)
 */
export default function SectionHeader({ children, icon = null, className = "", as = "h2" }) {
  const HeadingTag = as;
  return (
    <HeadingTag className={`${styles.header} ${className}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </HeadingTag>
  );
}
