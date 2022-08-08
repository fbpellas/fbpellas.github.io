import React from 'react';
import { render } from '@testing-library/react';
import { PhonemesTable } from '../PhonemesTable';
import { Pronunciation } from '../../types';

test('PhonemesTable', () => {
  const data: Pronunciation[] = [
    {
      phoneme: '/aɪ/',
      graphemes: 'i, igh, y, ie',
      examples: '<u>i</u>ce, b<u>ye</u>, l<u>i</u>me, f<u>igh</u>t, sk<u>y</u>',
      audioPhoneme: 'diphthongs/phonemes/-aɪ-.m4a',
      audioExamples: 'diphthongs/examples/ice, bye, lime, fight , sky.m4a'
    },
    {
      phoneme: '/eɪ/',
      graphemes: 'a, a-e, ai, ay, eigh, ey',
      examples: '<u>a</u>corn, j<u>a</u>d<u>e</u>, p<u>ai</u>d, w<u>eigh</u>t, h<u>ey</u>',
      audioPhoneme: 'diphthongs/phonemes/-eɪ-.m4a',
      audioExamples: 'diphthongs/examples/acorn, jade, paid, weight, hey.m4a'
    }
  ];

  const { container } = render(<PhonemesTable data={data} />);
  expect(container).toMatchSnapshot();
});
