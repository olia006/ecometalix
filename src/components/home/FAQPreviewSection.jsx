// src/components/home/FAQPreviewSection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import Background from "../Background";
import SectionHeader from "../SectionHeader";
import FAQAccordion from "../FAQAccordion";
import styles from "./FAQPreviewSection.module.css";

// Most important FAQs shown on homepage preview
const defaultFaqs = [
  {
    question: "¿Cuándo y cómo me pagan por mi chatarra?",
    answer: "El pago es inmediato el mismo día que entregas tu chatarra. Puedes elegir efectivo al instante o transferencia bancaria después del pesaje certificado con nuestra balanza oficial. Sin trámites burocráticos ni tiempos de espera.",
  },
  {
    question: "¿La balanza es certificada?",
    answer: "Sí, nuestra balanza cuenta con certificación oficial del Instituto Nacional de Normalización (INN) y es inspeccionada regularmente. Cumple con todas las normativas chilenas para pesaje comercial y puedes presenciar todo el proceso.",
  },
  {
    question: "¿Atienden fines de semana?",
    answer: "Trabajamos los 7 días de la semana de 8:00 AM a 8:00 PM, incluyendo sábados, domingos y feriados. Somos uno de los pocos centros de reciclaje que opera sin descanso para tu comodidad.",
  },
];

// Convert to the format expected by FAQAccordion
const faqCategories = [
  {
    faqs: defaultFaqs // No title for preview section
  }
];

export default function FAQPreviewSection({ faqs = defaultFaqs }) {
  // Update the categories if custom faqs are provided
  const categories = faqs === defaultFaqs ? faqCategories : [{ faqs }];
  
  return (
    <Background>
      <section
        className={styles.faqPreviewSection}
        aria-labelledby="faq-heading"
      >
        <SectionHeader icon={<FaQuestionCircle />}>
          ¿Dudas? Te respondemos:
        </SectionHeader>

        <FAQAccordion 
          categories={categories}
          variant="preview"
          showOneAtTime={true}
        />

        <div className={styles.ctaWrap}>
          <Link to="/faq" className={styles.ctaLink}>
            Ver todas las preguntas frecuentes
          </Link>
        </div>
      </section>
    </Background>
  );
}

FAQPreviewSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  )
};
