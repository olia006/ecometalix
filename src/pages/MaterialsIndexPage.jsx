import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import FloatingCTA from "../components/FloatingCTA";
import Breadcrumb from "../components/Breadcrumb";
import PageHeader from "../components/PageHeader";
import MaterialCard from "../components/MaterialCard";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { materials } from "../data/materials";
import styles from "./MaterialsIndexPage.module.css";

export default function MaterialsIndexPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories from materials
  const categories = useMemo(() => {
    const cats = new Set();
    materials.forEach(material => {
      material.tags.forEach(tag => cats.add(tag));
    });
    return Array.from(cats);
  }, []);

  // Filter materials based on search and category
  const filteredMaterials = useMemo(() => {
    return materials.filter(material => {
      const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          material.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || 
                            material.tags.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);



  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return (
    <>
      <Seo
        title="Materiales que Compramos - Lista Completa | Ecometalix Spa"
        description="Encuentra todos los materiales que compramos en Ecometalix: fierro, cobre, aluminio, bronce, electrónicos y más. Precios actualizados y detalles completos."
        canonical="/materiales"
        keywords="materiales reciclaje, fierro, cobre, aluminio, bronce, electrónicos, chatarra santiago, metales reciclables"
      />
      
      <FloatingCTA />
      
      {/* Breadcrumb */}
      <div className={styles.breadcrumbContainer}>
        <Breadcrumb />
      </div>

      {/* Page Header */}
      <PageHeader
        title="Materiales que Compramos"
        subtitle="Encuentra información detallada sobre todos los metales y materiales que aceptamos en nuestra planta de reciclaje"
        variant="primary"
      />

      {/* Search and Filter Section */}
      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar materiales..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {(searchTerm || selectedCategory !== "all") && (
              <button
                onClick={clearSearch}
                className={styles.clearButton}
                aria-label="Limpiar búsqueda"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={styles.filterToggle}
            aria-label="Mostrar filtros"
          >
            <FaFilter />
            Filtros
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className={styles.filterOptions}>
            <div className={styles.filterGroup}>
              <label htmlFor="category-filter" className={styles.filterLabel}>Categoría:</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">Todos</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className={styles.resultsInfo}>
          {filteredMaterials.length === materials.length ? (
            <span>Mostrando todos los {materials.length} materiales</span>
          ) : (
            <span>
              Mostrando {filteredMaterials.length} de {materials.length} materiales
              {searchTerm && ` que contienen "${searchTerm}"`}
              {selectedCategory !== "all" && ` en categoría "${selectedCategory}"`}
            </span>
          )}
        </div>
      </section>

      {/* Materials Grid */}
      <section className={styles.materialsSection}>
        <div className={styles.materialsGrid}>
          {filteredMaterials.map((material) => (
            <MaterialCard key={material.key} {...material} />
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className={styles.noResults}>
            <h3>No se encontraron materiales</h3>
            <p>Prueba con otros términos de búsqueda o cambia los filtros.</p>
            <button onClick={clearSearch} className={styles.clearFiltersButton}>
              Limpiar filtros
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿No encuentras tu material?</h2>
          <p>Contáctanos por WhatsApp para consultar sobre materiales específicos</p>
          <div className={styles.ctaButtons}>
            <Link to="/precios" className={styles.ctaButton}>
              Ver Precios
            </Link>
            <a
              href="https://wa.me/56940244042?text=Hola,%20tengo%20un%20material%20que%20no%20está%20en%20la%20lista"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonSecondary}
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 