"use client";

import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Search, X, Filter } from 'lucide-react';
import styles from './FAQAccordion.module.css';

const FAQAccordion = ({ 
  categories, 
  showOneAtTime = false, 
  variant = 'default' 
}) => {
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sophisticated search and filtering logic
  const filteredCategories = useMemo(() => {
    if (!searchTerm && selectedCategory === 'all') {
      return categories;
    }

    return categories.map(category => {
      // Filter by category first
      if (selectedCategory !== 'all' && category.title !== selectedCategory) {
        return null;
      }

      // Filter FAQs by search term (questions + answers)
      const filteredFaqs = searchTerm 
        ? category.faqs.filter(faq => {
            const searchLower = searchTerm.toLowerCase();
            const questionMatch = faq.question.toLowerCase().includes(searchLower);
            // Handle both string and React element answers for search
            const answerText = typeof faq.answer === 'string' 
              ? faq.answer 
              : (faq.answer?.props?.children || '').toString();
            const answerMatch = answerText.toLowerCase().includes(searchLower);
            return questionMatch || answerMatch;
          })
        : category.faqs;

      // Only return category if it has matching FAQs
      return filteredFaqs.length > 0 ? {
        ...category,
        faqs: filteredFaqs
      } : null;
    }).filter(Boolean); // Remove null categories
  }, [categories, searchTerm, selectedCategory]);

  // Get unique category titles for filter dropdown
  const categoryOptions = useMemo(() => {
    return ['all', ...categories.map(cat => cat.title).filter(Boolean)];
  }, [categories]);

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

  // Search helper functions
  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Don't show search in preview variant
  const showSearch = variant !== 'preview';

  return (
    <div className={`${styles.faqAccordion} ${styles[variant]}`}>
      {/* Sophisticated Search Interface */}
      {showSearch && (
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <div className={styles.searchInputGroup}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Buscar en preguntas y respuestas..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={styles.searchInput}
                aria-label="Buscar FAQs"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className={styles.clearButton}
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className={styles.filterGroup}>
              <div className={styles.filterDropdownContainer}>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`${styles.filterToggle} ${showFilters ? styles.active : ''}`}
                  aria-label="Filtrar categorías"
                >
                  <Filter size={16} />
                  {selectedCategory === 'all' ? 'Todas las categorías' : selectedCategory}
                </button>
                
                {showFilters && (
                  <div className={styles.filterDropdown}>
                    <button
                      onClick={() => {setSelectedCategory('all'); setShowFilters(false);}}
                      className={`${styles.filterOption} ${selectedCategory === 'all' ? styles.filterOptionActive : ''}`}
                    >
                      Todas las categorías
                    </button>
                    {categoryOptions.slice(1).map(category => (
                      <button
                        key={category}
                        onClick={() => {setSelectedCategory(category); setShowFilters(false);}}
                        className={`${styles.filterOption} ${selectedCategory === category ? styles.filterOptionActive : ''}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Search Results Summary */}
          {(searchTerm || selectedCategory !== 'all') && (
            <div className={styles.searchSummary}>
              {filteredCategories.length === 0 ? (
                                 <span className={styles.noResults}>
                   No se encontraron resultados para &quot;{searchTerm}&quot;
                 </span>
              ) : (
                <span className={styles.resultsCount}>
                  {filteredCategories.reduce((total, cat) => total + cat.faqs.length, 0)} resultado(s) encontrado(s)
                  {selectedCategory !== 'all' && ` en "${selectedCategory}"`}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* FAQ Categories and Items */}
      {filteredCategories.map((category, catIdx) => (
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
                      {typeof faq.answer === 'string' ? (
                        <p>{faq.answer}</p>
                      ) : (
                        <div>{faq.answer}</div>
                      )}
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
          answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
        })
      ).isRequired
    })
  ).isRequired,
  showOneAtTime: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'preview', 'compact'])
};

export default FAQAccordion; 