"use client";

import React from 'react';
import PageHeader from '../components/PageHeader';
import { Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader 
        title="Política de Privacidad"
        subtitle="Protegemos tu información personal con los más altos estándares de seguridad"
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
              <FileText size={24} />
              Introducción
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
              En <strong>Ecometalix Spa</strong>, valoramos y respetamos tu privacidad. Esta Política de Privacidad 
              describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas 
              nuestros servicios de compra y venta de chatarra y metales reciclables.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política. 
              Si no estás de acuerdo con estas prácticas, no utilices nuestros servicios.
            </p>
          </section>

          {/* Information We Collect */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              <Eye size={24} />
              Información que Recopilamos
            </h2>
            
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Información Personal
            </h3>
            <ul style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <li>Nombre completo y datos de contacto (teléfono, email, dirección)</li>
              <li>RUT o documento de identidad</li>
              <li>Información de transacciones de compra/venta de chatarra</li>
              <li>Registros de pesaje y valoración de materiales</li>
              <li>Información de pago y transferencias bancarias</li>
            </ul>

            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Información Técnica
            </h3>
            <ul style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <li>Dirección IP y ubicación general</li>
              <li>Tipo de navegador y dispositivo utilizado</li>
              <li>Páginas visitadas en nuestro sitio web</li>
              <li>Cookies y tecnologías similares de seguimiento</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}>
              <Lock size={24} />
              Cómo Utilizamos tu Información
            </h2>
            
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Servicios Principales
            </h3>
            <ul style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <li>Procesar transacciones de compra y venta de chatarra</li>
              <li>Realizar pagos y transferencias bancarias</li>
              <li>Generar certificados de pesaje y documentación legal</li>
              <li>Proporcionar cotizaciones de materiales</li>
              <li>Comunicarnos contigo sobre tus transacciones</li>
            </ul>

            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
              Mejora del Servicio
            </h3>
            <ul style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <li>Analizar patrones de uso para mejorar nuestros servicios</li>
              <li>Personalizar tu experiencia en nuestro sitio web</li>
              <li>Enviar actualizaciones sobre precios de materiales</li>
              <li>Realizar estudios de mercado y análisis estadísticos</li>
            </ul>
          </section>

          {/* Contact */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Contacto
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
              Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos:
            </p>
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