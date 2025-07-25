import React from "react";
import styles from "./WhyUsPage.module.css";

// SEO Components
// SEO now handled by App Router metadata
import PageHeader from "../components/PageHeader";
import Breadcrumb from "../components/Breadcrumb";
import StructuredData from "../components/seo/StructuredData";
import { generateHreflangs } from "../utils/hreflangUtils";

// UI Elements
import FloatingCTA from "../components/FloatingCTA";

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
  ArrowRight,
  MapPin
} from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";
import OptimizedImage from "../components/OptimizedImage";

// Professional USP Data with enhanced descriptions
const mainAdvantages = [
  {
    icon: <DollarSign size={28} />,
    title: "Pago Inmediato",
    subtitle: "Sin esperas ni trámites",
    description: "Te pagamos en el momento, transferencia bancaria inmediata o otros métodos seguros. Sin burocracia, sin demoras, sin excusas.",
    highlight: "100% inmediato",
    color: "success"
  },
  {
    icon: <Clock size={28} />,
    title: "Horario Extendido",
    subtitle: "Máxima flexibilidad",
    description: "Abierto de 8:30 a 20:00, incluidos fines de semana. Horarios especiales para clientes frecuentes.",
    highlight: "7 días a la semana",
    color: "primary"
  },
  {
    icon: <Weight size={28} />,
    title: "Balanza Industrial",
    subtitle: "Tecnología de precisión",
         description: "Balanza certificada INN para camiones de hasta 80 toneladas y 18 metros de longitud. Pesaje transparente y preciso para todo tipo de materiales.",
    highlight: "Certificada INN",
    color: "accent"
  },
  {
    icon: <Handshake size={28} />,
    title: "Trato Personal",
    subtitle: "Atención humana garantizada",
    description: "Propietaria y su equipo siempre presentes. Trato directo, sin intermediarios, con años de experiencia.",
    highlight: "Dueña presente",
    color: "secondary"
  }
];

const additionalBenefits = [
  {
    icon: <Building size={20} />,
    title: "Empresas y Particulares",
    description: "Ofertas personalizadas para grandes volúmenes y contratos empresariales."
  },
  {
    icon: <Shield size={20} />,
    title: "Confianza Certificada",
    description: "Permisos municipales, balanza certificada, ambiente seguro y profesional."
  },
  {
    icon: <Users size={20} />,
    title: "Equipo Experimentado",
    description: "10 años de experiencia internacional, 3 años establecidos en Chile con conocimiento profundo del mercado local."
  },
  {
    icon: <Award size={20} />,
    title: "Mejor Precio del Mercado",
    description: "Precios competitivos y actualizados diariamente según cotizaciones internacionales."
  }
];

const stats = [
  { value: "500+", label: "Clientes Satisfechos", icon: <Users size={24} /> },
  { value: "100%", label: "Pagos Inmediatos", icon: <DollarSign size={24} /> },
  { value: "7", label: "Días a la Semana", icon: <Clock size={24} /> },
  { value: "80T/18M", label: "Balanza certificada", icon: <Weight size={24} /> }
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
      <div className={styles.advantageIcon}>
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

// SEO Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ecometalix.cl/#business",
      "name": "Ecometalix",
      "description": "Empresa líder en compra de chatarra y metales en Santiago, Chile. Pago inmediato, balanza certificada, horario extendido.",
      "url": "https://ecometalix.cl",
      "telephone": "+56912345678",
      "email": "contacto@ecometalix.cl",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dirección Principal",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.4489,
        "longitude": -70.6693
      },
      "openingHours": [
        "Mo-Su 08:30-20:00"
      ],
      "priceRange": "$$",
      "paymentAccepted": "Bank Transfer, Electronic Payment",
      "currenciesAccepted": "CLP",
      "areaServed": {
        "@type": "City",
        "name": "Santiago",
        "addressCountry": "CL"
      }
    },
    {
      "@type": "Service",
      "@id": "https://ecometalix.cl/#service",
      "name": "Compra de Chatarra y Metales",
      "description": "Servicio profesional de compra de chatarra: aluminio, cobre, fierro, bronce. Pago inmediato y pesaje certificado.",
      "provider": {
        "@id": "https://ecometalix.cl/#business"
      },
      "areaServed": {
        "@type": "City", 
        "name": "Santiago"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Materiales Aceptados",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Aluminio" }},
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cobre" }},
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Fierro" }},
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bronce" }}
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://ecometalix.cl/por-que-nosotros#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Por qué elegir Ecometalix?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos pago inmediato, horario extendido hasta las 20:00, balanza certificada INN, trato personalizado y 10 años de experiencia internacional."
          }
        },
        {
          "@type": "Question", 
          "name": "¿Qué garantías ofrecen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Balanza certificada INN para camiones hasta 80 toneladas, pesaje transparente que puedes presenciar, permisos municipales y ambiente seguro."
          }
        }
      ]
    }
  ]
};

export default function WhyUsPage() {
  return (
    <main className="professional-page">
      {/* SEO Structured Data for Search Engines */}
      <StructuredData jsonLd={structuredData} />
      
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

      {/* Hero Section with Background Image */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <div className={styles.heroText}>
              <div className={styles.heroExperience}>
                <span className={styles.experienceBadge}>10 Años de Experiencia</span>
              </div>
              
              <h2 className="hero-heading hero-heading--light hero-heading--large">
                Ecometalix: Empresa de Confianza en <span className="hero-highlight">Compra de Chatarra en Santiago</span>
              </h2>
              
              <p className={styles.heroDescription}>
                Con 10 años de experiencia internacional y 3 años consolidados en Chile, somos la opción preferida para empresas 
                y particulares que buscan <strong>pago inmediato</strong>, <strong>trato profesional</strong> 
                y <strong>precios justos</strong> en Santiago.
              </p>
              
              {/* Hero CTAs */}
              <div className={styles.heroCTAs}>
                <a
                  href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroButtonLink}
                >
                  <SecondaryButton>
                    <WhatsAppIcon /> Cotizar Ahora por WhatsApp
                  </SecondaryButton>
                </a>
                <a href="/precios" className={styles.heroSecondaryLink}>
                  Ver Precios Actuales <ArrowRight className={styles.arrowIcon} />
                </a>
              </div>
              

            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.trustCard}>
                <div className={styles.trustHeader}>
                  <Shield className={styles.trustIcon} />
                  <h3 className={styles.trustTitle}>Empresa Certificada</h3>
                </div>
                <div className={styles.trustContent}>
                  <div className={styles.trustItem}>
                    <Award className={styles.trustBadgeIcon} />
                    <span>Balanza Certificada INN</span>
                  </div>
                  <div className={styles.trustItem}>
                    <Building className={styles.trustBadgeIcon} />
                    <span>Permisos Municipales</span>
                  </div>
                  <div className={styles.trustItem}>
                    <Users className={styles.trustBadgeIcon} />
                    <span>500+ Clientes Satisfechos</span>
                  </div>
                  <div className={styles.trustItem}>
                    <MapPin className={styles.trustBadgeIcon} />
                    <span>Presencia en Santiago</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.materialsPreview}>
                <h4 className={styles.materialsTitle}>Compramos Todo Tipo de Metales</h4>
                <div className={styles.materialsList}>
                  <a href="/materiales/aluminio" className={styles.materialLink}>Aluminio</a>
                  <a href="/materiales/cobre" className={styles.materialLink}>Cobre</a>
                  <a href="/materiales/fierro-corto" className={styles.materialLink}>Fierro</a>
                  <a href="/materiales/bronce" className={styles.materialLink}>Bronce</a>
                </div>
                <a href="/materiales" className={styles.viewAllMaterials}>
                  Ver Todos los Materiales <ArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="professional-section">
        <div className="section-container--md">
          <div className={styles.introSection}>
            <div className={styles.introCard}>
              <h2 className={styles.introTitle}>Quiénes somos</h2>
              <p className={styles.introDescription}>
                Somos una empresa especializada en el reciclaje y compra de metales, con más de 10 años de experiencia internacional y presencia en Chile desde hace 3 años. Nuestro enfoque es ofrecer atención directa, transparente y adaptada a cada cliente.
              </p>
            </div>
            
            <div className="professional-grid professional-grid--2">
              <div className="professional-card professional-card--light">
                <h3 className="card-title">Misión</h3>
                <p className="card-description">
                  Facilitar el reciclaje responsable de metales en Chile, entregando procesos claros y pagos inmediatos que benefician tanto al cliente como al medio ambiente.
                </p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h3 className="card-title">Visión</h3>
                <p className="card-description">
                  Ser reconocidos como un referente confiable y transparente en la compra y reciclaje de metales, contribuyendo al desarrollo sostenible en Chile.
                </p>
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
            Ventajas de Ecometalix: Por Qué Somos Líderes en Compra de Chatarra
          </h2>
          <p className="section-subtitle">
            Pago inmediato, balanza certificada y experiencia que nos convierte en la mejor opción para vender tu chatarra en Santiago. 
            Conoce más sobre cada <a href="/materiales" className="link-internal">tipo de material</a> que compramos.
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
            <h2 className="section-title">Proceso de Compra de Chatarra: 4 Pasos Simples</h2>
            <p className="section-subtitle">
              Desde el contacto hasta el pago: proceso transparente y eficiente para vender tu chatarra en Santiago
            </p>
          </div>
          <article className="process-steps">
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
            icon={<Users />}
          />
          <ProcessStep
            number="03"
            title="Pesaje Certificado"
            description="Balanza certificada INN, proceso transparente que puedes presenciar."
            icon={<Weight />}
          />
          <ProcessStep
            number="04"
            title="Pago Garantizado"
            description="Transferencia bancaria inmediata o métodos de pago seguros. Sin esperas ni trámites."
            icon={<DollarSign />}
          />
          </article>
        </div>
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
              <br />Consulta nuestros <a href="/precios" className="link-internal">precios actuales</a> o revisa las <a href="/faq" className="link-internal">preguntas frecuentes</a>.
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

      {/* Canal de Denuncias */}
      <section className={styles.denunciasSection}>
        <div className="section-container">
          <div className={styles.denunciasContainer}>
            <a 
              href="mailto:contacto@ecometalix.cl?subject=Canal%20de%20Denuncias" 
              className={styles.denunciasLink}
            >
              Canal de Denuncias
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
