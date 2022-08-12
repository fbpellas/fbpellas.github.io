import React from 'react';
import { render } from '@testing-library/react';
import { DropdownItem } from '../DropdownItem';

test('DropdownItem', () => {
  const fn = jest.fn();
  const { container } = render(<DropdownItem anchor="some-anchor" setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
