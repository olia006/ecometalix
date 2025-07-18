// src/components/home/StatsSection.jsx
import React from "react";
import styles from "./StatsSection.module.css";
import { CheckCircle } from "lucide-react";
import { CONTACT_URLS, BUSINESS_INFO } from "../../config/constants";

const getStatsData = (isEnglish) => [
  {
    icon: <CheckCircle className={styles.checkIcon} aria-hidden="true" />,
    text: isEnglish ? "Personalized service, no bureaucracy" : "Atención personalizada, sin burocracia",
    schemaProperty: "serviceType"
  },
  {
    icon: <CheckCircle className={styles.checkIcon} aria-hidden="true" />,
    text: isEnglish ? "100% real Google reviews" : "Opiniones 100% reales en Google",
    schemaProperty: "aggregateRating",
    link: "https://www.google.com/maps/place/EcoMetalix/@-33.3120766,-70.7984129,17z/data=!4m8!3m7!1s0x9662bf78657b6e2f:0x692dfae6ce3b688d!8m2!3d-33.3120766!4d-70.798438!9m1!1b1!16s%2Fg%2F11q3j6y6yt?hl=es&lsig=AB86z5WqhT9gKgR0R5oOJMC_W0dj#lrd=0x9662bf78657b6e2f:0x692dfae6ce3b688d,1"
  },
  {
    icon: <CheckCircle className={styles.checkIcon} aria-hidden="true" />,
    text: isEnglish ? "quote via whatsapp" : "cotizar por whatsapp",
    schemaProperty: "contactPoint",
    link: CONTACT_URLS.whatsapp
  }
];

export default function StatsSection({ isEnglish = false }) {
  const statsData = getStatsData(isEnglish);
  return (
    <section 
      className={styles.statsSection} 
      aria-label={isEnglish ? "Ecometalix service statistics" : "Estadísticas de servicio de Ecometalix"}
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
              aria-label={isEnglish ? `Service statistic: ${stat.text}` : `Estadística de servicio: ${stat.text}`}
            >
              {stat.icon}
              <span className={styles.badgeText}>
                {stat.link ? (
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.badgeLink}
                    aria-label={isEnglish ? `${stat.text} - open in new window` : `${stat.text} - abrir en nueva ventana`}
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
          <h3>{isEnglish ? "Ecometalix service statistics:" : "Estadísticas de servicio de Ecometalix:"}</h3>
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
              "telephone": `+${BUSINESS_INFO.phone}`,
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
