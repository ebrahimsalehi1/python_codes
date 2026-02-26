// 🧪 Testing React components with Vitest + React Testing Library
//
// render()  → mounts the component into a virtual DOM (jsdom)
// screen    → queries the rendered output
// getByRole → finds elements by their ARIA role (accessible & recommended)
// expect()  → asserts the element is present in the document

import {
  render,
  screen,
} from '@testing-library/react';
import {
  describe,
  it,
  expect,
} from 'vitest';
import App from '../../../App';

// Group related tests under the component name
describe('App component', () => {
  // Each `it` block tests one specific behaviour
  it('should render a button on the screen', () => {
    // 1️⃣  Mount the component
    render(<App />);

    // 2️⃣  Query the DOM — prefer getByRole
    //    for accessibility
    const button =
      screen.getByRole('button');

    // 3️⃣  Assert the element exists
    expect(button).toBeInTheDocument();
  });
});
