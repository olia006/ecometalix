import React from "react";
import { Package, TrendingUp, Clock } from "lucide-react";
import styles from "./MetalPriceTableSection.module.css";
import WhatsAppIcon from "../WhatsAppIcon";
import SecondaryButton from "../SecondaryButton";
import { metalPrices } from "../../data/prices";
import { PRICE_UPDATE_CONFIG } from "../../config/constants";
import { materials } from "../../data/materials";
import OptimizedImage from "../OptimizedImage";

// Create a mapping function to get material images by price ID
const getMaterialImage = (priceId) => {
  const material = materials.find(m => m.key === priceId);
  return material ? material.image : null;
};

// Organize prices by category for better presentation
const organizeByCategory = () => {
  const ferrous = [];
  const nonFerrous = [];
  const special = [];

  metalPrices.forEach(item => {
    const material = {
      metal: item.metal,
      price: item.display,
      rawPrice: item.price,
      image: getMaterialImage(item.id),
      id: item.id,
      category: item.category,
      description: item.description
    };

    switch(item.category) {
      case 'ferroso':
        ferrous.push(material);
        break;
      case 'no-ferroso':
        nonFerrous.push(material);
        break;
      default:
        special.push(material);
    }
  });

  return { ferrous, nonFerrous, special };
};

const PriceTableRow = ({ material, isHighValue = false }) => (
  <tr className={`${styles.tableRow} ${isHighValue ? styles.highValueRow : ''}`}>
    <td className={styles.materialCell}>
      <div className={styles.materialInfo}>
        {material.image ? (
          <div className={styles.imageContainer}>
            <OptimizedImage 
              src={material.image} 
              alt={material.metal}
              className={styles.tableImage}
            />
          </div>
        ) : (
          <div className={styles.imagePlaceholder}>
            <Package className={styles.placeholderIcon} size={20} />
          </div>
        )}
        <div className={styles.materialDetails}>
          <h4 className={styles.materialName}>{material.metal}</h4>
          {material.description && (
            <p className={styles.materialDescription}>{material.description}</p>
          )}
        </div>
      </div>
    </td>
    <td className={styles.priceCell}>
      {material.price.toLowerCase().includes("consultar") ? (
        <div className={styles.consultarWrapper}>
          <a 
            href="https://wa.me/56940244042"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
          >
            <SecondaryButton>
              <WhatsAppIcon /> Consultar
            </SecondaryButton>
          </a>
        </div>
      ) : (
        <div className={styles.priceWrapper}>
          <span className={styles.priceValue}>{material.price}</span>
          {isHighValue && <TrendingUp className={styles.highValueIcon} size={16} />}
        </div>
      )}
    </td>
  </tr>
);

export default function MetalPriceTableSection() {
  const { ferrous, nonFerrous, special } = organizeByCategory();
  
  // High value materials (above $1000/kg)
  const highValueMaterials = [...nonFerrous, ...ferrous, ...special].filter(
    material => material.rawPrice && material.rawPrice > 1000
  );

  return (
    <>
      {/* Header Section - SEPARATE CONTAINER */}
      <section className={styles.headerSection} aria-label="Información de precios">
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.headingWrapper}>
              <TrendingUp className={styles.headingIcon} aria-hidden="true" />
              <h2 className={styles.heading}>Lista Completa de Precios por Kilo</h2>
            </div>
            <p className={styles.subtitle}>
              Consulta nuestros precios competitivos para todos los tipos de metales y chatarra
            </p>
          </div>
          <div className={styles.updateInfo}>
            <Clock className={styles.clockIcon} size={16} />
            <span className={styles.lastUpdated}>
              Actualizado: <strong>{PRICE_UPDATE_CONFIG.getLastUpdateDate()}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Table Section - ONLY FOR TABLES */}
      <section className={styles.priceTableSection} aria-label="Tablas de precios de metales">
        {/* Non-Ferrous Metals (High Value) */}
        {nonFerrous.length > 0 && (
          <div className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>Metales No Ferrosos</h3>
            <div className={styles.tableContainer}>
              <table className={styles.priceTable}>
                <caption className={styles.tableCaption}>
                  Precios de metales no ferrosos actualizados diariamente
                </caption>
                <thead>
                  <tr>
                    <th className={styles.materialHeader}>Material</th>
                    <th className={styles.priceHeader}>Precio por Kilogramo</th>
                  </tr>
                </thead>
                <tbody>
                  {nonFerrous.map((material) => (
                    <PriceTableRow 
                      key={material.id} 
                      material={material} 
                      isHighValue={material.rawPrice > 1000}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Ferrous Metals */}
        {ferrous.length > 0 && (
          <div className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>Metales Ferrosos</h3>
            <div className={styles.tableContainer}>
              <table className={styles.priceTable}>
                <caption className={styles.tableCaption}>
                  Precios de metales ferrosos actualizados diariamente
                </caption>
                <thead>
                  <tr>
                    <th className={styles.materialHeader}>Material</th>
                    <th className={styles.priceHeader}>Precio por Kilogramo</th>
                  </tr>
                </thead>
                <tbody>
                  {ferrous.map((material) => (
                    <PriceTableRow key={material.id} material={material} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Special Materials */}
        {special.length > 0 && (
          <div className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>Materiales Especiales</h3>
            <div className={styles.tableContainer}>
              <table className={styles.priceTable}>
                <caption className={styles.tableCaption}>
                  Precios de materiales especiales bajo consulta
                </caption>
                <thead>
                  <tr>
                    <th className={styles.materialHeader}>Material</th>
                    <th className={styles.priceHeader}>Precio por Kilogramo</th>
                  </tr>
                </thead>
                <tbody>
                  {special.map((material) => (
                    <PriceTableRow key={material.id} material={material} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section - SEPARATE CONTAINER */}
      <section className={styles.ctaSectionWrapper} aria-label="Solicitar cotización">
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>¿Necesitas una cotización personalizada?</h3>
            <p className={styles.ctaDescription}>
              Para grandes volúmenes, materiales especiales o cotizaciones empresariales, 
              contáctanos directamente y obten el mejor precio del mercado.
            </p>
            <a
              href="https://wa.me/56940244042"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buttonLink}
            >
              <SecondaryButton>
                <WhatsAppIcon /> Solicitar Cotización Personalizada
              </SecondaryButton>
            </a>
          </div>
          
          <div className={styles.disclaimer}>
            <div className={styles.legalInfo}>
              <p className={styles.disclaimerText}>
                *Precios referenciales. Pueden variar según el mercado y el estado del material.
              </p>
              <p className={styles.disclaimerText}>
                Pago inmediato sujeto a verificación y condiciones legales.
              </p>
              <p className={styles.disclaimerText}>
                Empresa autorizada por el Ministerio del Medio Ambiente.
              </p>
              <p className={styles.disclaimerText}>
                Consulta nuestra <a href="/privacy" className={styles.privacyLink}>Política de Privacidad</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
