import React from "react";
import styles from "./WhyUsPage.module.css";

{/*SEO*/}
import Seo from "../components/seo/Seo";
import PageHeader from "../components/PageHeader";
import Breadcrumb from "../components/Breadcrumb";
import { generateHreflangs } from "../utils/hreflangUtils";
{/*UI Elements*/} 
import FloatingCTA from "../components/FloatingCTA";
import TrustCues from "../components/TrustCues";
import TestimonialSection from "../components/home/TestimonialSection";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

{/*SVG Icons (Install with: npm install react-icons)*/}
import { FaMoneyBillWave, FaClock, FaWeightHanging, FaHandshake, FaBuilding, FaWhatsapp, FaShieldAlt } from "react-icons/fa";


{/*Unique Selling Points DATA*/}
const sellingPoints = [
  {
    icon: <FaMoneyBillWave className={styles.uspIcon} aria-label="Pago inmediato" />,
    title: "Pago inmediato",
    text: "Te pagamos en el momento, en efectivo o transferencia. Sin esperas.",
  },
  {
    icon: <FaClock className={styles.uspIcon} aria-label="Horario ampliado" />,
    title: "Horario ampliado",
    text: "Abierto de 8 a 20h, incluyendo fines de semana y hasta más tarde para clientes frecuentes.",
  },
  {
    icon: <FaWeightHanging className={styles.uspIcon} aria-label="Balanza para camiones" />,
    title: "Balanza para camiones",
    text: "80 toneladas y 18 metros: pesamos los camiones más grandes.",
  },
  {
    icon: <FaHandshake className={styles.uspIcon} aria-label="Trato directo" />,
    title: "Trato directo",
    text: "Olga (dueña) y equipo siempre presentes, sin burocracia.",
  },
  {
    icon: <FaBuilding className={styles.uspIcon} aria-label="Empresas y particulares" />,
    title: "Empresas y particulares",
    text: "Ofertas personalizadas para grandes volúmenes o ventas frecuentes.",
  },
  {
    icon: <FaWhatsapp className={styles.uspIcon} aria-label="WhatsApp inmediato" />,
    title: "WhatsApp inmediato",
    text: "Respuestas rápidas por WhatsApp: ventas, consultas y cotizaciones.",
  },
  {
    icon: <FaShieldAlt className={styles.uspIcon} aria-label="Confianza certificada" />,
    title: "Confianza certificada",
    text: "Permisos, balanza certificada, ambiente seguro.",
  },
];

export default function WhyUsPage() {
  return (
    <main className={styles.whyUsMain}>
      {/* SEO */}
      <Seo
        title="¿Por Qué Elegir Ecometalix? | Compra de Chatarra Santiago"
        description="Pago inmediato, horario extendido, balanza certificada, trato humano. Descubre por qué Ecometalix es el líder en reciclaje de metales."
        canonical="/por-que-nosotros"
        hreflangs={generateHreflangs('/por-que-nosotros')}
      />

      {/* Breadcrumb navigation */}
      <div className="container">
        <Breadcrumb />
      </div>

 {/* --- Page Header --- */}
 <PageHeader
        title="¿Por Qué Elegir Ecometalix?"
        subtitle="Pago inmediato, horario extendido, balanza certificada, trato humano. Descubre la diferencia."
        variant="secondary"
      />

      {/* Floating WhatsApp CTA */}
      <FloatingCTA />

      {/* Top Visual & Headline */}
      <section className={styles.topSection}>
        <img
          src="/images/team-scale.jpg"
          alt="Equipo Ecometalix en la balanza"
          className={styles.teamPhoto}
        />
        <div>
          <h1 className={styles.heading}>
            ¿Por Qué Elegir <span className={styles.brand}>Ecometalix</span>?
          </h1>
          <p className={styles.subheading}>
            La diferencia está en cada detalle: vende tu chatarra sin esperas, con trato humano y <strong>pago inmediato</strong>.
          </p>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className={styles.uspSection} aria-label="Nuestras Ventajas">
        <ul className={styles.uspList}>
          {sellingPoints.map(({ icon, title, text }) => (
            <li key={title} className={styles.uspItem}>
              {icon}
              <div>
                <h3 className={styles.uspTitle}>{title}</h3>
                <p className={styles.uspText}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Trust cues (certifications, official badges) */}
      <section className={styles.trustSection} aria-label="Certificaciones y confianza">
        <TrustCues />
      </section>

      {/* Customer Testimonials */}
      <section className={styles.testimonialsSection} aria-label="Testimonios de clientes">
        <TestimonialSection />
      </section>

      {/* Main Call To Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>¿Listo para vender?</h2>
        <p className={styles.ctaText}>
          Escríbenos por WhatsApp o visítanos hoy mismo.<br />
          <strong>Pago inmediato, atención humana.</strong>
        </p>
        <div className={styles.ctaButtons}>
          <PrimaryButton
            href="https://wa.me/56912345678"
            aria-label="Vender ahora por WhatsApp"
            size="lg"
          >
            Vender ahora por WhatsApp
          </PrimaryButton>
          <SecondaryButton
            href="/mapa"
            aria-label="Ver cómo llegar"
            size="lg"
          >
            Ver cómo llegar
          </SecondaryButton>
        </div>
      </section>
    </main>
  );
}
