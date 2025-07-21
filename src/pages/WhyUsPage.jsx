import React from "react";
import styles from "./WhyUsPage.module.css";

// SEO Components
// SEO now handled by App Router metadata
import PageHeader from "../components/PageHeader";
import Breadcrumb from "../components/Breadcrumb";
import { generateHreflangs } from "../utils/hreflangUtils";

// UI Elements
import FloatingCTA from "../components/FloatingCTA";
import TrustCues from "../components/TrustCues";
import MapSection from "../components/home/MapSection";
import SecondaryButton from "../components/SecondaryButton";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../config/constants";

// Icons
import { 
  DollarSign, 
  Clock, 
  Weight, 
  Handshake, 
  Building, 
  Shield,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Phone,
  ArrowRight
} from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";
import OptimizedImage from "../components/OptimizedImage";

// Professional USP Data with enhanced descriptions
const mainAdvantages = [
  {
    icon: <DollarSign />,
    title: "Pago Inmediato",
    subtitle: "Sin esperas ni trámites",
    description: "Te pagamos en el momento, en efectivo o transferencia bancaria. Sin burocracia, sin demoras, sin excusas.",
    highlight: "100% inmediato",
    color: "success"
  },
  {
    icon: <Clock />,
    title: "Horario Extendido",
    subtitle: "Máxima flexibilidad",
    description: "Abierto de 8:00 a 20:00, incluidos fines de semana. Horarios especiales para clientes frecuentes.",
    highlight: "7 días a la semana",
    color: "primary"
  },
  {
    icon: <Weight />,
    title: "Balanza Industrial",
    subtitle: "Tecnología de precisión",
         description: "Balanza certificada INN para camiones de hasta 80 toneladas y 18 metros de longitud. Pesaje transparente y preciso.",
    highlight: "Certificada INN",
    color: "accent"
  },
  {
    icon: <Handshake />,
    title: "Trato Personal",
    subtitle: "Atención humana garantizada",
    description: "Olga (propietaria) y su equipo siempre presentes. Trato directo, sin intermediarios, con años de experiencia.",
    highlight: "Dueña presente",
    color: "secondary"
  }
];

const additionalBenefits = [
  {
    icon: <Building />,
    title: "Empresas y Particulares",
    description: "Ofertas personalizadas para grandes volúmenes y contratos empresariales."
  },
  {
    icon: <Shield />,
    title: "Confianza Certificada",
    description: "Permisos municipales, balanza certificada, ambiente seguro y profesional."
  },
  {
    icon: <Users />,
    title: "Equipo Experimentado",
    description: "10 años de experiencia internacional, 3 años establecidos en Chile con conocimiento profundo del mercado local."
  },
  {
    icon: <Award />,
    title: "Mejor Precio del Mercado",
    description: "Precios competitivos y actualizados diariamente según cotizaciones internacionales."
  }
];

const stats = [
  { value: "500+", label: "Clientes Satisfechos", icon: <Users /> },
  { value: "100%", label: "Pagos Inmediatos", icon: <DollarSign /> },
  { value: "7", label: "Días a la Semana", icon: <Clock /> },
  { value: "80T/18M", label: "Balanza: 80 Tons, 18 Metros", icon: <Weight /> }
];

const ProcessStep = ({ number, title, description, icon }) => (
  <div className="process-step">
    <div className="step-number">{number}</div>
    <div className="step-icon">{icon}</div>
    <div>
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </div>
  </div>
);

const AdvantageCard = ({ advantage, index }) => (
  <div className={`professional-card professional-card--${advantage.color}`}>
    <div className="card-header">
      <div className="card-icon">
        {advantage.icon}
      </div>
      <div className="card-badge">
        {advantage.highlight}
      </div>
    </div>
    <div className="card-content">
      <h3 className="card-title">{advantage.title}</h3>
      <p className="card-subtitle">{advantage.subtitle}</p>
      <p className="card-description">{advantage.description}</p>
    </div>
    <div className="card-footer">
                  <CheckCircle className="verification-icon" size={20} />
            <span className="verification-badge">Verificado</span>
    </div>
  </div>
);

export default function WhyUsPage() {
  return (
    <main className="professional-page">
      {/* SEO is now handled by App Router metadata in /app/por-que-nosotros/page.tsx */}

      {/* Breadcrumb navigation */}
      <div className="container">
        <Breadcrumb />
      </div>

      {/* Page Header */}
      <PageHeader
        title="¿Por Qué Elegir Ecometalix?"
        subtitle="La diferencia está en cada detalle: experiencia, confianza y compromiso con nuestros clientes."
        variant="secondary"
      />

      {/* Floating WhatsApp CTA */}
      <FloatingCTA />

      {/* Hero Section */}
      <section className="professional-section">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h2 className="hero-heading hero-heading--dark hero-heading--medium">
              La Empresa Líder en <span className="hero-highlight">Reciclaje de Metales</span>
            </h2>
            <p className={styles.heroDescription}>
              Con 10 años de experiencia internacional y 3 años consolidados en Chile, somos la opción preferida para empresas 
              y particulares que buscan <strong>pago inmediato</strong>, <strong>trato profesional</strong> 
              y <strong>precios justos</strong> en Santiago.
            </p>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statContent}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className="image-container">
              <OptimizedImage
                src="/images/hometestimonial.jpg"
                alt="Instalaciones profesionales de Ecometalix"
                className="professional-image professional-image--hero"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <TrendingUp className="overlay-icon" />
                  <span className="overlay-text">Líder del Mercado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantages Section */}
      <section className="professional-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <Star className="section-title-icon" />
              Nuestras Ventajas Competitivas
            </h2>
            <p className="section-subtitle">
              Lo que nos convierte en la mejor opción para vender tu chatarra
            </p>
          </div>
          <div className="professional-grid professional-grid--2">
            {mainAdvantages.map((advantage, index) => (
              <AdvantageCard key={index} advantage={advantage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="professional-section professional-background">
        <div className="section-container--lg">
          <h2 className="section-title additional-benefits-title">Beneficios Adicionales</h2>
          <div className="professional-grid professional-grid--3">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="professional-card professional-card--light">
                <div className="benefit-card-layout">
                  <div className="card-icon card-icon--sm benefit-icon-small">
                    {benefit.icon}
                  </div>
                  <div className="benefit-content-flex">
                    <h3 className="card-title benefit-title-large">{benefit.title}</h3>
                    <p className="card-description">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="professional-section">
        <div className="section-container--lg">
          <div className="section-header">
            <h2 className="section-title">Nuestro Proceso Profesional</h2>
            <p className="section-subtitle">
              Un sistema probado que garantiza transparencia y eficiencia
            </p>
          </div>
          <div className="process-steps">
          <ProcessStep
            number="01"
            title="Contacto Inmediato"
            description="Escríbenos por WhatsApp o visítanos directamente. Respuesta garantizada en minutos."
            icon={<Phone />}
          />
          <ProcessStep
            number="02"
            title="Evaluación Profesional"
            description="Nuestro equipo evalúa tu material con transparencia y experiencia."
            icon={<CheckCircle />}
          />
          <ProcessStep
            number="03"
            title="Pesaje Certificado"
            description="Balanza certificada INN, proceso transparente que puedes presenciar."
            icon={<Weight />}
          />
          <ProcessStep
            number="04"
            title="Pago Inmediato"
            description="Efectivo al instante o transferencia inmediata. Sin esperas ni trámites."
            icon={<DollarSign />}
          />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <TrustCues />
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <MapSection isEnglish={false} />
      </section>

      {/* Call to Action Section */}
      <section className="professional-section">
        <div className="section-container--md">
          <div className="professional-cta">
            <h2 className="cta-title">¿Listo para Experimentar la Diferencia?</h2>
            <p className="cta-description">
              Únete a los más de 500 clientes que han elegido la excelencia. 
              <br /><strong>Pago inmediato, trato profesional, precios justos.</strong>
            </p>
            <div className="cta-buttons">
              <a
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLink}
              >
                <SecondaryButton>
                  <WhatsAppIcon /> Cotizar por WhatsApp
                </SecondaryButton>
              </a>
              <a
                href="/precios"
                className={styles.readMoreLink}
              >
                Ver Precios Actualizados <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
