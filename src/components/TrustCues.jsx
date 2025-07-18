// src/components/TrustCues.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./TrustCues.module.css";
import { Clock, MapPin, DollarSign, Scale } from "lucide-react";

const trustCuesData = [
  {
    icon: <Clock className={styles.icon} aria-hidden="true" />,
    text: "10+ años de experiencia"
  },
  {
    icon: <MapPin className={styles.icon} aria-hidden="true" />,
    text: "3 años en Chile"
  },
  {
    icon: <DollarSign className={styles.icon} aria-hidden="true" />,
    text: "97% de pagos al instante"
  },
  {
    icon: <Scale className={styles.icon} aria-hidden="true" />,
    text: "Balanza certificada 80t/18m"
  }
];

export default function TrustCues({ className = "", style = {} }) {
  return (
    <section
      className={`${styles.trustCues} ${className}`}
      style={style}
      aria-label="Indicadores de confianza de Ecometalix"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className={styles.runningLine}>
        <div className={styles.runningContent}>
          {/* First set */}
          {trustCuesData.map((cue, index) => (
            <div key={`set1-${index}`} className={styles.badge}>
              {cue.icon}
              <span className={styles.badgeText}>{cue.text}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {trustCuesData.map((cue, index) => (
            <div key={`set2-${index}`} className={styles.badge}>
              {cue.icon}
              <span className={styles.badgeText}>{cue.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible content for screen readers */}
      <div className={styles.srOnly}>
        <h3>Indicadores de confianza de Ecometalix:</h3>
        <ul>
          {trustCuesData.map((cue, index) => (
            <li key={index}>{cue.text}</li>
          ))}
        </ul>
      </div>

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EcoMetalix",
          "foundingDate": "2014",
          "yearsInOperation": "3"
        })}
      </script>
    </section>
  );
}

TrustCues.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
