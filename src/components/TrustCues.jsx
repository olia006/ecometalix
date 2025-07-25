// src/components/TrustCues.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./TrustCues.module.css";
import { Clock, MapPin, DollarSign, Scale } from "lucide-react";

const getTrustCuesData = (isEnglish) => [
  {
    icon: <Clock className={styles.icon} aria-hidden="true" />,
    text: isEnglish ? "10+ years of experience" : "10+ años de experiencia"
  },
  {
    icon: <MapPin className={styles.icon} aria-hidden="true" />,
    text: isEnglish ? "3 years in Chile" : "3 años en Chile"
  },
  {
    icon: <DollarSign className={styles.icon} aria-hidden="true" />,
    text: isEnglish ? "97% instant payments" : "97% de pagos al instante"
  },
  {
    icon: <Scale className={styles.icon} aria-hidden="true" />,
    text: isEnglish ? "Certified scale 80t/18m" : "Balanza certificada 80t/18m"
  }
];

export default function TrustCues({ className = "", style = {}, isEnglish = false }) {
  const trustCuesData = getTrustCuesData(isEnglish);
  
  return (
    <section
      className={`${styles.trustCues} ${className}`}
      style={style}
      aria-label={isEnglish ? "Ecometalix trust indicators" : "Indicadores de confianza de Ecometalix"}
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
        <h2>{isEnglish ? "Ecometalix trust indicators:" : "Indicadores de confianza de Ecometalix:"}</h2>
        <ul>
          {trustCuesData.map((cue, index) => (
            <li key={index}>{cue.text}</li>
          ))}
        </ul>
      </div>


    </section>
  );
}

TrustCues.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  isEnglish: PropTypes.bool
};
