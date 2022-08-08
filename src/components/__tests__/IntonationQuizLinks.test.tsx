import React from 'react';
import { render } from '@testing-library/react';
import { IntonationQuizLinks } from '../IntonationQuizLinks';

test('IntonationQuizLinks', () => {
  const fn = jest.fn();
  const { container } = render(<IntonationQuizLinks setIndexCarousel={fn} setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
