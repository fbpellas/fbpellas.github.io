import React from 'react';
import { render } from '@testing-library/react';
import { Falling } from '../Falling';

test('Falling', () => {
  const fn = jest.fn();
  const { container } = render(<Falling setIndexCarousel={fn} setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
