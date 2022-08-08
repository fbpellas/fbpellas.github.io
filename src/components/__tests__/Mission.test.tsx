import React from 'react';
import { render } from '@testing-library/react';
import { Mission } from '../Mission';

test('Mission', () => {
  const { container } = render(<Mission />);
  expect(container).toMatchSnapshot();
});
