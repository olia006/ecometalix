// src/components/PricesPreviewSection.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./PricesPreviewSection.module.css";
import Background from "../Background";
import { Link } from "react-router-dom";
import {
  FaCoins,
  FaCogs,
  FaBolt,
  FaFire,
  FaWrench,
  FaIndustry,
  FaMemory,
  FaQuestionCircle,
} from "react-icons/fa";
import SectionHeader from "../SectionHeader";
import { metalPrices, lastUpdated } from "../../data/prices";

const METAL_ICONS = {
  cobre: <FaBolt />,
  aluminio: <FaCogs />,
  bronce: <FaCoins />,
  "fierro-lata": <FaFire />,
  "fierro-largo": <FaWrench />,
  "fierro-corto": <FaFire />,
  "fierro-mixto": <FaIndustry />,
  electrico: <FaMemory />,
  grandes: <FaIndustry />,
  otros: <FaQuestionCircle />,
};

const PricesPreviewSection = ({
  title = "Precios de Materiales",
  subtitle = "Consulta todos los materiales que compramos y sus precios actualizados.",
  prices = metalPrices
    .filter(item => item.price !== null)
    .map(item => ({
      metal: item.metal.replace(" (diferente)", "").toLowerCase(),
      key: item.id,
      price: item.display
    })),
  lastUpdated: updatedTime = lastUpdated,
  ctaText = "Ver todos los precios",
  ctaHref = "/precios",
  whatsappHref = "https://wa.me/56912345678?text=Hola,%20quisiera%20cotizar%20el%20precio%20de%20mi%20chatarra"
}) => {
  return (
    <Background>
      <section className={styles.pricesPreviewSection} aria-label="Precios de materiales">
        <SectionHeader>{title}</SectionHeader>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.pricesList}>
          {prices.map(({ metal, key, price }) => (
            <div key={key} className={styles.priceItem}>
              <span className={styles.icon}>{METAL_ICONS[key] || <FaCoins />}</span>
              <h2 className={styles.metal}>precio del {metal} por kilo hoy</h2>
              <span className={styles.price}>{price}</span>
            </div>
          ))}
        </div>
        <div className={styles.lastUpdated}>Actualizado: {updatedTime}</div>
        <div className={styles.ctaGroup}>
          <Link to={ctaHref} className={styles.primaryBtn}>
            {ctaText}
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Cotizar por WhatsApp
          </a>
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
  whatsappHref: PropTypes.string
};

export default PricesPreviewSection;
