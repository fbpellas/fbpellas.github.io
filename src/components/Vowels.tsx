import * as React from 'react';
import { IPA_DEFINITION } from '../constants';
import { vowels } from '../data/phonemes';
import { PhonemesTable } from './PhonemesTable';
import { Tooltip } from './Tooltip';

export interface VowelsProps {
  setPageAndClear: (hash: string) => void;
}

const Vowels: React.FC<VowelsProps> = (props) => {
  const { setPageAndClear } = props;

  return (
    <div className="block-2">
      <div className="article">
        <h2 className="h3-title vowels-title">Vowels</h2>
        <br />
        <div>
          Vowels are a set of unblocked sounds. They consist of the letters A, E, I, O, U (sometimes Y). The{' '}
          <Tooltip definition={IPA_DEFINITION} word="IPA" /> lists 20 phonemes categorized as long, short, and{' '}
          <a className="clickable-page" href="#diphthongs" onClick={() => setPageAndClear('diphthongs')}>
            diphthongs
          </a>
          .
        </div>
        <br />
        <div>
          Vowels can sometimes be categorized as lax (short) and tense (long) depending on how much effort the lips and
          tongue make when producing the sound.
        </div>
        <br />
        <div>
          Listed below are the phonemes that are widely used in the American English language. Some words might vary in
          phonemes depending on regional dialects.
        </div>
        <PhonemesTable data={vowels} />
      </div>
    </div>
  );
};

export { Vowels };
