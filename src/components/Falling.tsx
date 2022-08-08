import * as React from 'react';
import { QuizIndex } from '../types';
import { ArrowWord } from './ArrowWord';
import { IntonationQuizLinks } from './IntonationQuizLinks';

export interface FallingProps {
  setIndexCarousel: React.Dispatch<React.SetStateAction<QuizIndex>>
  setPageAndClear: (hash: string) => void
}

const Falling: React.FC<FallingProps> = (props) => {
  const { setIndexCarousel, setPageAndClear } = props;

  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">Falling Intonation <ArrowWord /></h3>
        <div className="margin-top">
          This is the most common intonation pattern in American English. We use this intonation when we finish a
          statement, give a command, as an information question, and an exclamation. The intonation falls on the
          last word of the sentence.
        </div>
        <br />
        <div>
          <b>Finished Statements:</b>
          <br />
          <ul>
            <li>We live in <ArrowWord word='France' />.</li>
            <li>They are not <ArrowWord word='invited' />.</li>
            <li>It takes five hours to get <ArrowWord word='there' />.</li>
          </ul>
        </div>
        <br />
        <div>
          <b>Commands:</b>
          <div>
            Statements use to give orders. Commands or imperative sentences start with the verb and not the subject.
          </div>
          <br />
          <ul>
            <li>Report to me <ArrowWord word='immediately' />.</li>
            <li>Do not take any <ArrowWord word='photos' />.</li>
            <li>Brush your teeth and go to <ArrowWord word='bed' />.</li>
          </ul>
        </div>
        <br />
        <div>
          <b>Wh- Questions:</b>
          <div>Who, What, When, Where, How, Why, Which are also known as information questions.</div>
          <br />
          <ul>
            <li>How are <ArrowWord word='you' />?</li>
            <li>When is your <ArrowWord word='birthday' />?</li>
            <li>Why did you lie to <ArrowWord word='me' />?</li>
          </ul>
        </div>
        <br />
        <div>
          <b>Exclamations or Interjections:</b>
          <div>
            Statements that express surprise, awe, pain, etc. Interjections are always marked with an exclamation
            point (!)
          </div>
          <br />
          <ul>
            <li>That’s <ArrowWord word='amazing' />!</li>
            <li><ArrowWord word='Congratulations' />!</li>
            <li>You look lovely in that <ArrowWord word='dress' />!</li>
          </ul>
        </div>
        <br />
        <IntonationQuizLinks setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />
      </div>
    </div>
  );
}

export { Falling }