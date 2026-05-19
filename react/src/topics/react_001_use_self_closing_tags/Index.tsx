// title: Stop Using Open and Close Tags for Empty Components
import { Component } from './Component';

// ❌ Too verbose
const WithoutSelfClosingTag = () => {
  return <Component></Component>;
};
// ✅ Good
const WithSelfClosingTag = () => {
  return <Component />;
};

export {
  WithoutSelfClosingTag,
  WithSelfClosingTag,
};
