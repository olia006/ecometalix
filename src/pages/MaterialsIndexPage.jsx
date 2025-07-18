"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Seo from "../components/seo/Seo";
import FloatingCTA from "../components/FloatingCTA";
import Breadcrumb from "../components/Breadcrumb";
import PageHeader from "../components/PageHeader";
import MaterialCard from "../components/MaterialCard";
import { Search, Filter, X, ArrowRight, Info } from "lucide-react";
import { materials } from "../data/materials";
import { CONTACT_URLS } from "../config/constants";
import styles from "./MaterialsIndexPage.module.css";
import SecondaryButton from "../components/SecondaryButton";

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
      <section className="professional-section search-section">
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar materiales..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {(searchTerm || selectedCategory !== "all") && (
              <button
                onClick={clearSearch}
                className="search-clear-button"
                aria-label="Limpiar búsqueda"
              >
                <X />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`filter-toggle ${showFilters ? 'filter-toggle--active' : ''}`}
            aria-label="Mostrar filtros"
          >
            <Filter />
            Filtros
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="filter-panel">
            <div className="professional-card">
              <div className="filter-group">
                <label htmlFor="category-filter" className="filter-label">Categoría:</label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
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
          </div>
        )}

        {/* Results Counter */}
        <div className="results-info">
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
      <section className="professional-section">
        <div className="section-container">
          <div className="materials-grid">
            {filteredMaterials.map((material) => (
              <MaterialCard key={material.key} {...material} />
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="professional-card no-results">
              <h3 className="card-title">No se encontraron materiales</h3>
              <p className="card-description">Prueba con otros términos de búsqueda o cambia los filtros.</p>
              <button 
                onClick={clearSearch} 
                className="no-results-button"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Prohibited Materials Section */}
      <section className="professional-section professional-background">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-sm)' }}>
              <Info size={20} className="section-title-icon" /> Materiales Prohibidos y Restringidos
            </h2>
            <p className="section-subtitle">
              En EcoMetalix Spa, cumplimos rigurosamente con la legislación chilena para garantizar un reciclaje responsable y seguro. Por ello, no aceptamos los siguientes materiales como chatarra:
            </p>
          </div>
          
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: 'var(--font-weight-semibold)', 
              color: 'var(--color-text-heading)', 
              marginBottom: 'var(--space-xl)',
              textAlign: 'center'
            }}>Lista de materiales prohibidos</h3>
            
            <div className="professional-grid professional-grid--2">
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Cables Eléctricos y de Comunicación</h4>
                <p className="card-description">Prohibido recibir cables eléctricos, telefónicos o de fibra óptica sin documentación que acredite origen legal.</p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Propiedad Pública</h4>
                <p className="card-description">No se reciben tapas de alcantarilla, señales de tránsito, barandas, luminarias, rejillas de desagüe, rieles, mobiliario urbano ni cualquier elemento de propiedad estatal o municipal.</p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Chatarra de Infraestructura Crítica</h4>
                <p className="card-description">Prohibido comprar materiales provenientes de puentes, líneas eléctricas, torres de telecomunicaciones, tuberías, vías férreas, estaciones eléctricas, etc., sin documentación oficial del propietario o empresa responsable.</p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Piezas y Partes de Vehículos</h4>
                <p className="card-description">Prohibido recibir motores, catalizadores, o partes de autos, camiones o motos sin documentos que acrediten propiedad legal.</p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Materiales Explosivos o de Uso Militar</h4>
                <p className="card-description">No aceptamos municiones, armas, explosivos, partes de equipamiento militar o similares.</p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Materiales Radioactivos o Peligrosos</h4>
                <p className="card-description">Prohibido todo material con radioactividad, asbesto, químicos tóxicos, baterías con ácido, tambores contaminados u otros residuos peligrosos.</p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Electrodomésticos y Máquinas en Funcionamiento</h4>
                <p className="card-description">No recibimos electrodomésticos o maquinaria que esté en buen estado o funcionando. Solo se aceptan equipos totalmente fuera de uso y desmantelados.</p>
              </div>
              
              <div className="professional-card professional-card--light">
                <h4 className="card-title prohibited-card-title">Metales Mixtos o Contaminados</h4>
                <p className="card-description">No se acepta chatarra mezclada con aceites, tierra, madera, goma, plásticos u otros residuos no metálicos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="professional-section">
        <div className="section-container--md">
          <div className="professional-cta">
            <h2 className="cta-title">¿No encuentras tu material?</h2>
            <p className="cta-description">
              Contáctanos por WhatsApp para consultar sobre materiales específicos o revisa nuestros precios actualizados
            </p>
            <div className="cta-buttons">
              <a
                href={CONTACT_URLS.whatsappWithText("Hola, tengo un material que no está en la lista")}
                target="_blank"
                rel="noopener noreferrer"
                className="buttonLink"
              >
                <SecondaryButton>
                  Consultar por WhatsApp
                </SecondaryButton>
              </a>
              <Link href="/precios" className="buttonLink">
                <SecondaryButton>
                  Ver precios <ArrowRight size={14} />
                </SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 