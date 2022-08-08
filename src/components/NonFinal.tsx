import * as React from 'react';
import { QuizIndex } from '../types';
import { ArrowWord } from './ArrowWord';
import { IntonationQuizLinks } from './IntonationQuizLinks';

export interface NonFinalProps {
  setIndexCarousel: React.Dispatch<React.SetStateAction<QuizIndex>>
  setPageAndClear: (hash: string) => void
}

const NonFinal: React.FC<NonFinalProps> = (props) => {
  const { setIndexCarousel, setPageAndClear } = props;

  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">
          Non-Final Intonation <ArrowWord isUp />
          <ArrowWord />
        </h3>
        <div className="margin-top">
          The non-final or rise-and-fall intonation is often used with choices, lists, or unfinished statements. The
          examples below show which words rise and where they fall.
        </div>
        <br />
        <div>
          <b>Choices:</b>
          <br />
          <ul>
            <li>
              Do you prefer ice <ArrowWord isUp word='cream' /> or <ArrowWord word='cake' />?
            </li>
            <li>
              What would you rather do: go <ArrowWord isUp word='hiking' /> or go <ArrowWord word='swimming' />?
            </li>
            <li>
              Can you speak <ArrowWord isUp word='Mandarin' /> or <ArrowWord word='Spanish' />?
            </li>
          </ul>
        </div>
        <br />
        <div>
          <b>Lists:</b>
          <div>Each item on the list rises in sound and the last word falls.</div>
          <br />
          <ul>
            <li>
              We need <ArrowWord isUp word='flour' />, <ArrowWord isUp word='milk' />,{' '}
              <ArrowWord isUp word='sugar' />, and <ArrowWord word='eggs' /> to make the cake.
            </li>
            <li>
              Next week I’m available on <ArrowWord isUp word='Monday' />, <ArrowWord isUp word='Tuesday' />, and{' '}
              <ArrowWord word='Friday' />.
            </li>
            <li>
              The shirt comes in <ArrowWord isUp word='small' />, <ArrowWord isUp word='medium' />, and{' '}
              <ArrowWord word='large' />.
            </li>
          </ul>
        </div>
        <br />
        <div>
          <b>Introductory/Non-Final Statements:</b>
          <div>These statements are typically at the beginning of the sentence.</div>
          <br />
          <ul>
            <li>
              When <ArrowWord isUp word='I' /> grow <ArrowWord word='up' />
              ...
            </li>
            <li>
              <ArrowWord isUp word='By' /> the <ArrowWord word='way' />,
            </li>
            <li>
              <ArrowWord isUp word='As' /> I was <ArrowWord word='saying' />,
            </li>
            <li>
              <ArrowWord isUp word='Just' /> so you <ArrowWord word='know' />,
            </li>
          </ul>
        </div>
        <br />
        <div>
          <b>Conditional Statements:</b>
          <div>
            Conditionals usually start with ‘if’ or ‘when’. The last word of the first clause rises, then falls at
            the end.
          </div>
          <br />
          <ul>
            <li>
              If I have a million <ArrowWord isUp word='dollars' />, I would travel the <ArrowWord word='world' />.
            </li>
            <li>
              When I was a <ArrowWord isUp word='child' />, I played <ArrowWord word='football' />.
            </li>
            <li>
              If it’s cold <ArrowWord isUp word='outside' />, I will wear a <ArrowWord word='jacket' />.
            </li>
          </ul>
        </div>
        <br />
        <IntonationQuizLinks setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />
      </div>
    </div>
  );
}

export { NonFinal }