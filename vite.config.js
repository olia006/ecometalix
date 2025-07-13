import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Bundle analyzer - only in analyze mode
    mode === 'analyze' && visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true
    })
  ].filter(Boolean),
  // Base path for deployment
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: mode === 'production' // Only source maps for production
  },
  server: {
    port: 5173,
    open: true,
    strictPort: true
  },
  // Pre-bundle dependencies to avoid source map CORS errors
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'react-icons/fa',
      'prop-types',
      'web-vitals'
    ]
  },
  // You can add resolve.alias for cleaner imports if needed:
  // resolve: {
  //   alias: {
  //     "@": "/src"
  //   }
  // }
}));
