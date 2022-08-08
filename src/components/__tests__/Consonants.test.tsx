import React from 'react';
import { render } from '@testing-library/react';
import { Consonants } from '../Consonants';

test('Consonants', () => {
  const fn = jest.fn();
  const { container } = render(<Consonants setIndexCarousel={fn} setPageAndClear={fn} />);
  expect(container).toMatchSnapshot()
});