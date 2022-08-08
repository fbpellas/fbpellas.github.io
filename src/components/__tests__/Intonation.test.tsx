import React from 'react';
import { render } from '@testing-library/react';
import { Intonation } from '../Intonation';

test('Intonation', () => {
  const fn = jest.fn();
  const { container } = render(<Intonation setPageAndClear={fn} />);
  expect(container).toMatchSnapshot()
});