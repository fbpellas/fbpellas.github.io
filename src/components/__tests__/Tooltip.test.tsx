import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from '../Tooltip';

test('Tooltip', () => {
  const { container, rerender } = render(<Tooltip definition='def' word='word' />);
  expect(container).toMatchSnapshot('className default')

  rerender(<Tooltip className='something' definition='def' word='word' />)
  expect(container).toMatchSnapshot('className provided');
});