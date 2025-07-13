// src/components/home/StatsSection.jsx
import React from "react";
import styles from "./StatsSection.module.css";
import { FaCheckCircle } from "react-icons/fa";

const statsData = [
  {
    icon: <FaCheckCircle className={styles.checkIcon} aria-hidden="true" />,
    text: "Atención personalizada, sin burocracia",
    schemaProperty: "serviceType"
  },
  {
    icon: <FaCheckCircle className={styles.checkIcon} aria-hidden="true" />,
    text: "Opiniones 100% reales en Google",
    schemaProperty: "aggregateRating",
    link: "https://www.google.com/maps/place/EcoMetalix/"
  },
  {
    icon: <FaCheckCircle className={styles.checkIcon} aria-hidden="true" />,
    text: "cotizar por whatsapp",
    schemaProperty: "contactPoint",
    link: "https://wa.me/56912345678"
  }
];

export default function StatsSection() {
  return (
    <section 
      className={styles.statsSection} 
      aria-label="Estadísticas de servicio de Ecometalix"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
        <div className={styles.statsBadges}>
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={styles.statBadge}
              itemProp={stat.schemaProperty}
              role="group"
              aria-label={`Estadística de servicio: ${stat.text}`}
            >
              {stat.icon}
              <span className={styles.badgeText}>
                {stat.link ? (
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.badgeLink}
                    aria-label={`${stat.text} - abrir en nueva ventana`}
                  >
                    {stat.text}
                  </a>
                ) : (
                  stat.text
                )}
              </span>
            </div>
          ))}
        </div>
        
        {/* Accessible content for screen readers */}
        <div className={styles.srOnly}>
          <h3>Estadísticas de servicio de Ecometalix:</h3>
          <ul>
            {statsData.map((stat, index) => (
              <li key={index}>{stat.text}</li>
            ))}
          </ul>
        </div>
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "EcoMetalix",
            "serviceType": "Scrap Metal Buying and Selling",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+56912345678",
              "contactType": "customer service",
              "availableLanguage": "Spanish"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "ratingCount": "100+",
              "reviewCount": "100+"
            }
          })}
        </script>
      </section>
  );
}
