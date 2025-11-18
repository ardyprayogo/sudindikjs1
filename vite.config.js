import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
      refresh: true,
    }),
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            'babel-plugin-twin',
            {
              preset: 'styled-components',
            },
          ],
        ],
      },
    }),
    svgr({
      include: '**/*.svg',
      exclude: ['**/Images/email-illustration.svg'],
      svgrOptions: {
        icon: false, // Ini agar SVGR tidak menganggap SVG sebagai ikon secara default
      },
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  define: {
    // Mendefinisikan objek global 'process' agar properti di dalamnya bisa diakses
    process: {
      env: {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'), // Gunakan 'production' untuk build
        BABEL_ENV: JSON.stringify(process.env.BABEL_ENV || 'production'), // Sesuaikan jika ada perbedaan
      },
      platform: JSON.stringify('browser'), // Mengganti process.platform dengan 'browser'
      versions: {
        node: JSON.stringify('16.0.0'), // Mengganti process.versions.node jika diperlukan
      },
    },
  },
});
