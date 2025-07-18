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
  lastUpdated = "8 de julio 2025",
  isEnglish = false
}) {
  return (
    <Background variant="hero" image="/images/homehero.jpg">
      <div className={heroStyles.heroContainer}>
        <div className={heroStyles.glassContainer}>
          <div className={heroStyles.content}>
            <h1 className={heroStyles.heading}>
              {isEnglish ? (
                <>Sell your scrap metal and receive <span className={heroStyles.highlight}>immediate payment</span></>
              ) : (
                <>Vende tu chatarra y recibe <span className={heroStyles.highlight}>pago inmediato</span></>
              )}
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
                  <WhatsAppIcon /> {isEnglish ? "Get Quote via WhatsApp" : "Cotizar por WhatsApp"}
                </SecondaryButton>
              </a>
              <a
                href="#precios"
                className={heroStyles.readMoreLink}
                aria-label="Ver precios actualizados"
              >
{isEnglish ? "View prices" : "Ver precios"} <ArrowRight size={14} />
              </a>
            </div>
            
            {/* Bottom information unit */}
            <div className={heroStyles.bottomInfo}>
              <div className={heroStyles.lastUpdated}>
                <small>{isEnglish ? `Prices updated: ${lastUpdated}` : `Precios actualizados: ${lastUpdated}`}</small>
              </div>
              <div className={heroStyles.workingHours}>
                <small>{isEnglish ? "Every day 8:30-20:00 • No breaks" : "Todos los días 8:30-20:00 • Sin descanso"}</small>
              </div>
              <div className={heroStyles.processLink}>
                <a
                  href={isEnglish ? "/en/how-it-works" : "/como-funciona"}
                  className={heroStyles.learnProcessLink}
                  aria-label={isEnglish ? "Learn our process" : "Conoce nuestro proceso"}
                >
                  {isEnglish ? "Learn our process" : "Conoce nuestro proceso"} <ArrowRight size={12} />
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
