import React from "react";
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./MaterialPage.module.css";
// Image will be referenced directly as string path
import { getPriceById } from "../../data/prices";
import { CONTACT_URLS, WHATSAPP_MESSAGES } from "../../config/constants";

export default function AluminiumPage() {
  return (
    <>
      {/* SEO is now handled by App Router metadata in /app/materiales/aluminio/page.tsx */}
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="aluminio"
        name="Aluminio"
        subtitle="El metal ligero que revolucionó la industria moderna"
                  image="/images/materials/aluminium.jpg"
        tags={["No ferroso", "Ligero", "Aceptado"]}
        stats={[
          { value: getPriceById("aluminio")?.display || "$1.350", label: "Precio por kg" },
          { value: "3x", label: "Más ligero" },
          { value: "95%", label: "Ahorro energía" }
        ]}
      />

      <div className={styles.container}>

        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características del Aluminio"
              subtitle="El metal del futuro"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Peso</h4>
                <p>Tres veces más ligero que el hierro, ideal para transporte</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Resistencia</h4>
                <p>No magnético, resistente a la corrosión y oxidación</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Conductividad</h4>
                <p>Buen conductor de electricidad y calor</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Reciclabilidad</h4>
                <p>100% reciclable sin pérdida de propiedades</p>
              </div>
            </div>
          </section>

          <article className={styles.section}>
            <div className={styles.storyContent}>
              <h3>Aluminio: innovación, ligereza y futuro sostenible</h3>
              <p><em>
                Desde ser más valioso que el oro hasta convertirse en pilar de la sostenibilidad moderna, el aluminio ha revolucionado industrias enteras con su extraordinaria combinación de ligereza, resistencia y reciclabilidad infinita.
              </em></p>

              <p>
                El aluminio es un metal moderno por excelencia, conocido por su bajo peso, resistencia a la corrosión y alta conductividad. Aunque es el metal más abundante en la corteza terrestre, sólo fue aislado por primera vez en el siglo XIX, revolucionando industrias y estilos de vida (<a href="https://international-aluminium.org/about-aluminium/history-of-aluminium/" rel="noopener noreferrer" target="_blank">International Aluminium Institute</a>).
              </p>
              <p>
                El aluminio se obtiene principalmente de la bauxita a través de procesos avanzados de electrólisis. Gracias a su maleabilidad y capacidad para formar aleaciones, el aluminio se ha convertido en material clave para la aviación, la construcción, el transporte y los envases alimentarios. En Chile, su uso es cada vez más relevante en infraestructuras sostenibles y sistemas de energía renovable.
              </p>
              <p>
                Entre sus propiedades destacan la ligereza, la capacidad de resistir la oxidación y su compatibilidad con innumerables aplicaciones industriales y domésticas. El aluminio se puede reciclar indefinidamente sin perder calidad, lo que lo posiciona como un pilar de la economía circular y la gestión responsable de recursos (<a href="https://www.aluminum.org/industries/production/recycling" rel="noopener noreferrer" target="_blank">The Aluminum Association</a>).
              </p>
              <p>
                La producción de aluminio reciclado ahorra hasta un 95% de la energía requerida para fabricar aluminio primario. Esto reduce la huella de carbono, los residuos y el consumo de recursos naturales, aportando beneficios económicos y ambientales significativos (<a href="https://www.european-aluminium.eu/about-aluminium/aluminium-recycling/" rel="noopener noreferrer" target="_blank">European Aluminium</a>).
              </p>
              <p>
                Así, el aluminio no solo representa innovación y eficiencia, sino también el compromiso con un futuro más sostenible y respetuoso con el medio ambiente.
              </p>
            </div>
          </article>

          <section className={styles.section}>
            <SectionHeader 
              title="Curiosidades sobre el aluminio"
              subtitle="Datos fascinantes respaldados por la ciencia"
            />
            <div className={styles.curiositiesGrid}>
              <div className={styles.curiosityItem}>
                <h4>El metal ligero que revolucionó la aviación</h4>
                <p>
                  Más de un 80% de las partes de los aviones comerciales modernos están hechas de aleaciones de aluminio debido a su extraordinaria ligereza y resistencia (<a href="https://international-aluminium.org/" rel="noopener noreferrer" target="_blank">International Aluminium Institute</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Reciclaje ultra eficiente</h4>
                <p>
                  El reciclaje de una lata de aluminio ahorra la energía necesaria para mantener encendida una bombilla LED durante más de 20 horas (<a href="https://www.aluminum.org/industries/production/recycling" rel="noopener noreferrer" target="_blank">The Aluminum Association</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Infinitas vidas útiles</h4>
                <p>
                  El aluminio puede reciclarse una y otra vez sin perder ninguna de sus propiedades, lo que lo convierte en uno de los materiales más sostenibles del planeta (<a href="https://www.european-aluminium.eu/about-aluminium/aluminium-recycling/" rel="noopener noreferrer" target="_blank">European Aluminium</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Protección invisible</h4>
                <p>
                  Cuando el aluminio se expone al aire, forma espontáneamente una delgada capa de óxido que lo protege de la corrosión, razón por la cual se utiliza ampliamente en ventanas, techos y estructuras exteriores.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Del lujo a lo cotidiano</h4>
                <p>
                  A principios del siglo XX, el aluminio era considerado más valioso que el oro y solo se utilizaba en objetos de lujo y joyería. Hoy es uno de los materiales más comunes y accesibles en el mundo.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader 
              title="Fuentes y referencias"
              subtitle="Información respaldada por instituciones profesionales"
            />
            <div className={styles.references}>
              <ul>
                <li><a href="https://international-aluminium.org/about-aluminium/history-of-aluminium/" rel="noopener noreferrer" target="_blank">International Aluminium Institute</a></li>
                <li><a href="https://www.aluminum.org/industries/production/recycling" rel="noopener noreferrer" target="_blank">The Aluminum Association</a></li>
                <li><a href="https://www.european-aluminium.eu/about-aluminium/aluminium-recycling/" rel="noopener noreferrer" target="_blank">European Aluminium</a></li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes aluminio para vender?</h3>
              <p>El aluminio limpio y sin mezclas obtiene el mejor precio. Evaluamos tu material al momento.</p>
              <SecondaryButton 
                href={CONTACT_URLS.whatsappWithText(WHATSAPP_MESSAGES.materialInquiry('aluminio'))}
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