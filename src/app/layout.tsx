import React from 'react';
import { Inter, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css'

// Optimize fonts with Next.js
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
  preload: false,
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
});

// Components
import ThemeProvider from '../components/ThemeProvider';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import OfflineIndicator from '../components/OfflineIndicator';
import ErrorBoundary from '../components/ErrorBoundary';

// Default metadata for the app
export const metadata = {
  title: {
    default: 'Ecometalix - Compra y Venta de Chatarra en Santiago',
    template: '%s | Ecometalix'
  },
  description: 'Compra y venta de chatarra y metales reciclables en Santiago. Pago inmediato, balanza certificada y atención personalizada.',
  keywords: 'chatarra, metales, reciclaje, santiago, cobre, aluminio, hierro, bronce, pago inmediato',
  authors: [{ name: 'Ecometalix Spa' }],
  creator: 'Ecometalix Spa',
  publisher: 'Ecometalix Spa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ecometalix.cl'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://ecometalix.cl',
    siteName: 'Ecometalix',
    title: 'Ecometalix - Compra y Venta de Chatarra en Santiago',
    description: 'Compra y venta de chatarra y metales reciclables en Santiago. Pago inmediato, balanza certificada y atención personalizada.',
    images: [
      {
        url: '/images/logoecometalix.webp',
        width: 1200,
        height: 630,
        alt: 'Ecometalix - Compra y Venta de Chatarra en Santiago',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecometalix - Compra y Venta de Chatarra en Santiago',
    description: 'Compra y venta de chatarra y metales reciclables en Santiago. Pago inmediato, balanza certificada y atención personalizada.',
    images: ['/images/logoecometalix.webp'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Critical viewport configuration for mobile responsiveness
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#639283' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Resource hints for critical resources */}
        <link rel="preload" href="/images/logoecometalix.webp" as="image" />
        <link rel="preload" href="/images/homehero.webp" as="image" />
        
        {/* DNS prefetching for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        
        {/* Critical CSS inlined for fastest LCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
            html{height:100%;scroll-behavior:auto;scroll-padding-top:90px}
            body{height:100%;min-height:100vh;font-family:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:var(--color-background);color:var(--color-text);font-size:1rem;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            .app-wrapper{min-height:100vh;background:var(--color-background)}
          `
        }} />
      </head>
      <body className={`${inter.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable}`}>
        <ScrollToTop />
        <div className="app-wrapper">
          <ThemeProvider>
            <ErrorBoundary>
              {children}
              <Footer />
            </ErrorBoundary>
          </ThemeProvider>
          <OfflineIndicator />
        </div>
      </body>
    </html>
  );
} 