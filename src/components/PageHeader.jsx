import React from "react";
import PropTypes from "prop-types";
import styles from "./PageHeader.module.css";

export default function PageHeader({ 
  title, 
  subtitle, 
  lastUpdated,
  variant = "default",
  className = "",
  backgroundImage
}) {
  const headerStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  const headerClasses = `${styles.pageHeader} ${styles[`variant--${variant}`]} ${backgroundImage ? styles.withBackground : ''} ${className}`;

  return (
    <header className={headerClasses} style={headerStyle}>
      {backgroundImage && <div className={styles.overlay} />}
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
  className: PropTypes.string,
  backgroundImage: PropTypes.string
}; 