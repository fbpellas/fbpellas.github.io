import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App', () => {
  const { getAllByText } = render(<App />);
  const author = getAllByText(/Faith Pellas/i);
  expect(author).toHaveLength(2);
});
