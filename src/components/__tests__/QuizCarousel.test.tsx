import React from 'react';
import { render } from '@testing-library/react';
import { QuizCarousel } from '../QuizCarousel';
import { QuizIndex } from '../../types';

test('QuizCarousel', () => {
  const fn = jest.fn();
  const { container } = render(<QuizCarousel indexCarousel={QuizIndex.GuessThePattern} setIndexCarousel={fn} />);
  expect(container).toMatchSnapshot();
});
