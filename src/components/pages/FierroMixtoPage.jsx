import React from "react";
import { Search } from "lucide-react";
// SEO now handled by App Router metadata
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./MaterialPage.module.css";
import { getPriceById } from "../../data/prices";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../../config/constants";

export default function FierroMixtoPage() {
  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/materiales/fierro-mixto/page.tsx */}
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="fierro-mixto"
        name="Fierro Mixto"
        subtitle="Mezcla versátil de diferentes tipos de metales"
        image={null}
        tags={["Ferroso", "Mixto", "Variable"]}
        stats={[
          { value: getPriceById("fierro-mixto")?.display || "$215", label: "Precio por kg" },
          { value: "100+", label: "Tipos detectables" },
          { value: "0.1%", label: "Precisión separación" },
          { value: "Variable", label: "Composición" }
        ]}
      />

      <div className={styles.container}>

        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características del Fierro Mixto"
              subtitle="Diversidad en un solo material"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Composición</h4>
                <p>Mezcla de diferentes tipos de fierro y otros metales</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Variabilidad</h4>
                <p>Cada lote puede tener composición distinta</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Origen</h4>
                <p>Demoliciones, limpiezas industriales, chatarra diversa</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Evaluación</h4>
                <p>Precio según análisis y composición predominante</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="El Tesoro Oculto de la Chatarra"
              subtitle="Cuando la mezcla crea oportunidades"
            />
            <div className={styles.storyContent}>
              <p>
                El fierro mixto es como una caja de sorpresas para los recicladores. Cada carga 
                puede contener desde hierro fundido centenario hasta aleaciones modernas de alta 
                tecnología. Durante la Gran Depresión, los recolectores de chatarra se especializaron 
                en identificar metales valiosos mezclados con fierro común, convirtiéndose en verdaderos 
                detectives del metal.
              </p>
              <p>
                En Chile, el fierro mixto tiene una historia particular ligada a la industria salitrera 
                y minera. Las oficinas salitreras abandonadas del norte grande se convirtieron en 
                verdaderos yacimientos de chatarra mixta, donde se mezclaban fierros de diferentes 
                épocas y procedencias. Hoy, cada lote de fierro mixto que llega a los centros de 
                reciclaje cuenta historias de diferentes industrias, épocas y usos.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Dato Curioso"
              subtitle="¿Sabías que...?"
            />
                  <div className={styles.factBox}>
        <div className={styles.factIcon}><Search size={24} /></div>
        <div className={styles.factContent}>
                <h4>Los imanes pueden separar más de 100 tipos diferentes de metales</h4>
                <p>
                  Las plantas de reciclaje modernas usan separadores magnéticos tan sofisticados 
                  que pueden distinguir entre más de 100 tipos diferentes de aleaciones férreas. 
                  Algunos imanes son tan potentes que pueden separar metales que difieren en solo 
                  0.1% en su composición. El fierro mixto que parece &ldquo;basura&rdquo; para el ojo humano 
                  puede ser separado en docenas de categorías diferentes, cada una con su propio 
                  valor de mercado.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes fierro mixto para vender?</h3>
              <p>Analizamos tu material para determinar la mejor categorización y precio. Consulta condiciones especiales.</p>
              <SecondaryButton 
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.materialInquiry('fierro mixto'))}
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