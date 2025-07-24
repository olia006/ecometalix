import React from "react";
import styles from "./ComoFuncionaPage.module.css";

{/*SEO*/}
// SEO now handled by App Router metadata
import PageHeader from "../components/PageHeader";
import Breadcrumb from "../components/Breadcrumb";
import ProcessTimeline from "../components/ProcessTimeline";
import { generateHreflangs } from "../utils/hreflangUtils";
{/*UI Elements*/} 
import FloatingCTA from "../components/FloatingCTA";
import TrustCues from "../components/TrustCues";
import MapSection from "../components/home/MapSection";
import SecondaryButton from "../components/SecondaryButton";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../config/constants";

{/*Icons*/}
import { 
  Truck, 
  Scale, 
  DollarSign, 
  MessageCircle, 
  Clock, 
  MapPin,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";
import OptimizedImage from "../components/OptimizedImage";

{/*Process Steps DATA*/}
const processSteps = [
  {
    step: "1",
    icon: <MessageCircle className={styles.stepIconPlain} aria-label="Contacto inicial" />,
    title: "Contacto y Cotización",
    description: "Escríbenos por WhatsApp o llámanos. Te daremos una cotización preliminar basada en el tipo y cantidad de material.",
    details: [
      "Respuesta inmediata por WhatsApp",
      "Cotización sin compromiso",
      "Asesoría sobre tipos de material",
      "Horarios de atención flexibles"
    ],
    image: "/images/materials/materialhero.webp"
  },
  {
    step: "2", 
    icon: <Truck className={styles.stepIconPlain} aria-label="Transporte" />,
    title: "Traslado al Centro",
    description: "Trae tu chatarra a nuestras instalaciones. Contamos con fácil acceso para vehículos de todo tamaño.",
    details: [
      "Fácil acceso para camiones grandes",
      "Estacionamiento disponible",
      "Personal de apoyo para descarga",
      "Horario: Lunes a domingo 8:30-20:00"
    ],
    image: "/images/materials/FierroLargo.webp"
  },
  {
    step: "3",
    icon: <Scale className={styles.stepIconPlain} aria-label="Pesaje certificado" />,
    title: "Pesaje Certificado",
    description: "Pesamos tu material con nuestra balanza certificada. Puedes presenciar todo el proceso para total transparencia.",
    details: [
      "Balanza certificada por el INN",
      "Capacidad hasta 80 toneladas",
      "Proceso transparente y supervisado",
      "Tickets de pesaje oficiales"
    ],
    image: "/images/materials/fierromixto.webp"
  },
  {
    step: "4",
    icon: <DollarSign className={styles.stepIconPlain} aria-label="Pago inmediato" />,
    title: "Pago Inmediato",
    description: "Recibe tu pago al instante. Puedes elegir efectivo o transferencia bancaria según tu preferencia.",
    details: [
      "Pago en efectivo inmediato",
      "Transferencia bancaria al momento",
      "Sin trámites burocráticos",
      "Facturación electrónica disponible"
    ],
    image: "/images/materials/cobre.webp"
  }
];

const requirements = [
  {
    icon: <AlertCircle className={styles.reqIcon} />,
    title: "Material limpio",
    description: "Separado por tipo y libre de contaminantes"
  },
  {
    icon: <AlertCircle className={styles.reqIcon} />,
    title: "Identificación",
    description: "Cédula de identidad o RUT para el pago"
  },
  {
    icon: <AlertCircle className={styles.reqIcon} />,
    title: "Origen legal",
    description: "Certificar que el material es de procedencia lícita"
  }
];

const ComoFuncionaPage = () => (
  <>
    {/* SEO is now handled by App Router metadata in /app/como-funciona/page.tsx */}

    {/* Floating WhatsApp CTA */}
    <FloatingCTA />

    {/* Breadcrumb navigation */}
    <div className="container">
      <Breadcrumb />
    </div>

    {/* --- PAGE HEADER --- */}
    <PageHeader
      title="¿Cómo funciona nuestro proceso?"
      subtitle="Un proceso simple, transparente y seguro en solo 4 pasos. Desde el contacto inicial hasta el pago inmediato."
      variant="primary"
    />

    {/* --- ANIMATED TIMELINE OVERVIEW --- */}
    

    <main>
      
      {/* --- PROCESS TIMELINE --- */}
      <section className="professional-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Proceso Paso a Paso</h2>
            <p className="section-subtitle">
              Un sistema probado que garantiza transparencia, rapidez y confianza en cada transacción.
            </p>
          </div>

          {/* Process Timeline Component */}
          <ProcessTimeline />

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {processSteps.map((step, index) => (
              <div key={step.step} className={styles.stepContainer}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--color-primary)',
                  color: 'var(--color-white)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 'var(--font-weight-semibold)',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: 'var(--shadow-md)'
                }}>{step.step}</div>
                <div className="professional-card" style={{ flex: 1, margin: 0 }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--space-md)', 
                    marginBottom: 'var(--space-lg)' 
                    }}>
                      {step.icon}
                    <div style={{ flex: 1 }}>
                      <h3 className="card-title">{step.title}</h3>
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="card-description">{step.description}</p>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 'var(--space-md) 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-xs)'
                    }}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 'var(--space-sm)',
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-secondary)'
                        }}>
                          <CheckCircle size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="image-container" style={{ height: '200px', marginTop: 'var(--space-md)' }}>
                      <OptimizedImage 
                        src={step.image} 
                        alt={step.title}
                        className="professional-image professional-image--card"
                      />
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div style={{ 
                    position: 'absolute',
                    left: '24px',
                    top: '48px',
                    bottom: '-var(--space-xl)',
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
                    zIndex: 1
                  }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="professional-section professional-background">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">¿Qué necesitas para vender?</h2>
            <p className="section-subtitle">
              Solo necesitas cumplir estos requisitos básicos para realizar la venta.
            </p>
          </div>

          <div className="professional-grid professional-grid--3">
            {requirements.map((req, index) => (
              <div key={index} className="professional-card professional-card--light">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    margin: '0 auto var(--space-lg)'
                  }}>
                    {req.icon}
                  </div>
                  <h3 className="card-title">{req.title}</h3>
                  <p className="card-description">{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="professional-section">
        <div className="section-container--md">
          <div className="professional-cta">
            <h2 className="cta-title">¿Listo para vender tu chatarra?</h2>
            <p className="cta-description">
              Contacta con nosotros ahora y obtén una cotización inmediata. 
              Nuestro equipo está listo para ayudarte en cada paso del proceso.
            </p>
            <div className="cta-buttons">
              <a 
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.process)} 
                target="_blank"
                rel="noopener noreferrer"
                className="buttonLink"
              >
                <SecondaryButton>
                  <WhatsAppIcon /> Empezar proceso
                </SecondaryButton>
              </a>
              <a href="/precios" className={styles.readMoreLink}>
                Ver precios <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST CUES --- */}
      <TrustCues />

      {/* --- LOCATION AND CONTACT --- */}
      <MapSection isEnglish={false} />

    </main>
  </>
);

export default ComoFuncionaPage; 