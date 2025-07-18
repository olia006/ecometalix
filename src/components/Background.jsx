// src/components/Background.jsx
import React from "react";
import styles from "./Background.module.css";

/**
 * Background component for consistent section backgrounds across the site
 * @param {string} variant - Background variant: "default", "hero", "page", "container", "gradient", "glass"
 * @param {string} gradientType - Gradient type when variant is "gradient": "primary", "primary-soft", "secondary", "accent", "neutral"
 * @param {string} glassType - Glass type when variant is "glass": "light", "medium", "heavy", "hero"
 * @param {string} image - Background image path
 * @param {ReactNode} children
 */
const Background = React.forwardRef(({ 
  variant = "default", 
  gradientType = "primary", 
  glassType = "medium", 
  image, 
  className = "", 
  children 
}, ref) => {
  // Determine background class based on variant
  const getBackgroundClass = () => {
    switch (variant) {
      case "hero":
        return `${styles.background} ${styles.hero}`;
      case "page":
        return `${styles.background} ${styles.page}`;
      case "container":
        return `${styles.background} ${styles.container}`;
      case "gradient":
        return `${styles.background} ${styles.gradient} ${styles[`gradient--${gradientType}`]}`;
      case "glass":
        return `${styles.background} ${styles.glass} ${styles[`glass--${glassType}`]}`;
      default:
        return styles.background;
    }
  };

  const backgroundClass = getBackgroundClass();

  const backgroundStyle = image ? {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section 
      ref={ref}
      className={`${backgroundClass} ${className}`}
      style={backgroundStyle}
    >
      {image && <div className={styles.overlay} />}
      {children}
    </section>
  );
});

Background.displayName = 'Background';

export default Background;
