import {
  render,
  screen,
} from '@testing-library/react';
import {
  describe,
  it,
  expect,
} from 'vitest';
import { Component } from './Component';

describe('Component', () => {
  it('should be in DOM', () => {
    render(<Component />);
    const element =
      screen.getByText('Ebrahim');

    expect(element).toBeInTheDocument();
  });
});
