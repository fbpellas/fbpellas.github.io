import React from 'react';
import { render } from '@testing-library/react';
import { Diphthongs } from '../Diphthongs';

test('Diphthongs', () => {
  const { container } = render(<Diphthongs />);
  expect(container).toMatchSnapshot()
});