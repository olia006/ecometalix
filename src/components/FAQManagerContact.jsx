import React from "react";
import PropTypes from "prop-types";
import styles from "./FAQManagerContact.module.css";
import WhatsAppIcon from "./WhatsAppIcon";
import SecondaryButton from "./SecondaryButton";
import { Phone, Mail } from "lucide-react";
import { CONTACT_URLS, WHATSAPP_MESSAGES, BUSINESS_INFO } from "../config/constants";

export default function FAQManagerContact({ 
  isEnglish = false,
  variant = "default" // "default" | "compact"
}) {
  const content = isEnglish ? {
    title: "Can't find your question? Need help with something specific?",
    description: "Our team is ready to help you with any questions about scrap metal sales, prices, processes, requirements, or anything else you need to know.",
    whatsappText: "Contact Manager",
    phoneText: "Call us",
    emailText: "Send email",
    whatsappMessage: "Hello, I have a question that's not in the FAQ",
    availability: "Every day 8:30-20:00 • No breaks"
  } : {
    title: "¿No encuentras tu pregunta? ¿Necesitas ayuda con algo específico?",
    description: "Nuestro equipo está listo para ayudarte con cualquier consulta sobre venta de chatarra, precios, procesos, requisitos o cualquier cosa que necesites saber.",
    whatsappText: "Contactar Encargado",
    phoneText: "Llamar ahora",
    emailText: "Enviar email",
    whatsappMessage: "Hola, tengo una consulta que no está en las preguntas frecuentes",
    availability: "Todos los días 8:30-20:00 • Sin descanso"
  };

  return (
    <section className={`${styles.faqContactSection} ${styles[variant]}`} aria-labelledby="faq-contact-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 id="faq-contact-title" className={styles.title}>
            {content.title}
          </h3>
          <p className={styles.description}>
            {content.description}
          </p>
          
          <div className={styles.contactOptions} role="group" aria-label={isEnglish ? "Contact options" : "Opciones de contacto"}>
            {/* Primary CTA: WhatsApp using SecondaryButton */}
            <div className={styles.whatsappSection}>
              <a
                href={CONTACT_URLS.whatsappWithText(content.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLink}
                aria-label={isEnglish ? "Contact manager via WhatsApp" : "Contactar encargado por WhatsApp"}
              >
                <SecondaryButton>
                  <WhatsAppIcon aria-hidden="true" />
                  {content.whatsappText}
                </SecondaryButton>
              </a>
            </div>
            
            {/* Secondary CTAs using linkBtn style like MapSection */}
            <div className={styles.quickLinks}>
              <a
                href={CONTACT_URLS.phone}
                className={styles.linkBtn}
                aria-label={isEnglish ? "Call Ecometalix" : "Llamar a Ecometalix"}
              >
                <Phone size={16} aria-hidden="true" />
                {content.phoneText}
              </a>
              
              <a
                href={CONTACT_URLS.email}
                className={styles.linkBtn}
                aria-label={isEnglish ? "Send email to Ecometalix" : "Enviar email a Ecometalix"}
              >
                <Mail size={16} aria-hidden="true" />
                {content.emailText}
              </a>
            </div>
          </div>
          
          <div className={styles.availability}>
            <span className={styles.availabilityText}>{content.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

FAQManagerContact.propTypes = {
  isEnglish: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "compact"])
}; 