import React from 'react';
import { render } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';
import { QuizIndex } from '../../types';

test('Breadcrumbs', () => {
  const indexCarousel = QuizIndex.GuessThePattern;
  const { container, rerender } = render(<Breadcrumbs indexCarousel={indexCarousel} page="home" />);
  expect(container).toBeEmptyDOMElement();

  rerender(<Breadcrumbs indexCarousel={indexCarousel} page="vowels" />);
  expect(container).toMatchSnapshot('some breadcrumbs');
});
