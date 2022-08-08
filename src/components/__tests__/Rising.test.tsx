import React from 'react';
import { render } from '@testing-library/react';
import { Rising } from '../Rising';

test('Rising', () => {
  const fn = jest.fn();
  const { container } = render(<Rising setIndexCarousel={fn} setPageAndClear={fn} />);
  expect(container).toMatchSnapshot()
});