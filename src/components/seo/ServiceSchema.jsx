import React from 'react';
import StructuredData from './StructuredData';
import { SEO_CONFIG, BUSINESS_INFO } from '../../config/constants';

export default function ServiceSchema({ services = [] }) {
  // Default services if none provided
  const defaultServices = [
    {
      name: "Compra de Chatarra Metálica",
      description: "Compra de chatarra metálica con pago inmediato, pesaje certificado y precios competitivos en Santiago.",
      serviceType: "Scrap Metal Buying",
      category: "Recycling Services",
      areaServed: "Santiago, Chile"
    },
    {
      name: "Reciclaje de Metales",
      description: "Servicios de reciclaje responsable de metales ferrosos y no ferrosos con certificación ambiental.",
      serviceType: "Metal Recycling",
      category: "Environmental Services",
      areaServed: "Santiago, Chile"
    },
    {
      name: "Evaluación y Cotización",
      description: "Evaluación gratuita de materiales metálicos con cotización inmediata por WhatsApp o presencial.",
      serviceType: "Metal Evaluation",
      category: "Consultation Services",
      areaServed: "Santiago, Chile"
    },
    {
      name: "Transporte de Chatarra",
      description: "Servicio de recolección y transporte de chatarra para grandes volúmenes empresariales.",
      serviceType: "Scrap Transportation",
      category: "Logistics Services",
      areaServed: "Santiago, Chile"
    }
  ];

  const serviceList = services.length > 0 ? services : defaultServices;

  const serviceSchemas = serviceList.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "serviceType": service.serviceType,
    "category": service.category,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ecometalix Spa",
      "url": SEO_CONFIG.baseUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      },
      "telephone": `+${BUSINESS_INFO.phone}`,
      "email": BUSINESS_INFO.email
    },
    "areaServed": {
      "@type": "City",
      "name": "Santiago",
      "containedInPlace": {
        "@type": "Country",
        "name": "Chile"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CLP",
      "price": "Variable",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "validThrough": "2025-12-31"
    },
    "hoursAvailable": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday", 
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:30",
        "closes": "20:00"
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Payment Method",
        "value": "Cash, Bank Transfer"
      },
      {
        "@type": "PropertyValue",
        "name": "Certification",
        "value": "Certified Scale, Environmental Compliance"
      }
    ]
  }));

  return (
    <>
      {serviceSchemas.map((schema, index) => (
        <StructuredData key={`service-${index}`} jsonLd={schema} />
      ))}
    </>
  );
} 