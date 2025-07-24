import React from 'react';
import FAQInternalLink from '../components/FAQInternalLink';

/**
 * High-impact internal linking opportunities for FAQ
 * Maps keywords/phrases to target pages
 */
const LINK_MAPPINGS = {
  // Pricing related
  'precios actuales': '/precios',
  'precios actualizados': '/precios',
  'precios diarios': '/precios',
  'precios del mercado': '/precios',
  'tarifas del mercado': '/precios',
  'cotización': '/precios',
  
  // Material pages
  'cobre': '/materiales/cobre',
  'aluminio': '/materiales/aluminio', 
  'fierro': '/materiales/fierro-mixto',
  'bronce': '/materiales/bronce',
  'materiales eléctricos': '/materiales/electrico',
  'viruta metálica': '/materiales/viruta',
  'chatarra mixta': '/materiales/fierro-mixto',
  
  // Process page
  'nuestro proceso': '/como-funciona',
  'proceso de pesaje': '/como-funciona',
  'cómo funciona': '/como-funciona',
  
  // Materials index
  'tipos de materiales': '/materiales',
  'qué materiales': '/materiales',
  
  // Why us page
  'por qué elegir': '/por-que-nosotros',
  'nuestras ventajas': '/por-que-nosotros',
  
  // Contact/location
  'ubicación': '/#mapa',
  'dónde estamos': '/#mapa',
  'cómo llegar': '/#mapa',
};

/**
 * Process FAQ answer text and inject internal links
 * @param {string} answerText - The FAQ answer text
 * @param {number} maxLinks - Maximum links per answer (default: 2)
 * @returns {React.Node} - Processed text with internal links
 */
export function processAnswerWithLinks(answerText, maxLinks = 2) {
  if (!answerText || typeof answerText !== 'string') {
    return answerText;
  }

  let processedText = answerText;
  let linkCount = 0;
  const usedLinks = new Set();

  // Sort mappings by phrase length (longest first) to avoid conflicts
  const sortedMappings = Object.entries(LINK_MAPPINGS)
    .sort(([a], [b]) => b.length - a.length);

  // Process each mapping
  const textParts = [];
  let currentIndex = 0;

  for (const [phrase, url] of sortedMappings) {
    if (linkCount >= maxLinks) break;
    if (usedLinks.has(url)) continue; // Avoid duplicate links to same page

    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    const match = processedText.match(regex);

    if (match && match.length > 0) {
      // Find first occurrence
      const matchIndex = processedText.search(regex);
      if (matchIndex !== -1) {
        // Add text before link
        if (matchIndex > currentIndex) {
          textParts.push(processedText.slice(currentIndex, matchIndex));
        }

        // Add link
        textParts.push(
          <FAQInternalLink 
            key={`${url}-${linkCount}`}
            href={url}
            trackingEvent="faq_internal_link_click"
          >
            {match[0]}
          </FAQInternalLink>
        );

        // Update tracking
        linkCount++;
        usedLinks.add(url);
        currentIndex = matchIndex + match[0].length;

        // Remove this occurrence from text to avoid re-processing
        processedText = processedText.replace(regex, '___LINK_PLACEHOLDER___');
      }
    }
  }

  // Add remaining text
  if (currentIndex < answerText.length) {
    textParts.push(answerText.slice(currentIndex));
  }

  // If no links were added, return original text
  if (linkCount === 0) {
    return answerText;
  }

  return (
    <span>
      {textParts.map((part, index) => {
        if (typeof part === 'string') {
          // Restore original text where placeholders were
          return part.replace(/___LINK_PLACEHOLDER___/g, '');
        }
        return part;
      })}
    </span>
  );
}

/**
 * Enhanced answer processing with smart link placement
 * @param {string} answerText - The FAQ answer text
 * @param {Array} customLinks - Optional custom links for specific answers
 * @returns {React.Node} - Processed answer with strategic internal links
 */
export function enhanceAnswerWithLinks(answerText, customLinks = []) {
  if (!answerText) return answerText;

  // Process custom links first (higher priority)
  let enhancedText = answerText;
  let linkCount = 0;

  for (const customLink of customLinks) {
    if (linkCount >= 2) break;
    
    const { phrase, url, trackingEvent } = customLink;
    const regex = new RegExp(`\\b${phrase}\\b`, 'i');
    
    if (regex.test(enhancedText)) {
      enhancedText = enhancedText.replace(regex, (match) => {
        linkCount++;
        return `<INTERNAL_LINK url="${url}" event="${trackingEvent || 'faq_custom_link'}">${match}</INTERNAL_LINK>`;
      });
    }
  }

  // Then process with general mappings
  const remainingLinks = 2 - linkCount;
  if (remainingLinks > 0) {
    return processAnswerWithLinks(enhancedText, remainingLinks);
  }

  return enhancedText;
} 