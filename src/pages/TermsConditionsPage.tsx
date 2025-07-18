"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import { Scale, FileCheck, AlertTriangle, Shield } from 'lucide-react';

export default function TermsConditionsPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader 
        title="Términos y Condiciones"
        subtitle="Conoce las condiciones de uso de nuestros servicios de compra y venta de chatarra"
      />

      <section style={{ backgroundColor: 'var(--background-page)', minHeight: '100vh', padding: '2rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
          
          {/* Last Updated */}
          <div style={{ 
            background: 'var(--glass-light)', 
            padding: '1rem', 
            borderRadius: 'var(--radius-md)', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, color: 'var(--color-muted)' }}>
              <strong>Última actualización:</strong> 18 de julio de 2025
            </p>
          </div>

          {/* Introduction */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              <FileCheck size={24} />
              Términos Generales
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
              Estos Términos y Condiciones (&quot;Términos&quot;) regulan el uso de los servicios 
              proporcionados por <strong>Ecometalix Spa</strong> (&quot;la Empresa&quot;, 
              &quot;nosotros&quot;) para la compra, venta y reciclaje de chatarra y metales.
            </p>
            <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
              Al utilizar nuestros servicios, usted (&quot;el Cliente&quot;, &quot;usted&quot;) 
              acepta estar obligado por estos Términos. Si no está de acuerdo con alguna parte 
              de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          {/* Services */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              <Scale size={24} />
              Servicios Ofrecidos
            </h2>
            
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Compra de Chatarra y Metales
            </h3>
            <ul style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <li>Evaluación y cotización de materiales metálicos</li>
              <li>Pesaje certificado con balanza oficial</li>
              <li>Pago inmediato en efectivo o transferencia bancaria</li>
              <li>Certificación de transacciones y documentación legal</li>
              <li>Asesoramiento sobre clasificación de materiales</li>
            </ul>

            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Materiales Aceptados
            </h3>
            <ul style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <li>Cobre y aleaciones de cobre (cables, tuberías, planchas)</li>
              <li>Aluminio (perfiles, latas, radiadores)</li>
              <li>Hierro y acero (estructuras, maquinaria, vehículos)</li>
              <li>Bronce y latón</li>
              <li>Materiales electrónicos (placas, componentes)</li>
              <li>Otros metales según evaluación previa</li>
            </ul>
          </section>

          {/* Restrictions */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              <AlertTriangle size={24} />
              Restricciones y Materiales Prohibidos
            </h2>
            
            <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
              <strong>Ecometalix NO acepta los siguientes materiales:</strong>
            </p>
            <ul style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <li>Materiales de origen dudoso o potencialmente robados</li>
              <li>Cables de energía eléctrica de empresas de servicios públicos</li>
              <li>Tapas de alcantarilla, rejillas o infraestructura municipal</li>
              <li>Materiales que contengan asbesto o sustancias peligrosas</li>
              <li>Equipos militares, policiales o de seguridad</li>
              <li>Materiales radiactivos o contaminados</li>
            </ul>

            <div style={{ 
              background: 'var(--color-warning)', 
              color: 'var(--color-white)', 
              padding: '1rem', 
              borderRadius: 'var(--radius-md)', 
              marginBottom: '1.5rem'
            }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                ⚠️ ADVERTENCIA: La venta de materiales robados o de procedencia ilegal 
                constituye un delito. Ecometalix colabora con las autoridades competentes.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Contacto para Consultas
            </h2>
            <div style={{ 
              background: 'var(--glass-light)', 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-md)', 
              marginBottom: '1.5rem'
            }}>
              <p style={{ margin: '0 0 0.5rem 0' }}><strong>Ecometalix Spa</strong></p>
              <p style={{ margin: '0 0 0.5rem 0' }}>Santiago, Chile</p>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                WhatsApp: <a href="https://wa.me/56940244042" style={{ color: 'var(--color-primary)' }}>
                  +56 9 4024 4042
                </a>
              </p>
              <p style={{ margin: 0 }}>
                Email: <a href="mailto:contacto@ecometalix.cl" style={{ color: 'var(--color-primary)' }}>
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