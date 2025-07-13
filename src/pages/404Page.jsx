import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Seo from "../components/seo/Seo";
import styles from "./404Page.module.css";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Página no encontrada | Ecometalix Spa"
        description="La página que buscas no existe. Vuelve al inicio o contáctanos para ayudarte."
        canonical="/404"
      />
      <main className={styles.notFoundMain} style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <FaExclamationTriangle
          className={styles.icon}
          size={56}
          color="var(--color-accent)"
          aria-label="Página no encontrada"
          style={{ marginBottom: "1.5rem" }}
        />
        <h1 className={styles.heading} style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          404 – Página no encontrada
        </h1>
        <p className={styles.subheading} style={{ color: "var(--color-muted)", marginBottom: "2rem", fontSize: "1.1rem" }}>
          Lo sentimos, la página que buscas no existe o fue movida.<br />
          ¿Quieres volver al inicio o contactarnos para ayuda?
        </p>
        <div className={styles.ctaGroup} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            to="/"
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
            to="/contacto"
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
      </main>
    </>
  );
}
