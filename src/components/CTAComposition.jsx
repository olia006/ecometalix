import React from "react";
import styles from "./CTAComposition.module.css";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
// import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"; // Optional icons

export default function CTAComposition({
  title = "¿Listo para vender tu chatarra?",
  description = "Pago inmediato y atención personalizada. Escríbenos por WhatsApp y recibe tu cotización sin compromiso.",
  ctaText = "Vender ahora por WhatsApp",
  ctaHref = "https://wa.me/56940244042?text=Hola,%20quiero%20cotizar%20mi%20chatarra",
  secondaryText = "Ver cómo llegar",
  secondaryHref = "/mapa",
  trustCue = "Más de 200 clientes satisfechos"
}) {
  return (
    <section className={styles.ctaSection}>
      {/* Optional: Icon or image here */}
      <h2 className={styles.ctaTitle}>{title}</h2>
      <p className={styles.ctaDescription}>{description}</p>
      <div className={styles.ctaButtons}>
        <PrimaryButton href={ctaHref} size="lg">
          {ctaText}
        </PrimaryButton>
        <SecondaryButton href={secondaryHref} size="lg">
          {secondaryText}
        </SecondaryButton>
      </div>
      {/* Trust cue */}
      {trustCue && <div className={styles.trustCue}>{trustCue}</div>}
    </section>
  );
}
