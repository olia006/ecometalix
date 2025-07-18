import React from "react";
import PropTypes from "prop-types";
import styles from "./FloatingCTA.module.css";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingCTA({
  whatsapp = "56940244042",
  message = "Cotiza por WhatsApp",
  label = "Contáctanos por WhatsApp",
  extra = null, // You can pass a second CTA (like phone) if needed
}) {
  // WhatsApp link builder
  const waLink = `https://wa.me/${whatsapp}`;

  return (
    <div className={styles.floatingCtaWrapper} aria-label="Acceso rápido a contacto">
      <a
        href={waLink}
        className={styles.floatingCtaButton}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <WhatsAppIcon className={styles.icon} size={28} aria-hidden="true" />
        <span className={styles.text}>{message}</span>
      </a>
      {extra && <div className={styles.extra}>{extra}</div>}
    </div>
  );
}

FloatingCTA.propTypes = {
  whatsapp: PropTypes.string,
  message: PropTypes.string,
  label: PropTypes.string,
  extra: PropTypes.node,
};
