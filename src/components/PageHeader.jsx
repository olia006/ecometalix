import React from "react";
import PropTypes from "prop-types";
import styles from "./PageHeader.module.css";

export default function PageHeader({ 
  title, 
  subtitle, 
  lastUpdated,
  variant = "default",
  className = ""
}) {
  return (
    <header className={`${styles.pageHeader} ${styles[`variant--${variant}`]} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {lastUpdated && (
            <div className={styles.lastUpdated}>
              <span className={styles.lastUpdatedLabel}>Actualizado:</span>
              <time className={styles.lastUpdatedDate}>{lastUpdated}</time>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  lastUpdated: PropTypes.string,
  variant: PropTypes.oneOf(["default", "primary", "secondary", "accent"]),
  className: PropTypes.string
}; 