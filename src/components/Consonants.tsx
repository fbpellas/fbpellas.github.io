import * as React from 'react';
import { PhonemesTable } from './PhonemesTable';
import { Tooltip } from './Tooltip';
import { consonants } from '../data/phonemes';
import { QuizIndex } from '../types';
import { IPA_DEFINITION } from '../constants';

export interface ConsonantsProps {
  setIndexCarousel: React.Dispatch<React.SetStateAction<QuizIndex>>
  setPageAndClear: (hash: string) => void
}

const Consonants: React.FC<ConsonantsProps> = (props) => {
  const { setIndexCarousel, setPageAndClear } = props;

  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">Consonants</h3>
        <div>
          Consonants have 24 blocked sounds. In the <Tooltip definition={IPA_DEFINITION} word='IPA' /> chart,
          consonants are arranged completely differently from the English alphabet.
        </div>
        <div>
          Phonemes like /p/ and /b/ are next to each other because the lips and the tongue move the same way when
          producing these sounds. The only difference is the phoneme on the left is unvoiced (no vibration on the
          throat) and the phoneme on the right is voiced (there is vibration on the throat).
        </div>
        <PhonemesTable data={consonants} />
        <div>Test yourself to see how well you know the phonemes</div>
        <ul>
          <li>
            <a
              className="clickable-page"
              href="#quiz"
              onClick={() => {
                setPageAndClear('quiz');
                setIndexCarousel(QuizIndex.OddPhonemeOut);
              }}
            >
              Odd Phoneme Out
            </a>
          </li>
          <li>
            <a
              className="clickable-page"
              href="#quiz"
              onClick={() => {
                setPageAndClear('quiz');
                setIndexCarousel(QuizIndex.PhoneticSpelling);
              }}
            >
              Phonetic Spelling
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Consonants }