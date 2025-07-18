import React from 'react';
import PropTypes from 'prop-types';
import SectionCard from './SectionCard';
import styles from './SectionCardsGrid.module.css';

// Material images for backgrounds (using public paths)

const SectionCardsGrid = ({ isEnglish = false }) => {

  const cards = [
    {
      id: 'proceso',
      title: isEnglish ? 'How it works?' : '¿Cómo funciona?',
      description: isEnglish ? 'Discover our simple and transparent process' : 'Descubre nuestro proceso simple y transparente',
      variant: 'accent',
      backgroundImage: '/images/materials/materialhero.jpg',
      href: isEnglish ? '/en/como-funciona' : '/como-funciona'
    },
    {
      id: 'materiales',
      title: isEnglish ? 'Materials' : 'Materiales',
      description: isEnglish ? 'Explore the types of metals we buy' : 'Explora los tipos de metales que compramos',
      variant: 'neutral',
      backgroundImage: '/images/materials/fierromixto.JPG',
      href: '/materiales'
    },
    {
      id: 'porque-nosotros',
      title: isEnglish ? 'Why choose us?' : '¿Por qué nosotros?',
      description: isEnglish ? 'Learn the advantages of choosing EcoMetalix' : 'Conoce las ventajas de elegir EcoMetalix',
      variant: 'secondary',
      backgroundImage: '/images/materials/FierroLargo.jpg',
      href: isEnglish ? '/en/why-us' : '/por-que-nosotros'
    },
    {
      id: 'faq',
      title: isEnglish ? 'Frequently Asked Questions' : 'Preguntas Frecuentes',
      description: isEnglish ? 'Find answers to common questions about our services' : 'Encuentra respuestas a preguntas comunes sobre nuestros servicios',
      variant: 'primary',
      backgroundImage: '/images/faqpreviewpage.jpg',
      href: '/faq'
    }
  ];

  return (
    <section className={styles.sectionCardsGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <SectionCard
              key={card.id}
              title={card.title}
              description={card.description}
              variant={card.variant}
              backgroundImage={card.backgroundImage}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

SectionCardsGrid.propTypes = {
  isEnglish: PropTypes.bool
};

export default SectionCardsGrid; 