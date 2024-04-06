import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Live Chat',
        short_name: 'LVA',
        description: 'An application to chat with your friend in a secret and secure way',
        theme_color: '#becdaf',
        icons: [
          {
            src: '/images.png', // Adjust the path to match your icon file in the public directory
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        splash_pages: null,
        background_color: '#ffffff',
        theme_color: '#becdaf',
      },
      devOptions: { enabled: true },
    }),
    react(),
  ],
});
