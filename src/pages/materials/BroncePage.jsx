import React from "react";
import Seo from "../../components/seo/Seo";
import FloatingCTA from "../../components/FloatingCTA";
import MaterialHero from "../../components/MaterialHero";
import MaterialNavigation from "../../components/MaterialNavigation";
import SectionHeader from "../../components/SectionHeader";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "./MaterialPage.module.css";
import bronceImg from "../../assets/images/materials/bronce.jpg";
import { getPriceById } from "../../data/prices";

export default function BroncePage() {
  return (
    <>
      <Seo
        title="Bronce: Historia, Propiedades y Curiosidades | Ecometalix Spa"
        description="Descubre el bronce: historia, propiedades únicas, valor para Chile y datos fascinantes. Todo sobre bronce reciclado, su importancia y curiosidades científicas."
        canonical="/materiales/bronce"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué es el bronce y cómo se produce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El bronce es una aleación principalmente de cobre y estaño, aunque puede contener otros elementos. Se produce fundiendo ambos metales y mezclándolos en proporciones específicas para obtener distintas propiedades según su uso. (Fuente: Copper Development Association)"
              }
            },
            {
              "@type": "Question",
              "name": "¿Por qué el bronce fue tan importante en la historia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El descubrimiento del bronce permitió a las civilizaciones antiguas crear herramientas, armas y artefactos mucho más resistentes que los de piedra o cobre puro, impulsando grandes avances en tecnología, arte y sociedad. (Fuente: The Metropolitan Museum of Art)"
              }
            },
            {
              "@type": "Question",
              "name": "¿El bronce se puede reciclar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, el bronce se puede reciclar múltiples veces sin perder calidad. Su reciclaje es clave para la economía circular y la protección ambiental. (Fuente: International Copper Association)"
              }
            }
          ]
        }}
      />
      
      <FloatingCTA />
      
      <MaterialHero
        materialKey="bronce"
        name="Bronce"
        subtitle="La aleación noble que marcó una era en la historia"
        image={bronceImg}
        tags={["No ferroso", "Aleación", "Aceptado"]}
        stats={[
          { value: getPriceById("bronce")?.display || "$2.800", label: "Precio por kg" },
          { value: "88%", label: "Cobre" },
          { value: "3500 a.C.", label: "Primera aleación" }
        ]}
      />

      <div className={styles.container}>

        <div className={styles.content}>
          <section className={styles.section}>
            <SectionHeader 
              title="Características del Bronce"
              subtitle="La aleación que cambió la historia"
            />
            <div className={styles.characteristics}>
              <div className={styles.characteristicItem}>
                <h4>Composición</h4>
                <p>Aleación de cobre (88%) y estaño (12%), no magnética</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Color</h4>
                <p>Dorado amarillento a marrón rojizo, más oscuro que el latón</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Dureza</h4>
                <p>Más duro que el cobre puro, resistente al desgaste</p>
              </div>
              <div className={styles.characteristicItem}>
                <h4>Aplicaciones</h4>
                <p>Esculturas, campanas, cojinetes, instrumentos musicales</p>
              </div>
            </div>
          </section>

          <article className={styles.section}>
            <div className={styles.storyContent}>
              <h3>El bronce: la aleación que cambió la historia humana</h3>
              <p><em>
                Desde la Edad del Bronce hasta las aplicaciones industriales modernas, esta aleación de cobre y estaño ha sido fundamental para el desarrollo tecnológico, artístico e industrial de la humanidad.
              </em></p>

              <p>
                El bronce es una de las aleaciones más antiguas y valiosas creadas por la humanidad, formada principalmente por cobre y estaño. Su invención, hace más de 5,000 años, marcó el inicio de la Edad del Bronce, una etapa de avances tecnológicos que transformó herramientas, armas, arte y civilizaciones enteras (<a href="https://www.metmuseum.org/toah/hd/tlbr/hd_tlbr.htm" rel="noopener noreferrer" target="_blank">The Metropolitan Museum of Art</a>).
              </p>
              <p>
                En América y en Chile, el bronce fue utilizado por culturas precolombinas para la creación de ornamentos, instrumentos musicales, y utensilios ceremoniales. Gracias a su resistencia, durabilidad y facilidad de fundición, el bronce se consolidó como material predilecto para escultores, arquitectos y artesanos durante siglos.
              </p>
              <p>
                Hoy en día, el bronce sigue siendo esencial en la industria moderna. Se utiliza en componentes de maquinaria, piezas de barcos, válvulas, engranajes, sistemas hidráulicos y en la fabricación de instrumentos musicales de alta calidad. Su resistencia a la corrosión y su excelente conductividad lo hacen ideal para aplicaciones industriales y eléctricas (<a href="https://www.copper.org/applications/industrial/bronze_alloys.html" rel="noopener noreferrer" target="_blank">Copper Development Association</a>).
              </p>
              <p>
                El bronce también destaca en el arte y la cultura, siendo protagonista en esculturas monumentales y restauraciones patrimoniales. Su belleza, capacidad de ser moldeado y resistencia al paso del tiempo lo han convertido en símbolo de creatividad y permanencia.
              </p>
              <p>
                El reciclaje del bronce es fundamental para la sostenibilidad ambiental: puede fundirse y reutilizarse indefinidamente sin perder sus propiedades. Esto reduce la extracción de recursos naturales y promueve la economía circular (<a href="https://copperalliance.org/about-copper/recycling/" rel="noopener noreferrer" target="_blank">International Copper Association</a>).
              </p>
            </div>
          </article>

          <section className={styles.section}>
            <SectionHeader 
              title="Curiosidades sobre el bronce"
              subtitle="Datos fascinantes respaldados por la ciencia"
            />
            <div className={styles.curiositiesGrid}>
              <div className={styles.curiosityItem}>
                <h4>¿Por qué el bronce fue tan revolucionario?</h4>
                <p>
                  El descubrimiento del bronce permitió crear herramientas, armas y objetos mucho más resistentes y duraderos que los de piedra o cobre puro, transformando la economía y las sociedades antiguas (<a href="https://www.metmuseum.org/toah/hd/tlbr/hd_tlbr.htm" rel="noopener noreferrer" target="_blank">The Met</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Bronce en la industria moderna</h4>
                <p>
                  El bronce es esencial en maquinaria pesada, engranajes, válvulas industriales, hélices de barcos y sistemas hidráulicos gracias a su resistencia a la corrosión y desgaste (<a href="https://www.copper.org/applications/industrial/bronze_alloys.html" rel="noopener noreferrer" target="_blank">Copper Development Association</a>).
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Sonido inconfundible</h4>
                <p>
                  Muchos instrumentos musicales, como campanas, platillos y saxofones, se fabrican en bronce por su excelente resonancia y calidad sonora.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Arte inmortal</h4>
                <p>
                  El bronce ha sido el material preferido para esculturas monumentales y arte público, resistiendo siglos de clima y exposición sin perder belleza.
                </p>
              </div>

              <div className={styles.curiosityItem}>
                <h4>Reciclaje sin fin</h4>
                <p>
                  El bronce reciclado mantiene todas sus propiedades, permitiendo su reutilización constante y fomentando la sostenibilidad y la economía circular (<a href="https://copperalliance.org/about-copper/recycling/" rel="noopener noreferrer" target="_blank">International Copper Association</a>).
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
                <li><a href="https://www.metmuseum.org/toah/hd/tlbr/hd_tlbr.htm" rel="noopener noreferrer" target="_blank">The Metropolitan Museum of Art</a></li>
                <li><a href="https://www.copper.org/applications/industrial/bronze_alloys.html" rel="noopener noreferrer" target="_blank">Copper Development Association</a></li>
                <li><a href="https://copperalliance.org/about-copper/recycling/" rel="noopener noreferrer" target="_blank">International Copper Association</a></li>
              </ul>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>¿Tienes bronce para vender?</h3>
              <p>Obtén el mejor precio por tu chatarra de bronce. Evaluamos la calidad y pagamos inmediatamente.</p>
              <PrimaryButton 
                href="https://wa.me/56912345678?text=Hola,%20tengo%20bronce%20para%20vender"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </PrimaryButton>
            </div>
          </section>
        </div>
      </div>
      
      <MaterialNavigation />
    </>
  );
} 