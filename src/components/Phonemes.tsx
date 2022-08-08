import * as React from 'react';
import { BASE_PATH_IMG, IPA_DEFINITION } from '../constants';

export interface PhonemesProps {
  setPageAndClear: (hash: string) => void
}

const Phonemes: React.FC<PhonemesProps> = (props) => {
  const { setPageAndClear } = props;

  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">Phonemes</h3>
        <div>
          According to the {IPA_DEFINITION} (IPA), there are 26 letters and 44 phonemes (or sounds)
          in the English alphabet. These letters are divided into two categories:{' '}
          <a className="clickable-page" href="#vowels" onClick={() => setPageAndClear('vowels')}>
            vowels
          </a>{' '}
          and{' '}
          <a className="clickable-page" href="#consonants" onClick={() => setPageAndClear('consonants')}>
            consonants
          </a>
          .
        </div>
        <br />
        <div>
          <div className="note">Note:</div> Phonemes should not rely on the word’s spelling. For example, the word m
          <i>
            <b>oo</b>
          </i>
          n is not spelled with the letter ‘u’, yet is produced with the long /u/ phoneme.{' '}
        </div>
        <img
          className="margin-top half-img"
          src={`${BASE_PATH_IMG}IPA chart.jpg`}
          alt="Learn the Art of Speaking American English"
        />
      </div>
    </div>
  );
}

export { Phonemes }
