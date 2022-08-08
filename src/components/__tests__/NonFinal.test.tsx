import React from 'react';
import { render } from '@testing-library/react';
import { NonFinal } from '../NonFinal';

test('NonFinal', () => {
  const fn = jest.fn();
  const { container } = render(<NonFinal setIndexCarousel={fn} setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
