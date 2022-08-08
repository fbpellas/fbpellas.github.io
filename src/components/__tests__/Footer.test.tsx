import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../Footer';

test('Footer', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
