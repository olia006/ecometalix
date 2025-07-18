// src/components/home/MapSection.jsx
import React from "react";
import styles from "./MapSection.module.css";
import Background from "../Background";
import SectionHeader from "../SectionHeader";

export default function MapSection({ isEnglish = false }) {
  return (
    <Background>
      <section id={isEnglish ? "map" : "mapa"} className={styles.mapSection} aria-label={isEnglish ? "Google Business Profile" : "Perfil de empresa en Google"}>
        <SectionHeader as="h2">
          {isEnglish ? "Our Company on Google" : "Nuestra Empresa en Google"}
        </SectionHeader>
        
        {/* Official Google Business Profile Widget */}
        <div className={styles.widgetContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5!2d-70.7984129!3d-33.3120766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662bf78657b6e2f%3A0x692dfae6ce3b688d!2sEcoMetalix!5e0!3m2!1ses!2scl!4v1699876543210!5m2!1ses!2scl"
            className={styles.googleWidget}
            title="EcoMetalix - Perfil de Empresa en Google con Reseñas"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            credentialless="true"
          ></iframe>
        </div>

        {/* Quick access links */}
        <div className={styles.quickLinks}>
          <a
            href="https://www.google.com/maps/place/EcoMetalix/@-33.3120766,-70.7984129,17z/data=!4m8!3m7!1s0x9662bf78657b6e2f:0x692dfae6ce3b688d!8m2!3d-33.3120766!4d-70.798438!9m1!1b1!16s%2Fg%2F11q3j6y6yt?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            {isEnglish ? "View complete location" : "Ver ubicación completa"}
          </a>
          <a
            href="https://www.google.com/maps/place/EcoMetalix/@-33.3120766,-70.7984129,17z/data=!4m8!3m7!1s0x9662bf78657b6e2f:0x692dfae6ce3b688d!8m2!3d-33.3120766!4d-70.798438!9m1!1b1!16s%2Fg%2F11q3j6y6yt?hl=es&lsig=AB86z5WqhT9gKgR0R5oOJMC_W0dj#lrd=0x9662bf78657b6e2f:0x692dfae6ce3b688d,1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            {isEnglish ? "Read all reviews" : "Leer todas las reseñas"}
          </a>
        </div>
      </section>
    </Background>
  );
}
