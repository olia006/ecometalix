/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Modern JavaScript compilation - eliminates legacy polyfills
  swcMinify: true,
  compiler: {
    // Remove legacy JavaScript transforms
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
    // Use modern compilation
    swcTraceProfiling: true,
  },
  
  // CSS modules are enabled by default in Next.js
  
  // Preload critical resources and optimize fonts
  async headers() {
    // Development environment - minimal headers for HMR and dev tools
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: '/(.*)',
          headers: [
            // Allow CORS for development
            {
              key: 'Access-Control-Allow-Origin',
              value: 'http://localhost:3000'
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS'
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization'
            }
          ]
        }
      ];
    }

    // Production environment - security headers only
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy - Defense against XSS attacks
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.google.com *.gstatic.com",
              "style-src 'self' 'unsafe-inline' *.google.com *.gstatic.com fonts.googleapis.com api.fontshare.com",
              "font-src 'self' fonts.gstatic.com api.fontshare.com cdn.fontshare.com data:",
              "img-src 'self' data: blob: *.google.com *.gstatic.com *.googleusercontent.com",
              "connect-src 'self' *.google.com *.gstatic.com wa.me api.whatsapp.com",
              "frame-src 'self' *.google.com *.youtube.com",
              "media-src 'self' data: blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' wa.me",
              "frame-ancestors 'none'"
              // Removed upgrade-insecure-requests for development
            ].join('; ')
          },
          // X-Frame-Options - Clickjacking protection
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // X-Content-Type-Options - MIME type sniffing protection
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Referrer Policy - Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // X-XSS-Protection - Legacy XSS protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Strict-Transport-Security - Force HTTPS (only in production)
          ...(process.env.NODE_ENV === 'production' ? [{
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }] : []),
          // Permissions Policy - Control browser features
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=(self)',
              'payment=()',
              'usb=()',
              'magnetometer=()',
              'gyroscope=()',
              'fullscreen=(self)',
              'display-capture=()',
              'web-share=(self)'
            ].join(', ')
          },
          // Cross-Origin-Embedder-Policy - Isolate the page
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless'
          },
          // Cross-Origin-Opener-Policy - Prevent cross-origin window access
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups'
          },
          // Cross-Origin-Resource-Policy - Control cross-origin resource loading
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig 