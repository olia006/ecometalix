"use client";

import React, { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

const COOKIE_KEY = "cookie_consent";

export default function CookieBanner() {
  // State for banner visibility
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    // Optionally, initialize analytics or any scripts here
  };

  if (!visible) return null;

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className={styles.content}>
        {/* Cookie usage message with link to legal policy */}
        <span>
          Utilizamos cookies para mejorar tu experiencia y analizar el tráfico. Al continuar, aceptas nuestra{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>.
        </span>
      </div>
      <button
        className={styles.acceptBtn}
        onClick={handleAccept}
        aria-label="Aceptar cookies"
      >
        {/* Accept button */}
        Aceptar
      </button>
    </div>
  );
}
