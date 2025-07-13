import React from 'react';
import StructuredData from './StructuredData';

// eslint-disable-next-line react/prop-types
export default function ProductSchema({ materials = [] }) {
  // Generate product schema for each metal type
  const productSchemas = materials.map(material => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": material.name,
    "description": material.description,
    "category": "Scrap Metal",
    "brand": {
      "@type": "Brand",
      "name": "Ecometalix Spa"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CLP",
      "price": "Variable",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Ecometalix Spa",
        "url": "https://ecometalix.cl"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "Variable",
        "priceCurrency": "CLP",
        "valueAddedTaxIncluded": true
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Material Type",
        "value": material.tags.includes("Ferroso") ? "Ferrous" : "Non-Ferrous"
      },
      {
        "@type": "PropertyValue", 
        "name": "Acceptance Status",
        "value": material.tags.includes("Aceptado") ? "Accepted" : "Contact for Details"
      }
    ],
    "url": `https://ecometalix.cl${material.articleLink}`,
    "image": material.image ? `https://ecometalix.cl${material.image}` : null
  }));

  // Create a collection schema that includes all products
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Metales Reciclables Aceptados",
    "description": "Lista de metales y chatarra que compramos en Ecometalix Spa",
    "numberOfItems": materials.length,
    "itemListElement": materials.map((material, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": material.name,
        "description": material.description,
        "url": `https://ecometalix.cl${material.articleLink}`
      }
    }))
  };

  return (
    <>
      {/* Individual product schemas */}
      {productSchemas.map((schema, index) => (
        <StructuredData key={materials[index].key} jsonLd={schema} />
      ))}
      
      {/* Collection schema */}
      <StructuredData jsonLd={collectionSchema} />
    </>
  );
} 