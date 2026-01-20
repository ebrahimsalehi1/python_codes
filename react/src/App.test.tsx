import {
  render,
  screen,
} from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import App from './App';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';

// vi.mock('./Button', () => ({
//   Button: () => <div>Hello EBI</div>,
// }));

test('renders the main heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /vite \+ react/i,
    }),
  ).toBeInTheDocument();
});

test('renders Translation', () => {
  vi.mock('@lingui/react/macro', () => {
    return {
      ...vi.importActual(
        '@lingui/react/macro',
      ),
      useLingui: () => ({
        i18n: {
          _t: (str: string) => str,
        },
      }),
    };
  });
  // i18n.load('de', {
  //   'Welcome to react':
  //     'Willkommen bei React',
  // });
  // i18n.activate('de');
  render(
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>,
  );
  screen.debug();
  expect(
    screen.getByText('Welcome to react'),
  ).toBeInTheDocument();
});
