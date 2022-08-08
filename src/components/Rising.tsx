import * as React from 'react';
import { QuizIndex } from '../types';
import { ArrowWord } from './ArrowWord';
import { IntonationQuizLinks } from './IntonationQuizLinks';

export interface RisingProps {
  setIndexCarousel: React.Dispatch<React.SetStateAction<QuizIndex>>;
  setPageAndClear: (hash: string) => void;
}

const Rising: React.FC<RisingProps> = (props) => {
  const { setIndexCarousel, setPageAndClear } = props;

  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">
          Rising Intonation <ArrowWord isUp />
        </h3>
        <div className="margin-top">
          The voice rises at the end of the statement. We often use this pattern when asking a yes or no question, a
          question tag, or to show surprise or disbelief.
        </div>
        <br />
        <div>
          <b>Yes/No Questions:</b>
          <br />
          <ul>
            <li>
              Are you working <ArrowWord isUp word="tomorrow" />?
            </li>
            <li>
              Has Stephen called <ArrowWord isUp word="you" />?
            </li>
            <li>
              Could you please print out the <ArrowWord isUp word="documents" />?
            </li>
          </ul>
        </div>
        <br />
        <div>
          <b>Question Tags:</b>
          <div>
            Questions at the end of the sentence to ask for confirmation. A question tag consists of an auxiliary verb
            (am, is, are, can, have, do, does, etc.) and a pronoun.
          </div>
          <br />
          <ul>
            <li>
              They left already, didn’t <ArrowWord isUp word="they" />?
            </li>
            <li>
              Sandra is your cousin, isn’t <ArrowWord isUp word="she" />?
            </li>
            <li>
              You can ride a motorcycle, can’t <ArrowWord isUp word="you" />?
            </li>
          </ul>
        </div>
        <br />
        <div>
          <b>Surprise or Disbelief:</b>
          <div>The intonation rises on the word that is emphasized.</div>
          <br />
          <ul>
            <li>
              <ArrowWord isUp word="Really" />? Where did you hear that?
            </li>
            <li>
              She won 5 million dollars in the <ArrowWord isUp word="lottery" />? -disbelief that she won the ‘lottery’
            </li>
            <li>
              She won <ArrowWord isUp word="5 million" /> dollars in the lottery? -disbelief that she won $5 million
            </li>
          </ul>
        </div>
        <br />
        <IntonationQuizLinks setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />
      </div>
    </div>
  );
};

export { Rising };
