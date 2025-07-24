import React from 'react';
import StructuredData from './StructuredData';
import { SEO_CONFIG, BUSINESS_INFO } from '../../config/constants';

export default function LocalBusinessSchema() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ecometalix Spa",
    "alternateName": "Ecometalix",
    "description": "Compra y venta de chatarra y metales reciclables en Santiago. Pago inmediato, balanza certificada y atención personalizada.",
    "url": SEO_CONFIG.baseUrl,
    "telephone": `+${BUSINESS_INFO.phone}`,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Ficticia 1234",
      "addressLocality": "Santiago",
      "addressRegion": "Región Metropolitana",
      "postalCode": "8320000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.4489",
      "longitude": "-70.6693"
    },
    "openingHoursSpecification": [
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
    "paymentAccepted": "Cash, Bank Transfer",
    "priceRange": "$$",
    "currenciesAccepted": "CLP",
    "areaServed": {
      "@type": "City",
      "name": "Santiago"
    },
    "serviceType": "Scrap Metal Buying",
    "founder": {
      "@type": "Person",
      "name": "Olga Pertsevaia"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Carlos Mendoza"
        },
        "datePublished": "2024-12-15",
        "description": "Excelente servicio, pago inmediato y trato muy profesional. La balanza certificada da mucha confianza. Recomendado 100%.",
        "name": "Servicio excelente y confiable",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "5",
          "ratingValue": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "María González"
        },
        "datePublished": "2024-12-10",
        "description": "Muy buena atención, horario extendido y precios justos. El equipo es muy amable y profesional.",
        "name": "Muy buena experiencia",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "5",
          "ratingValue": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Pedro Hernández"
        },
        "datePublished": "2024-12-05",
        "description": "Llevé chatarra de una construcción y me atendieron perfecto. Pago al instante y muy buenos precios.",
        "name": "Perfecto para empresas",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "5",
          "ratingValue": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ana López"
        },
        "datePublished": "2024-11-28",
        "description": "La mejor planta de reciclaje en Santiago. Trato honesto, balanza certificada y atención personal de la dueña.",
        "name": "La mejor de Santiago",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "5",
          "ratingValue": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Roberto Silva"
        },
        "datePublished": "2024-11-20",
        "description": "Muy buen servicio, respuesta rápida por WhatsApp y precios competitivos. Volveré sin duda.",
        "name": "Servicio rápido y confiable",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "5",
          "ratingValue": "4",
          "worstRating": "1"
        }
      }
    ],
    "sameAs": [
      "https://www.instagram.com/ecometalix"
    ]
  };

  return <StructuredData jsonLd={businessData} />;
} 