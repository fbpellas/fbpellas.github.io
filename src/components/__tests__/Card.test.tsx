import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../Card';

test('Card', () => {
  const fn = jest.fn();
  const { container } = render(<Card description="desc" href="some-page" title="title" setPageAndClear={fn} />);
  expect(container).toMatchSnapshot();
});
