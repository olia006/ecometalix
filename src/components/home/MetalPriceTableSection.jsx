import React from "react";
import styles from "./MetalPriceTableSection.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { metalPrices, lastUpdated } from "../../data/prices";

// Convert centralized prices to display format
const prices = metalPrices.map(item => ({
  metal: item.metal,
  price: item.display
}));

export default function MetalPriceTableSection() {
  return (
    <section className={styles.priceTableSection} aria-label="Precios actualizados de metales">
      <h2 className={styles.heading}>Precios de Compra de Metales</h2>
      <p className={styles.lastUpdated}>
        <strong>Actualizado:</strong> {lastUpdated}
      </p>

      {/* Optional ErrorMessage for future use */}
      {/* <ErrorMessage message="No se pudieron cargar los precios." /> */}

      <div className={styles.tableWrap}>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th>Metal / Tipo</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {prices.map(({ metal, price }) => (
              <tr key={metal}>
                <td>{metal}</td>
                <td>
                  {price.toLowerCase().includes("consultar") ? (
                    <>
                      <span className={styles.consultar}>Consultar</span>
                      <a
                        href="https://wa.me/56940244042"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                        title="Consultar por WhatsApp"
                      >
                        <FaWhatsapp /> WhatsApp
                      </a>
                    </>
                  ) : (
                    price
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.ctaInfo}>
        <p>
          ¿Tienes grandes volúmenes o materiales especiales?{" "}
          <a
            href="https://wa.me/56940244042"
            className={styles.whatsappCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Cotiza tu precio real por WhatsApp
          </a>
        </p>
        <p className={styles.nota}>
          <em>Los precios son referenciales y pueden variar según el mercado y cantidad. Recomendamos cotizar antes de tu visita.</em>
        </p>
      </div>
    </section>
  );
}
