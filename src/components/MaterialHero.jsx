import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "./Breadcrumb";
import OptimizedImage from "./OptimizedImage";
import styles from "./MaterialHero.module.css";

export default function MaterialHero({ 
  materialKey,
  name, 
  subtitle, 
  image, 
  tags = [], 
  stats = null,
  colorScheme = "default"
}) {
  // Dynamic color schemes based on material type
  const getColorScheme = (key) => {
    const schemes = {
      cobre: "copper",
      bronce: "bronze", 
      aluminio: "aluminum",
      "fierro-lata": "iron",
      "fierro-largo": "iron-dark",
      "fierro-corto": "iron-light",
      "fierro-mixto": "mixed",
      viruta: "shavings",
      electrico: "electric"
    };
    return schemes[key] || "default";
  };

  const scheme = colorScheme === "default" ? getColorScheme(materialKey) : colorScheme;

  return (
    <section className={`${styles.hero} ${styles[`hero--${scheme}`]}`}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbWrapper}>
        <Breadcrumb 
          items={[
            { label: "Inicio", href: "/" },
            { label: "Materiales", href: "/precios" },
            { label: name, href: `/materiales/${materialKey}` }
          ]}
        />
      </div>

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          
          {/* Left: Material Info */}
          <div className={styles.info}>
            <div className={styles.category}>
              Material de Reciclaje
            </div>
            
            <h1 className={styles.title}>{name}</h1>
            
            <p className={styles.subtitle}>{subtitle}</p>
            
            {/* Tags with dynamic styling */}
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span 
                  key={tag} 
                  className={`${styles.tag} ${styles[`tag--${index + 1}`]}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Optional stats/quick facts */}
            {stats && (
              <div className={styles.stats}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.stat}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Visual Element */}
          <div className={styles.visual}>
            {image ? (
              <div className={styles.imageWrapper}>
                <OptimizedImage 
                  src={image} 
                  alt={`${name} - Material de reciclaje`} 
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>
            ) : (
              <div className={styles.placeholder}>
                <div className={styles.placeholderIcon}>
                  {materialKey === 'fierro-mixto' ? '⚙️' : '🔧'}
                </div>
                <span>Imagen próximamente</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom: Material-specific visual indicator */}
        <div className={styles.indicator}>
          <div className={styles.indicatorLine} />
          <div className={styles.indicatorText}>
            Información detallada sobre {name.toLowerCase()}
          </div>
          <div className={styles.indicatorLine} />
        </div>
      </div>
    </section>
  );
} 

MaterialHero.propTypes = {
  materialKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  stats: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  colorScheme: PropTypes.string
}; 