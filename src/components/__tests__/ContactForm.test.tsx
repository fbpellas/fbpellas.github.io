import React from 'react';
import { render } from '@testing-library/react';
import { ContactForm } from '../ContactForm';

test('ContactForm', () => {
  const { container } = render(<ContactForm />);
  expect(container).toMatchSnapshot();
});
