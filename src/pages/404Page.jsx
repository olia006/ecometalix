import React from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
// SEO now handled by App Router metadata
import styles from "./404Page.module.css";

export default function NotFoundPage() {
  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/not-found.tsx */}
      
      <main className={`${styles.notFoundMain} not-found-main-container`}>
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <AlertTriangle
              className={`${styles.icon} not-found-icon`}
              size={56}
              color="var(--color-accent)"
              aria-label="Página no encontrada"
            />
            <h1 className={`${styles.heading} not-found-heading`}>
              404 – Página no encontrada
            </h1>
            <p className={`${styles.subheading} not-found-subheading`}>
              Lo sentimos, la página que buscas no existe o fue movida.<br />
              ¿Quieres volver al inicio o contactarnos para ayuda?
            </p>
            <div className={`${styles.ctaGroup} not-found-cta-group`}>
              <Link
                href="/"
                className={styles.primaryBtn}
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-white)",
                  padding: "0.75rem 2rem",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 600,
                  textDecoration: "none"
                }}
              >
                Volver al inicio
              </Link>
              <Link
                href="/"
                className={styles.secondaryBtn}
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-text)",
                  padding: "0.75rem 2rem",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 600,
                  textDecoration: "none"
                }}
              >
                Contactar soporte
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
