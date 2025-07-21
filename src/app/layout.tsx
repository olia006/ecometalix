import React from 'react';
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect to font providers for better performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ScrollToTop />
        <div className="app-wrapper">
          {/* ---- Offline Indicator ---- */}
          <OfflineIndicator />
          
          {/* ---- Theme Provider (includes Navbar, MobileNavBar, ToastNotification) ---- */}
          <ThemeProvider>
            {/* ---- Main Content ---- */}
            <main id="main-content" role="main" tabIndex={-1}>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
          </ThemeProvider>

          {/* ---- Site Footer ---- */}
          <footer role="contentinfo">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
} 