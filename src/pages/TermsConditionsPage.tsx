"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './LegalPages.module.css';
import { Scale, FileCheck, AlertTriangle, Shield } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader 
        title="Términos y Condiciones"
        subtitle="Conoce las condiciones de uso de nuestros servicios de compra y venta de chatarra"
      />

      <section className={styles.pageSection}>
        <div className={styles.container}>
          
          {/* Last Updated */}
          <div className={styles.lastUpdated}>
            <p className={styles.lastUpdatedText}>
              <strong>Última actualización:</strong> 18 de julio de 2025
            </p>
          </div>

          {/* Introduction */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              <FileCheck size={24} />
              Términos Generales
            </h2>
            <p className={styles.legalSectionContent}>
              Estos Términos y Condiciones (&quot;Términos&quot;) regulan el uso de los servicios 
              proporcionados por <strong>Ecometalix Spa</strong> (&quot;la Empresa&quot;, 
              &quot;nosotros&quot;) para la compra, venta y reciclaje de chatarra y metales.
            </p>
            <p className={styles.legalSectionContent}>
              Al utilizar nuestros servicios, usted (&quot;el Cliente&quot;, &quot;usted&quot;) 
              acepta estar obligado por estos Términos. Si no está de acuerdo con alguna parte 
              de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          {/* Services */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              <Scale size={24} />
              Servicios Ofrecidos
            </h2>
            
            <h3 className={styles.legalSubsectionTitle}>
              Compra de Chatarra y Metales
            </h3>
            <ul className={styles.legalList}>
              <li>Evaluación y cotización de materiales metálicos</li>
              <li>Pesaje certificado con balanza oficial</li>
              <li>Pago inmediato en efectivo o transferencia bancaria</li>
              <li>Certificación de transacciones y documentación legal</li>
              <li>Asesoramiento sobre clasificación de materiales</li>
            </ul>

            <h3 className={styles.legalSubsectionTitle}>
              Materiales Aceptados
            </h3>
            <ul className={styles.legalList}>
              <li className={styles.legalListItem}>Cobre y aleaciones de cobre (cables, tuberías, planchas)</li>
              <li className={styles.legalListItem}>Aluminio (perfiles, latas, radiadores)</li>
              <li className={styles.legalListItem}>Hierro y acero (estructuras, maquinaria, vehículos)</li>
              <li className={styles.legalListItem}>Bronce y latón</li>
              <li className={styles.legalListItem}>Materiales electrónicos (placas, componentes)</li>
              <li className={styles.legalListItem}>Otros metales según evaluación previa</li>
            </ul>
          </section>

          {/* Restrictions */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              <AlertTriangle size={24} />
              Restricciones y Materiales Prohibidos
            </h2>
            
            <p className={styles.legalSectionContent}>
              <strong>Ecometalix NO acepta los siguientes materiales:</strong>
            </p>
            <ul className={styles.legalList}>
              <li className={styles.legalListItem}>Materiales de origen dudoso o potencialmente robados</li>
              <li className={styles.legalListItem}>Cables de energía eléctrica de empresas de servicios públicos</li>
              <li className={styles.legalListItem}>Tapas de alcantarilla, rejillas o infraestructura municipal</li>
              <li className={styles.legalListItem}>Materiales que contengan asbesto o sustancias peligrosas</li>
              <li className={styles.legalListItem}>Equipos militares, policiales o de seguridad</li>
              <li className={styles.legalListItem}>Materiales radiactivos o contaminados</li>
            </ul>

            <div className={styles.warningBox}>
              <p className={styles.warningText}>
                ⚠️ ADVERTENCIA: La venta de materiales robados o de procedencia ilegal 
                constituye un delito. Ecometalix colabora con las autoridades competentes.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className={styles.legalSection}>
            <h2 className={styles.legalSectionTitle}>
              Contacto para Consultas
            </h2>
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