import React from 'react';
import { render } from '@testing-library/react';
import { MobileDropdownItem } from '../MobileDropdownItem';

test('MobileDropdownItem', () => {
  const fn = jest.fn();
  const { container } = render(<MobileDropdownItem anchor="some-anchor" setPageAndClear={fn} title="Some Title" />);
  expect(container).toMatchSnapshot();
});
