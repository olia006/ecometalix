import React from "react";
import styles from "./CTAComposition.module.css";
import SecondaryButton from "./SecondaryButton";

export default function CTAComposition({
  title = "¿Listo para vender tu chatarra?",
  description = "Pago inmediato y atención personalizada. Escríbenos por WhatsApp y recibe tu cotización sin compromiso.",
  ctaText = "Vender ahora por WhatsApp",
  ctaHref = "https://wa.me/56940244042?text=Hola,%20quiero%20cotizar%20mi%20chatarra",
  secondaryText = "Ver cómo llegar",
  secondaryHref = "/#mapa",
  trustCue = "Más de 200 clientes satisfechos"
}) {
  return (
    <section className={styles.ctaSection}>
      {/* Optional: Icon or image here */}
      <h2 className={styles.ctaTitle}>{title}</h2>
      <p className={styles.ctaDescription}>{description}</p>
      <div className={styles.ctaButtons}>
        <a 
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonLink}
        >
          <SecondaryButton>
            {ctaText}
          </SecondaryButton>
        </a>
        <a href={secondaryHref} className={styles.buttonLink}>
          <SecondaryButton>
            {secondaryText}
          </SecondaryButton>
        </a>
      </div>
      {/* Trust cue */}
      {trustCue && <div className={styles.trustCue}>{trustCue}</div>}
    </section>
  );
}
