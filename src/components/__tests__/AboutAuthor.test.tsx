import React from 'react';
import { render } from '@testing-library/react';
import { AboutAuthor } from '../AboutAuthor';

test('AboutAuthor', () => {
  const { container } = render(<AboutAuthor />);
  expect(container).toMatchSnapshot();
});
