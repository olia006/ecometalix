"use client";

// src/components/home/HeroSection.jsx
import React from "react";
import PropTypes from "prop-types";
import heroStyles from "./HeroSection.module.css";
import Background from "../Background";
import WhatsAppIcon from "../WhatsAppIcon";
import SecondaryButton from "../SecondaryButton";
import StructuredData from "../seo/StructuredData";
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ecometalix",
    "description": isEnglish 
      ? "Immediate payment for scrap metal in Santiago. Certified scale, extended hours." 
      : "Pago inmediato por chatarra en Santiago. Balanza certificada, horario extendido.",
    "url": isEnglish ? "https://ecometalix.cl/en" : "https://ecometalix.cl",
    "telephone": "+56912345678",
    "openingHours": "Mo-Su 08:30-20:00",
    "areaServed": "Santiago, Chile",
    "serviceType": "Scrap Metal Buying",
    "paymentAccepted": "Cash, Transfer",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <StructuredData jsonLd={structuredData} />
      
      <Background variant="hero" image="/images/homehero.webp">
        {/* Semantic HTML with structured data for SEO */}
        <section 
          className={heroStyles.hero}
          itemScope 
          itemType="https://schema.org/LocalBusiness"
          role="banner"
          aria-label={isEnglish ? "Ecometalix hero section" : "Sección principal de Ecometalix"}
        >
          <div className={heroStyles.heroContainer}>
            
            {/* Hero Content */}
            <div className={heroStyles.heroContent}>
              <header className={heroStyles.heroHeader}>
                
                {/* Value Proposition */}
                <h1 className={`${heroStyles.heroHeading} hero-heading hero-heading--light`} itemProp="name">
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
                    itemProp="url"
                  >
                    <SecondaryButton className={heroStyles.primaryButton}>
                      <WhatsAppIcon aria-hidden="true" />
                      <span className={heroStyles.buttonText}>
                        <strong>{isEnglish ? "Get Quote Now" : "Cotizar Ahora"}</strong>
                        <small>{isEnglish ? "Immediate response" : "Respuesta inmediata"}</small>
                      </span>
                    </SecondaryButton>
                  </a>
                  
                  {/* Secondary CTA - Simple Link */}
                  <a
                    href={isEnglish ? "/en/prices" : "/precios"}
                    className={heroStyles.readMoreLink}
                    onClick={() => trackHeroInteraction('prices_click', 'research')}
                    aria-label={isEnglish ? "View current scrap metal prices" : "Ver precios actuales de chatarra"}
                  >
                    {isEnglish ? "View prices" : "Ver precios"} <ArrowRight size={14} />
                  </a>
                </div>
                
              </header>
              
              {/* Supporting Information - Always Visible */}
              <div className={heroStyles.supportingInfo}>
                <div className={heroStyles.supportingContent}>
                  <div className={heroStyles.workingHours} itemProp="openingHours" content="Mo-Su 08:30-20:00">
                    <Clock className={heroStyles.supportingIcon} aria-hidden="true" size={16} />
                    <span>{isEnglish ? "Every day 8:30-20:00 • No breaks" : "Todos los días 8:30-20:00 • Sin descanso"}</span>
                  </div>
                  <a
                    href={isEnglish ? "/en/how-it-works" : "/como-funciona"}
                    className={heroStyles.processLink}
                    onClick={() => trackHeroInteraction('process_click', 'low')}
                    aria-label={isEnglish ? "Learn our scrap metal buying process" : "Conoce nuestro proceso de compra de chatarra"}
                  >
                    {isEnglish ? "Learn our process" : "Conoce nuestro proceso"}
                    <ArrowRight className={heroStyles.processIcon} aria-hidden="true" size={12} />
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
