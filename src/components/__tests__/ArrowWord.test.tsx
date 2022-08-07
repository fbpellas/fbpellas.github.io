import React from 'react';
import { render } from '@testing-library/react';
import { ArrowWord } from '../ArrowWord';

test('ArrowWord', () => {
  const { container, rerender } = render(<ArrowWord />);
  expect(container).toMatchSnapshot('down');

  rerender(<ArrowWord isUp />)
  expect(container).toMatchSnapshot('up');

  rerender(<ArrowWord word='something' />)
  expect(container).toMatchSnapshot('word and down');

  rerender(<ArrowWord isUp word='something' />)
  expect(container).toMatchSnapshot('word and up');
});