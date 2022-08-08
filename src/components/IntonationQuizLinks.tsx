import * as React from 'react';
import { QuizIndex } from '../types';

export interface IntonationQuizLinksProps {
  setIndexCarousel: React.Dispatch<React.SetStateAction<QuizIndex>>;
  setPageAndClear: (hash: string) => void;
}

const IntonationQuizLinks: React.FC<IntonationQuizLinksProps> = (props) => {
  const { setIndexCarousel, setPageAndClear } = props;
  const { GuessThePattern, ShoppingForAPresent } = QuizIndex;

  return (
    <>
      <div>Test yourself to see how well you know intonations:</div>
      <ul>
        <li>
          <a
            className="clickable-page"
            href="#quiz"
            onClick={() => {
              setPageAndClear('quiz');
              setIndexCarousel(GuessThePattern);
            }}
          >
            Guess the Pattern
          </a>
        </li>
        <li>
          <a
            className="clickable-page"
            href="#quiz"
            onClick={() => {
              setPageAndClear('quiz');
              setIndexCarousel(ShoppingForAPresent);
            }}
          >
            Shopping for a Present
          </a>
        </li>
      </ul>
    </>
  );
};

export { IntonationQuizLinks };
