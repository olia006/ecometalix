"use client";

// src/components/SectionHeader.tsx
import React from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Props:
 * - children: the header/title text (required)
 * - icon: optional React icon component (e.g. <FaStar />)
 * - className: optional, extra classes
 * - as: "h2" (default), or any heading level ("h3", "h4", etc)
 */
export default function SectionHeader({ 
  children, 
  icon = null, 
  className = "", 
  as = "h2" 
}: SectionHeaderProps) {
  const HeadingTag = as;
  return (
    <HeadingTag className={`${styles.header} ${className}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </HeadingTag>
  );
} 