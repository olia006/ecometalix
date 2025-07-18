"use client";

import React from "react";
import styles from "./ErrorBoundary.module.css";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Optional: log to a monitoring service here
    // Example: Sentry.captureException(error, { extra: info });
    console.error("ErrorBoundary caught:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundaryContainer} role="alert">
          <h2 className={styles.errorTitle}>¡Vaya! Algo salió mal.</h2>
          <div className={styles.errorMessage}>
            Por favor, recarga la página o&nbsp;
            <a
              href="https://wa.me/56940244042"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
            >
              contáctanos por WhatsApp
            </a>
            &nbsp;si el problema persiste.
          </div>
          <button
            className={styles.errorButton}
            onClick={this.handleReload}
            aria-label="Recargar la página"
          >
            Recargar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
