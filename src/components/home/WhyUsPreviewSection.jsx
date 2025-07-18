// src/components/WhyUsPreviewSection.jsx
import React from "react";
import styles from "./WhyUsPreviewSection.module.css";
import Background from "../Background";
import { DollarSign, Clock, Weight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../SectionHeader";

const previewPoints = [
  {
    icon: <DollarSign className={styles.uspIcon} aria-label="Pago inmediato" />,
    title: "Pago inmediato",
    text: "Te pagamos en el momento, en efectivo o transferencia.",
  },
  {
    icon: <Clock className={styles.uspIcon} aria-label="Horario ampliado" />,
    title: "Horario ampliado",
    text: "Abierto de 8 a 20h, incluyendo fines de semana.",
  },
  {
    icon: <Weight className={styles.uspIcon} aria-label="Balanza para camiones" />,
    title: "Balanza de gran capacidad",
    text: "Pesamos camiones de hasta 80 toneladas y 18 metros.",
  },
];

export default function WhyUsPreviewSection() {
  return (
          <Background>
      <section id="ventajas" className={styles.whyUsPreviewSection} aria-label="Por qué elegirnos">
        <SectionHeader>
          ¿Por Qué Elegir <span className={styles.brand}>Ecometalix</span>?
        </SectionHeader>
        <ul className={styles.uspGrid}>
          {previewPoints.map(({ icon, title, text }) => (
            <li key={title} className={styles.uspCard}>
              {icon}
              <h3 className={styles.uspTitle}>{title}</h3>
              <p className={styles.uspText}>{text}</p>
            </li>
          ))}
        </ul>
        <div className={styles.ctaWrap}>
          <Link href="#ventajas" className={styles.ctaBtn}>
            Ver todas las ventajas
          </Link>
        </div>
      </section>
    </Background>
  );
}
