import * as React from 'react';
import { HiPlay } from 'react-icons/hi';
import { BASE_PATH_SOUNDS } from '../constants';
import { Pronunciation } from '../types';
import { Tooltip } from './Tooltip';

export interface PhonemesTableProps {
  data: Pronunciation[];
}

const PhonemesTable: React.FC<PhonemesTableProps> = (props) => {
  const { data } = props;

  return (
    <table>
      <tr>
        <th>
          <Tooltip className="text-center" definition="Sounds" word="Phonemes" />
        </th>
        <th className="text-center">
          <Tooltip className="text-center" definition="Letters that spell the sound" word="Grapheme" />
        </th>
        <th className="text-center">Examples</th>
      </tr>
      {data.map((d: Pronunciation) => {
        const { phoneme, graphemes, examples, audioPhoneme, audioExamples } = d;

        const audioPhonemeObj = new Audio(`${BASE_PATH_SOUNDS}${audioPhoneme}`);
        const audioExamplesObj = new Audio(`${BASE_PATH_SOUNDS}${audioExamples}`);

        return (
          <tr key={phoneme}>
            <td>
              <HiPlay
                className="play-icon"
                onClick={() => {
                  audioPhonemeObj.play();
                }}
              />
              {phoneme}
            </td>
            <td>{graphemes}</td>
            <td>
              <HiPlay
                className="play-icon"
                onClick={() => {
                  audioExamplesObj.play();
                }}
              />
              <div className="text-inline" dangerouslySetInnerHTML={{ __html: examples }} />
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export { PhonemesTable };
