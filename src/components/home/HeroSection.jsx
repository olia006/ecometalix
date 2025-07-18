// src/components/HeroSection.jsx
import React from "react";
import PropTypes from "prop-types";
import heroStyles from "./HeroSection.module.css";
import Background from "../Background";
import WhatsAppIcon from "../WhatsAppIcon";
import SecondaryButton from "../SecondaryButton";
import { ArrowRight } from "lucide-react";

import { CONTACT_URLS } from "../../config/constants";

export default function HeroSection({ 
  subtitle = "Compra y reciclaje de chatarra y metales en Santiago — pesaje certificado, atención personalizada y cotización por WhatsApp.",
  lastUpdated = "8 de julio 2025" 
}) {
  return (
    <Background variant="hero" image="/images/homehero.jpg">
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
              <a 
                href={CONTACT_URLS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cotizar por WhatsApp"
                className={`${heroStyles.whatsappLink} ${heroStyles.buttonLink}`}
              >
                <SecondaryButton>
                  <WhatsAppIcon /> Cotizar por WhatsApp
                </SecondaryButton>
              </a>
              <a
                href="#precios"
                className={heroStyles.readMoreLink}
                aria-label="Ver precios actualizados"
              >
                Ver precios <ArrowRight size={14} />
              </a>
            </div>
            
            {/* Bottom information unit */}
            <div className={heroStyles.bottomInfo}>
              <div className={heroStyles.lastUpdated}>
                <small>Precios actualizados: {lastUpdated}</small>
              </div>
              <div className={heroStyles.workingHours}>
                <small>Todos los días 8:30-20:00 • Sin descanso</small>
              </div>
              <div className={heroStyles.processLink}>
                <a
                  href="/como-funciona"
                  className={heroStyles.learnProcessLink}
                  aria-label="Conoce nuestro proceso"
                >
                  Conoce nuestro proceso <ArrowRight size={12} />
                </a>
              </div>
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
