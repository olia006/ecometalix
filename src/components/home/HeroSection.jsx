"use client";

// src/components/home/HeroSection.jsx
import React from "react";
import PropTypes from "prop-types";
import heroStyles from "./HeroSection.module.css";
import Background from "../Background";
import WhatsAppIcon from "../WhatsAppIcon";
import SecondaryButton from "../SecondaryButton";

import { ArrowRight, Clock } from "lucide-react";

import { CONTACT_URLS } from "../../config/constants";

export default function HeroSection({ 
  subtitle = "Compra y reciclaje de chatarra y metales en Santiago — pesaje certificado, atención personalizada y cotización por WhatsApp.",
  lastUpdated,
  isEnglish = false
}) {
  
  // Analytics tracking function
  const trackHeroInteraction = (action, intent) => {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'hero_interaction', {
        action_type: action,
        user_intent: intent,
        section: 'hero',
        timestamp: Date.now(),
        page_title: document.title,
        language: isEnglish ? 'en' : 'es'
      });
    }
    
    // Facebook Pixel tracking (if available)
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'HeroInteraction', {
        action: action,
        intent: intent,
        language: isEnglish ? 'en' : 'es'
      });
    }
    
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Hero Interaction:', { action, intent, language: isEnglish ? 'en' : 'es' });
    }
  };

  // WhatsApp message customization based on language
  const whatsappMessage = isEnglish 
    ? "Hello, I'd like to get a quote for my scrap metal"
    : "Hola, quisiera cotizar mi chatarra";

  // Structured data for enhanced SEO
  return (
    <>
      
      <Background variant="hero" image="/images/homehero.webp">
        {/* Semantic HTML with structured data for SEO */}
        <section 
          className={heroStyles.hero}
          role="banner"
          aria-label={isEnglish ? "Ecometalix hero section" : "Sección principal de Ecometalix"}
        >
          <div className={heroStyles.heroContainer}>
            
            {/* Hero Content */}
            <div className={heroStyles.heroContent}>
              <header className={heroStyles.heroHeader}>
                
                {/* Working Hours - eyebrow above headings */}
                <div className={heroStyles.workingHours}>
                  <Clock className={heroStyles.supportingIcon} aria-hidden="true" size={16} />
                  <span>{isEnglish ? "Every day 8:30-20:00 • No breaks" : "Todos los días 8:30-20:00 • Sin descanso"}</span>
                </div>
                
                {/* Value Proposition */}
                <h1 className={`${heroStyles.heroHeading} hero-heading hero-heading--light`}>
                  {isEnglish ? (
                    <>
                      <span className="sr-only">Ecometalix: </span>
                      Sell your scrap metal and receive <span className="hero-highlight">immediate payment</span>
                    </>
                  ) : (
                    <>
                      <span className="sr-only">Ecometalix: </span>
                      Vende tu chatarra y recibe <span className="hero-highlight">pago inmediato</span>
                    </>
                  )}
                </h1>
                
                {/* Subheading */}
                <p className={heroStyles.subheading}>
                  {isEnglish 
                    ? "Scrap metal buying and recycling in Santiago — certified scale, WhatsApp quotes."
                    : "Compra y reciclaje de chatarra y metales en Santiago — pesaje certificado, cotización por WhatsApp."
                  }
                </p>
                
                {/* Dual CTAs with Proper Hierarchy */}
                <div className={heroStyles.ctaGroup} role="group" aria-label={isEnglish ? "Contact actions" : "Acciones de contacto"}>
                  
                  {/* Primary CTA - High Intent Users */}
                  <a 
                    href={CONTACT_URLS.whatsappWithText(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${heroStyles.ctaPrimary} ${heroStyles.buttonLink}`}
                    onClick={() => trackHeroInteraction('whatsapp_click', 'high')}
                    aria-label={isEnglish ? "Contact via WhatsApp for immediate quote" : "Contactar por WhatsApp para cotización inmediata"}
                  >
                    <SecondaryButton className={heroStyles.primaryButton}>
                      <WhatsAppIcon aria-hidden="true" />
                      <span className={heroStyles.buttonText}>
                        <strong>{isEnglish ? "Get Quote Now" : "Cotizar Ahora"}</strong>
                        <small>{isEnglish ? "Immediate response" : "Respuesta inmediata"}</small>
                      </span>
                    </SecondaryButton>
                  </a>
                  

                </div>
                
              </header>
              
              {/* Supporting Information - Always Visible */}
              <div className={heroStyles.supportingInfo}>
                <div className={heroStyles.supportingContent}>
                  <a
                    href="https://www.google.com/maps/place/EcoMetalix/@-33.3120766,-70.7984129,17z/data=!4m8!3m7!1s0x9662bf78657b6e2f:0x692dfae6ce3b688d!8m2!3d-33.3120766!4d-70.798438!9m1!1b1!16s%2Fg%2F11q3j6y6yt?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={heroStyles.processLink}
                    onClick={() => trackHeroInteraction('process_click', 'low')}
                    aria-label={isEnglish ? "View our location on Google Maps" : "Ver nuestra ubicación en Google Maps"}
                  >
                    <img src="/icons/google-map-icon.svg" alt="" className={heroStyles.processIcon} aria-hidden="true" />
                    {isEnglish ? "View our location" : "Ver nuestra ubicación"}
                  </a>
                </div>
              </div>
              
            </div>


            
          </div>
        </section>
      </Background>
    </>
  );
}

HeroSection.propTypes = {
  subtitle: PropTypes.string,
  lastUpdated: PropTypes.string,
  isEnglish: PropTypes.bool
};
