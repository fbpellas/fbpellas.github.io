import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../Home';

test('Home', () => {
  const fn = jest.fn();
  const { container } = render(<Home setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
