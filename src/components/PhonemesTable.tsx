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
      <thead>
        <tr>
          <th>
            <Tooltip className="text-center" definition="Sounds" word="Phonemes" />
          </th>
          <th className="text-center">
            <Tooltip className="text-center" definition="Letters that spell the sound" word="Grapheme" />
          </th>
          <th className="text-center">Examples</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d: Pronunciation) => {
          const { phoneme, graphemes, examples, audioPhoneme, audioExamples } = d;

          const audioPhonemeObj = new Audio(`${BASE_PATH_SOUNDS}${audioPhoneme}`);
          const audioExamplesObj = new Audio(`${BASE_PATH_SOUNDS}${audioExamples}`);
          const examplesSplit = examples.split(', ');

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
                {examplesSplit.map((example: string, index: number) => {
                  const isLast = index === examplesSplit.length - 1;

                  if (isLast)
                    return (
                      <div key={example} className="text-inline nowrap" dangerouslySetInnerHTML={{ __html: example }} />
                    );

                  return (
                    <div key={example} className="text-inline">
                      <div className="text-inline nowrap" dangerouslySetInnerHTML={{ __html: example }} />,{' '}
                    </div>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { PhonemesTable };
