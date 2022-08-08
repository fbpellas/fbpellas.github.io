import * as React from 'react';
import { IPA_DEFINITION } from '../constants';
import { diphthongs } from '../data/phonemes';
import { PhonemesTable } from './PhonemesTable';
import { Tooltip } from './Tooltip';

export interface DiphthongsProps { }

const Diphthongs: React.FC<DiphthongsProps> = (_props) => {
  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">Diphthongs</h3>
        <div>
          Diphthongs are a combination of two vowel sounds. There are eight diphthongs in the{' '}
          <Tooltip definition={IPA_DEFINITION} word='IPA' />: aɪ, eɪ, ɔɪ, aʊ, ɪə, ʊə, əʊ, eə. However, only
          five sounds are produced in American English.
        </div>
        <PhonemesTable data={diphthongs} />
      </div>
    </div>
  );
};

export { Diphthongs }