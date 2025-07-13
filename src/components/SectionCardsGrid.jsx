import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionCard from './SectionCard';
import styles from './SectionCardsGrid.module.css';

// Material images for backgrounds
import fierroMixto from '../assets/images/materials/fierromixto.JPG';
import materialhero from '../assets/images/materials/materialhero.jpg';
import aluminium from '../assets/images/materials/aluminium.jpg';
import fierroLargo from '../assets/images/materials/FierroLargo.jpg';

const SectionCardsGrid = ({ isEnglish = false }) => {
  const [isProcesoFlipped, setIsProcesoFlipped] = useState(false);

  const cards = [

    {
      id: 'materiales',
      title: isEnglish ? 'Materials' : 'Materiales',
      description: isEnglish ? 'Explore the types of metals we buy' : 'Explora los tipos de metales que compramos',
      variant: 'neutral',
      backgroundImage: fierroMixto,
      href: '/materiales'
    },
    {
      id: 'faq',
      title: isEnglish ? 'Frequently Asked Questions' : 'Preguntas Frecuentes',
      description: isEnglish ? 'Find answers to common questions about our services' : 'Encuentra respuestas a preguntas comunes sobre nuestros servicios',
      variant: 'primary',
      backgroundImage: aluminium,
      href: '/faq'
    },
    {
      id: 'proceso',
      title: isEnglish ? 'How it works?' : '¿Cómo funciona?',
      description: isEnglish ? 'Discover our simple and transparent process' : 'Descubre nuestro proceso simple y transparente',
      variant: 'accent',
      backgroundImage: materialhero,
      isFlippable: true,
      isFlipped: isProcesoFlipped,
      onClick: () => setIsProcesoFlipped(!isProcesoFlipped),
      backContent: isEnglish ? 
        'Our simple process: 1) Bring your scrap, 2) We weigh with certified scale, 3) You receive instant payment.' :
        'Nuestro proceso simple: 1) Traes tu chatarra, 2) Pesamos con balanza certificada, 3) Recibes tu pago inmediato.'
    },
    {
      id: 'porque-nosotros',
      title: isEnglish ? 'Why choose us?' : '¿Por qué nosotros?',
      description: isEnglish ? 'Learn the advantages of choosing EcoMetalix' : 'Conoce las ventajas de elegir EcoMetalix',
      variant: 'secondary',
      backgroundImage: fierroLargo,
      href: isEnglish ? '/en/why-us' : '/por-que-nosotros'
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
              onClick={card.onClick}
              isFlippable={card.isFlippable}
              isFlipped={card.isFlipped}
              backContent={card.backContent}
              animatedPrice={card.animatedPrice}
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