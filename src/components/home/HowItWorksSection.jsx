// src/components/HowItWorksSection.jsx
import React from "react";
import styles from "./HowItWorksSection.module.css";
import Background from "../Background";
import SectionHeader from "../SectionHeader";

const steps = [
  {
    number: "01",
    title: "Trae tu chatarra",
    description: "Llega a nuestro centro o agenda retiro para grandes volúmenes.",
  },
  {
    number: "02", 
    title: "Pesamos tu material",
    description: "Pesaje transparente y certificado, puedes presenciar todo el proceso.",
  },
  {
    number: "03",
    title: "Te pagamos al instante", 
    description: "Recibe tu pago en efectivo o transferencia, sin demoras ni trámites.",
  },
  {
    number: "04",
    title: "Recibe tu comprobante",
    description: "Recibe boleta o factura al momento, y ayuda al reciclaje.",
  },
];

export default function HowItWorksSection() {
  return (
    <Background>
      <section className={styles.section} aria-label="¿Cómo funciona?">
        <SectionHeader>¿Cómo funciona?</SectionHeader>
        <ul className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <li className={styles.cards} key={i}>
              <div className={styles.cardGlass}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <div className={styles.cardLogo}>{step.number}</div>
                  <p className={styles.cardUrl}>{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Background>
  );
}
