import React from 'react';
import { render } from '@testing-library/react';
import { Vowels } from '../Vowels';

test('Vowels', () => {
  const fn = jest.fn();
  const { container } = render(<Vowels setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
