type Page = 'home' | 'about' | 'contact';

// ❌ "as" can hide mistakes
const routes1 = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as Record<Page, string>;

// ✅ "satisfies" checks without widening
const routes2 = {
  home: '/',
  about: '/about',
  contact: '/contact',
} satisfies Record<Page, string>;
