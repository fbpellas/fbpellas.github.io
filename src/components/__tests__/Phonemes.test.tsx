import React from 'react';
import { render } from '@testing-library/react';
import { Phonemes } from '../Phonemes';

test('Phonemes', () => {
  const fn = jest.fn();
  const { container } = render(<Phonemes setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
