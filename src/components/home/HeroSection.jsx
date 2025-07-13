// src/components/HeroSection.jsx
import React from "react";
import PropTypes from "prop-types";
import heroStyles from "./HeroSection.module.css";
import Background from "../Background";
import { FaWhatsapp } from "react-icons/fa";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import Clock from "../Clock";
import heroImage from "../../assets/images/homehero.jpg";

export default function HeroSection({ 
  subtitle = "Compra y reciclaje de chatarra y metales en Santiago — pesaje certificado, atención personalizada y cotización por WhatsApp.",
  lastUpdated = "8 de julio 2025" 
}) {
  return (
    <Background variant="hero" image={heroImage}>
      <div className={heroStyles.heroContainer}>
        <div className={heroStyles.glassContainer}>
          <div className={heroStyles.content}>
            <h1 className={heroStyles.heading}>
              Vende tu chatarra y recibe <span className={heroStyles.highlight}>pago inmediato</span>
            </h1>
            <p className={heroStyles.subheading}>
              {subtitle}
            </p>

            <div className={heroStyles.ctaGroup}>
              <PrimaryButton
                href="https://wa.me/56912345678"
                size="lg"
                aria-label="Cotizar por WhatsApp"
              >
                <FaWhatsapp /> Cotizar por WhatsApp
              </PrimaryButton>
              <SecondaryButton
                href="/precios"
                size="lg"
                aria-label="Ver precios actualizados"
              >
                Ver precios
              </SecondaryButton>
            </div>
            <div className={heroStyles.lastUpdated}>
              <small>Precios actualizados: {lastUpdated}</small>
              <Clock variant="minimal" />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

HeroSection.propTypes = {
  subtitle: PropTypes.string,
  lastUpdated: PropTypes.string,
};
