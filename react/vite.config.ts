/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { lingui } from '@lingui/vite-plugin';

// https://vite.dev/config/
const obj = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          '@lingui/babel-plugin-lingui-macro',
        ],
      },
    }),
    lingui(),
  ],
  server: {
    port: 5174,
    open: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});

export default obj;
