import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Brand + Address */}
      <div className={styles.brandRow}>
        <span className={styles.brand}>Ecometalix Spa</span>
        <span className={styles.location}>
          <MapPin aria-hidden /> Santiago, Chile
        </span>
      </div>

      {/* Contact & Social */}
      <div className={styles.contactRow}>
        <SocialLinks className={styles.socialLinks} maxCount={4} />
        <a
          href="tel:+56940244042"
          className={styles.phone}
          aria-label="Llamar a Ecometalix"
        >
          +56 9 4024 4042
        </a>
      </div>

      {/* Nav links */}
      <nav className={styles.footerNav} aria-label="Pie de página">
        <Link href="/">Inicio</Link>
        <Link href="/por-que-nosotros">Por qué Nosotros</Link>
        <Link href="/precios">Precios</Link>
        <Link href="/materiales">Materiales</Link>
        <Link href="/faq">FAQ</Link>
        <a href="/#mapa">Ubicación</a>
      </nav>

      {/* Legal */}
      <div className={styles.legalRow}>
        <span>
          © {new Date().getFullYear()} Ecometalix Spa. Todos los derechos reservados.
        </span>
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          Política de Privacidad
        </a>
        <a href="/terms" target="_blank" rel="noopener noreferrer">
          Términos y Condiciones
        </a>
        {/* <span>RUT: 12.345.678-9</span> */}
        {/* <span>Designed by inui.studio</span> */}
      </div>
      {/* Language switcher (optional) */}
      <div className={styles.langSwitch}>
        <Link href="/" aria-label="Español">ES</Link> | <Link href="/en" aria-label="English">EN</Link>
      </div>
    </footer>
  );
}
