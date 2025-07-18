// src/components/PricesPreviewSection.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./PricesPreviewSection.module.css";
import Background from "../Background";
import Link from "next/link";
import {
  Coins,
  Settings,
  Zap,
  Flame,
  Wrench,
  Factory,
  Cpu,
  HelpCircle,
} from "lucide-react";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../../config/constants";
import SectionHeader from "../SectionHeader";
import SecondaryButton from "../SecondaryButton";
import { metalPrices, lastUpdated } from "../../data/prices";
import { materials, getMaterialByKey } from "../../data/materials";
import OptimizedImage from "../OptimizedImage";

const METAL_ICONS = {
  cobre: <Zap />,
  aluminio: <Settings />,
  bronce: <Coins />,
  "fierro-lata": <Flame />,
  "fierro-largo": <Wrench />,
  "fierro-corto": <Flame />,
  "fierro-mixto": <Factory />,
  electrico: <Cpu />,
  grandes: <Factory />,
  otros: <HelpCircle />,
};

// Create a mapping function to get material images by price ID
const getMaterialImage = (priceId) => {
  const material = materials.find(m => m.key === priceId);
  return material ? material.image : null;
};

const PricesPreviewSection = ({
  title = "Precios de Materiales",
  subtitle = "Consulta todos los materiales que compramos y sus precios actualizados.",
  prices = metalPrices
    .filter(item => item.price !== null && item.id !== 'viruta')
    .map(item => ({
      metal: item.metal.replace(" (diferente)", "").toLowerCase(),
      key: item.id,
      price: item.display,
      image: getMaterialImage(item.id)
    })),
  lastUpdated: updatedTime = lastUpdated,
  ctaText = "Ver todos los precios",
  ctaHref = "/precios",
  whatsappHref = CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.priceInquiry),
  isEnglish = false
}) => {
  return (
    <Background>
      <section id="precios" className={styles.pricesPreviewSection} aria-label={isEnglish ? "Material prices" : "Precios de materiales"}>
        <SectionHeader as="h2">{isEnglish ? "Material Prices" : title}</SectionHeader>
        <p className={styles.subtitle}>{isEnglish ? "Check all the materials we buy and their updated prices." : subtitle}</p>
        <div className={styles.pricesList}>
          {prices.map(({ metal, key, price, image }) => {
            const material = getMaterialByKey(key);
            const materialLink = material?.articleLink || `/materiales/${key}`;
            
            return (
              <Link key={key} href={materialLink} className={styles.priceItemLink}>
                <div className={styles.priceItem}>
                  <div className={styles.materialInfo}>
                    {image ? (
                      <OptimizedImage 
                        src={image} 
                        alt={metal.toUpperCase()}
                        className={styles.previewImage}
                      />
                    ) : (
                      <span className={styles.icon}>{METAL_ICONS[key] || <Coins />}</span>
                    )}
                    <h3 className={styles.metal}>
                      {isEnglish ? `${metal.toUpperCase()} price per kilo today` : `precio del ${metal.toUpperCase()} por kilo hoy`}
                    </h3>
                  </div>
                  <span className={styles.price}>{price}</span>
                </div>
              </Link>
            );
          })}
          
          {/* Other Materials Card */}
          <Link href="/materiales" className={styles.priceItemLink}>
            <div className={`${styles.priceItem} ${styles.otherMaterialsCard}`}>
              <div className={styles.materialInfo}>
                <span className={styles.icon}><HelpCircle /></span>
                <h3 className={styles.metal}>
                  {isEnglish ? "discover all the materials we buy" : "conoce todos los materiales que compramos"}
                </h3>
              </div>
              <span className={styles.price}>{isEnglish ? "View catalog" : "Ver catálogo"}</span>
            </div>
          </Link>
        </div>
        <div className={styles.lastUpdated}>
          {isEnglish ? `Updated: ${updatedTime}` : `Actualizado: ${updatedTime}`}
        </div>
        <div className={styles.ctaGroup}>
          <Link href={ctaHref} className={styles.readMoreLink}>
            {isEnglish ? "View all prices" : ctaText} →
          </Link>
        </div>
      </section>
    </Background>
  );
};

PricesPreviewSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  prices: PropTypes.arrayOf(PropTypes.shape({
    metal: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })),
  lastUpdated: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  whatsappHref: PropTypes.string,
  isEnglish: PropTypes.bool
};

export default PricesPreviewSection;
