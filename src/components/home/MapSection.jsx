// src/components/home/MapSection.jsx
import React from "react";
import styles from "./MapSection.module.css";
import Background from "../Background";
import { FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../SectionHeader";

export default function MapSection() {
  return (
    <Background>
      <section
        className={styles.mapSection}
        aria-labelledby="map-heading"
      >
        <SectionHeader>
          ¿Dónde estamos?
        </SectionHeader>

        <div className={styles.infoWrap}>
          <div className={styles.mapWrap}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.8300049035455!2d-70.72776733228044!3d-33.31207661992254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662bf78657b6e2f%3A0x692dfae6ce3b688d!2sEcoMetalix!5e0!3m2!1sen!2scl!4v1752088765418!5m2!1sen!2scl"
              title="Mapa Ecometalix"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.addressBlock}>
            <p>
              <FaMapMarkerAlt className={styles.icon} />
              <strong>Dirección:</strong> Calle Ficticia 1234, Santiago, Chile
            </p>
            <p>
              <FaClock className={styles.icon} />
              <strong>Horario:</strong> Lunes a Sábado, 8:00–20:00
            </p>
            <p>
              <FaWhatsapp className={styles.icon} />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                +56 9 1234 5678
              </a>
            </p>

            <a
              href="https://share.google/9dVvaWworIPC8YAiq"
              className={styles.directionsBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>
    </Background>
  );
}
