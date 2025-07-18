"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FAQAccordion.module.css';

const FAQAccordion = ({ 
  categories, 
  showOneAtTime = false, 
  variant = 'default' 
}) => {
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (catIdx, qIdx) => {
    const itemKey = `${catIdx}_${qIdx}`;
    
    setOpenItems(prev => {
      if (showOneAtTime) {
        // Close all other items when opening a new one
        const isCurrentlyOpen = prev[itemKey];
        return isCurrentlyOpen ? {} : { [itemKey]: true };
      } else {
        // Toggle individual item
        return {
          ...prev,
          [itemKey]: !prev[itemKey]
        };
      }
    });
  };

  const isOpen = (catIdx, qIdx) => !!openItems[`${catIdx}_${qIdx}`];

  return (
    <div className={`${styles.faqAccordion} ${styles[variant]}`}>
      {categories.map((category, catIdx) => (
        <div key={category.title || catIdx} className={styles.faqCategory}>
          {category.title && (
            <h3 className={styles.categoryTitle}>{category.title}</h3>
          )}
          
          <div className={styles.faqList}>
            {category.faqs.map((faq, qIdx) => {
              const itemKey = `${catIdx}_${qIdx}`;
              const expanded = isOpen(catIdx, qIdx);
              
              return (
                <div key={faq.question} className={styles.faqItem}>
                  <button
                    id={`faq-question-${itemKey}`}
                    className={`${styles.faqQuestion} ${expanded ? styles.expanded : ''}`}
                    onClick={() => handleToggle(catIdx, qIdx)}
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${itemKey}`}
                    type="button"
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <span 
                      className={`${styles.indicator} ${expanded ? styles.indicatorExpanded : ''}`}
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path 
                          d="M12 6L8 10L4 6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  
                  <div
                    id={`faq-answer-${itemKey}`}
                    className={`${styles.faqAnswer} ${expanded ? styles.answerExpanded : ''}`}
                    role="region"
                    aria-labelledby={`faq-question-${itemKey}`}
                  >
                    <div className={styles.answerContent}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

FAQAccordion.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      faqs: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  showOneAtTime: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'preview', 'compact'])
};

export default FAQAccordion; 