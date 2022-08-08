import React from 'react';
import { render } from '@testing-library/react';
import { Stress } from '../Stress';

test('Stress', () => {
  const fn = jest.fn();
  const { container } = render(<Stress setIndexCarousel={fn} setPageAndClear={fn} />);
  expect(container).toMatchSnapshot()
});