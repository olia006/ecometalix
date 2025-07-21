import React from "react";
// SEO now handled by App Router metadata
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./MaterialPage.module.css";
// Image will be referenced directly as string path
import { getPriceById } from "../../data/prices";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../../config/constants";

export default function FierroLargoPage() {
  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/materiales/fierro-largo/page.tsx */}
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="fierro-largo"
        name="Fierro Largo"
        subtitle="Estructuras robustas que construyeron ciudades"
                  image="/images/materials/FierroLargo.jpg"
        tags={["Ferroso", "Voluminoso", "Aceptado"]}
        stats={[
          { value: getPriceById("fierro-largo")?.display || "$240", label: "Precio por kg" },
          { value: ">1m", label: "Longitud mín." },
          { value: "410", label: "Días Empire State" },
          { value: "60,000", label: "Toneladas acero" }
        ]}
      />

      <div className={styles.container}>

        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características del Fierro Largo"
              subtitle="El esqueleto de la construcción moderna"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Dimensiones</h4>
                <p>Barras, perfiles y tubos de más de 1 metro de longitud</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Resistencia</h4>
                <p>Alta resistencia estructural, ideal para construcción</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Formas</h4>
                <p>Vigas, columnas, rieles, tubos y perfiles diversos</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Origen</h4>
                <p>Demoliciones, reformas y proyectos de construcción</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Los Huesos de Acero de las Ciudades"
              subtitle="Cuando el fierro cambió la arquitectura"
            />
            <div className={styles.storyContent}>
              <p>
                El fierro largo transformó para siempre la forma en que construimos ciudades. Antes del 
                siglo XIX, los edificios estaban limitados por la resistencia de la piedra y la madera. 
                La introducción de perfiles de acero permitió construir los primeros rascacielos, 
                cambiando el horizonte urbano para siempre.
              </p>
              <p>
                En Chile, el fierro largo llegó masivamente durante la época del salitre, cuando se 
                construyeron las primeras líneas férreas que conectaron el norte con el centro del país. 
                Cada riel, cada viga de las estaciones, cada estructura industrial cuenta la historia 
                de cómo el acero estructural ayudó a unificar territorialmente a Chile. Hoy, cuando 
                demolemos edificios antiguos, ese mismo fierro largo vuelve a tener vida en nuevas 
                construcciones.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Dato Curioso"
              subtitle="¿Sabías que...?"
            />
            <div className={styles.factBox}>
              <div className={styles.factIcon}>🏗️</div>
              <div className={styles.factContent}>
                <h4>El Empire State Building se construyó en 410 días</h4>
                <p>
                  La estructura de acero del Empire State Building fue tan eficiente que se construyó 
                  a un ritmo de 14 pisos por semana. Los trabajadores instalaban 60,000 toneladas de 
                  vigas de acero con una precisión milimétrica. El edificio usó suficiente acero 
                  estructural como para construir una línea férrea desde Nueva York hasta Baltimore. 
                  Cada viga reciclada de demoliciones similares puede dar vida a nuevos proyectos 
                  arquitectónicos.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes fierro largo para vender?</h3>
              <p>Aceptamos vigas, perfiles y tubos largos. Facilitamos el transporte de materiales voluminosos.</p>
              <SecondaryButton 
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.materialInquiry('fierro largo'))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
      
      <MaterialNavigation />
    </>
  );
} 