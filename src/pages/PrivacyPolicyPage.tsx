"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './LegalPages.module.css';
import { Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader 
        title="Política de Privacidad"
        subtitle="Protegemos tu información personal con los más altos estándares de seguridad"
      />

      <section className={styles.pageSection}>
        <div className={styles.container}>
          
          {/* Last Updated */}
          <div className={styles.lastUpdated}>
            <p className={styles.lastUpdatedText}>
              <strong>Última actualización:</strong> 8 de julio 2025
            </p>
          </div>

          {/* Introduction */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              <FileText size={24} />
              Introducción
            </h2>
            <p className={styles.legalSectionContent}>
              En <strong>Ecometalix Spa</strong>, valoramos y respetamos tu privacidad. Esta Política de Privacidad 
              describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas 
              nuestros servicios de compra y venta de chatarra y metales reciclables.
            </p>
            <p className={styles.legalSectionContent}>
              Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política. 
              Si no estás de acuerdo con estas prácticas, no utilices nuestros servicios.
            </p>
          </section>

          {/* Information We Collect */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              <Eye size={24} />
              Información que Recopilamos
            </h2>
            
            <h3 className={styles.legalSubsectionTitle}>
              Información Personal
            </h3>
            <ul className={styles.legalList}>
              <li className={styles.legalListItem}>Nombre completo y datos de contacto (teléfono, email, dirección)</li>
              <li className={styles.legalListItem}>RUT o documento de identidad</li>
              <li className={styles.legalListItem}>Información de transacciones de compra/venta de chatarra</li>
              <li className={styles.legalListItem}>Registros de pesaje y valoración de materiales</li>
              <li className={styles.legalListItem}>Información de pago y transferencias bancarias</li>
            </ul>

            <h3 className={styles.legalSubsectionTitle}>
              Información Técnica
            </h3>
            <ul className={styles.legalList}>
              <li className={styles.legalListItem}>Dirección IP y ubicación general</li>
              <li className={styles.legalListItem}>Tipo de navegador y dispositivo utilizado</li>
              <li className={styles.legalListItem}>Páginas visitadas en nuestro sitio web</li>
              <li className={styles.legalListItem}>Cookies y tecnologías similares de seguimiento</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              <Lock size={24} />
              Cómo Utilizamos tu Información
            </h2>
            
            <h3 className={styles.legalSubsectionTitle}>
              Servicios Principales
            </h3>
            <ul className={styles.legalList}>
              <li className={styles.legalListItem}>Procesar transacciones de compra y venta de chatarra</li>
              <li className={styles.legalListItem}>Realizar pagos y transferencias bancarias</li>
              <li className={styles.legalListItem}>Generar certificados de pesaje y documentación legal</li>
              <li className={styles.legalListItem}>Proporcionar cotizaciones de materiales</li>
              <li className={styles.legalListItem}>Comunicarnos contigo sobre tus transacciones</li>
            </ul>

            <h3 className={styles.legalSubsectionTitle}>
              Mejora del Servicio
            </h3>
            <ul className={styles.legalList}>
              <li className={styles.legalListItem}>Analizar patrones de uso para mejorar nuestros servicios</li>
              <li className={styles.legalListItem}>Personalizar tu experiencia en nuestro sitio web</li>
              <li className={styles.legalListItem}>Enviar actualizaciones sobre precios de materiales</li>
              <li className={styles.legalListItem}>Realizar estudios de mercado y análisis estadísticos</li>
            </ul>
          </section>

          {/* Contact */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              Contacto
            </h2>
            <p className={styles.legalSectionContent}>
              Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos:
            </p>
            <div className={styles.contactBox}>
              <p className={styles.contactText}><strong>Ecometalix Spa</strong></p>
              <p className={styles.contactText}>Santiago, Chile</p>
              <p className={styles.contactText}>
                WhatsApp: <a href="https://wa.me/56940244042" className={styles.contactLink}>
                  +56 9 4024 4042
                </a>
              </p>
              <p className={styles.contactTextLast}>
                Email: <a href="mailto:contacto@ecometalix.cl" className={styles.contactLink}>
                  contacto@ecometalix.cl
                </a>
              </p>
            </div>
          </section>

        </div>
      </section>
    </>
  );
} 