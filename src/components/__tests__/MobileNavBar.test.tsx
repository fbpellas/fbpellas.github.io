import React from 'react';
import { render } from '@testing-library/react';
import { MobileNavBar } from '../MobileNavBar';

test('MobileNavBar', () => {
  const fn = jest.fn();
  const { container } = render(<MobileNavBar setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
