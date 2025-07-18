// src/pages/PricesPage.jsx
import React from "react";
import Seo from "../components/seo/Seo";
import styles from "./PricesPage.module.css";
import PageHeader from "../components/PageHeader";
import Breadcrumb from "../components/Breadcrumb";
import MetalPriceTableSection from "../components/home/MetalPriceTableSection";
import MaterialGrid from "../components/MaterialGrid"; // <-- ✅ NEW GRID IMPORT!
import CTAComposition from "../components/CTAComposition";
import FAQPreviewSection from "../components/home/FAQPreviewSection";
import TrustCues from "../components/TrustCues";

import { generateHreflangs } from "../utils/hreflangUtils";
import ProductSchema from "../components/seo/ProductSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import { materials } from "../data/materials";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../config/constants";

// Example: dynamic or static update date
const lastUpdatedDate = "8 de julio 2025, 15:00";

// Only include FAQs relevant to prices, payment, process, etc.
const priceFaqs = [
  {
    question: "¿Por qué varían los precios?",
    answer: "Los precios de la chatarra dependen del mercado internacional y pueden cambiar diariamente.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer: "El pago es inmediato, en efectivo o transferencia, tras el pesaje certificado.",
  },
  {
    question: "¿Qué metales compran?",
    answer: "Compramos cobre, aluminio, hierro, acero inoxidable, bronce y otros metales. Contáctanos para más detalles.",
  },
  {
    question: "¿Pagan más por grandes cantidades?",
    answer: "Sí, ofrecemos precios especiales para empresas y grandes volúmenes. Solicita tu cotización personalizada.",
  },
];

const PricesPage = () => (
  <>
    {/* --- SEO & Meta --- */}
    <Seo
      title="Precios de chatarra en Santiago 2025 | Ecometalix Spa"
      description="Consulta precios actualizados de cobre, aluminio, hierro y otros metales en Ecometalix Spa. Pago inmediato y pesaje certificado. ¡Cotiza tu precio por WhatsApp!"
      canonical="/precios"
      hreflangs={generateHreflangs('/precios')}
    />
    
    {/* Product and Service Schemas */}
    <ProductSchema materials={materials} />
    <ServiceSchema />

    {/* Breadcrumb navigation */}
    <div className="container">
      <Breadcrumb />
    </div>

    {/* --- PAGE HEADER --- */}
    <PageHeader
      title="Precios de chatarra actualizados"
      subtitle="Consulta nuestros precios para cobre, aluminio, hierro y más. Pago inmediato, pesaje certificado. Actualizado cada día hábil."
      lastUpdated={lastUpdatedDate}
      variant="primary"
    />

    <main>
      {/* --- PRICES TABLE / GRID --- */}
      <MetalPriceTableSection />

      {/* --- MATERIALS GRID --- */}
      <MaterialGrid />

      {/* --- CTA: Get a Quote / WhatsApp --- */}
      <CTAComposition
        title="¿Quieres cotizar tu precio en tiempo real?"
        description="Contáctanos por WhatsApp para una cotización inmediata y personalizada."
        ctaText="Cotizar por WhatsApp"
                    ctaHref={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.priceInquiry)}
      />

      {/* --- FAQ Preview (about prices, payment, process) --- */}
      <FAQPreviewSection faqs={priceFaqs} />

      {/* --- Trust badges/certifications --- */}
      <TrustCues />
    </main>

  </>
);

export default PricesPage;
