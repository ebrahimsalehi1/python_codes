import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

// Dynamically load locale catalogs
async function loadLocale(
  locale: string,
) {
  const { messages } = await import(
    `./locales/${locale}/messages.mjs`
  );
  i18n.load(locale, messages);
  i18n.activate(locale);
}

// Load default locale
loadLocale('de');

createRoot(
  document.getElementById('root')!,
).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </StrictMode>,
);
