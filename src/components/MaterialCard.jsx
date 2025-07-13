// src/components/MaterialCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import OptimizedImage from "./OptimizedImage";
import styles from "./MaterialCard.module.css";

export default function MaterialCard({ name, image, description, tags = [], articleLink }) {
  return (
    <div className={styles.card} aria-label={name}>
      <OptimizedImage
        src={image}
        alt={`Foto de ${name}`}
        className={styles.image}
        width={320}
        height={180}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <p className={styles.description}>{description}</p>
        {articleLink ? (
          <Link to={articleLink} className={styles.readMore}>
            Leer más →
          </Link>
        ) : (
          <span className={styles.soon}>Más info pronto</span>
        )}
      </div>
    </div>
  );
}

MaterialCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  articleLink: PropTypes.string
};
