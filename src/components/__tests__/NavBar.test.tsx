import React from 'react';
import { render } from '@testing-library/react';
import { NavBar } from '../NavBar';

test('NavBar', () => {
  const fn = jest.fn();
  const { container } = render(<NavBar navHovered={undefined} setNavHovered={fn} setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
