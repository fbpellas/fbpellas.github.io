import * as React from 'react';
import { HiPlay } from 'react-icons/hi';
import { BASE_PATH_IMG, BASE_PATH_SOUNDS } from '../constants';

export interface IntonationProps {
  setPageAndClear: (hash: string) => void;
}

const Intonation: React.FC<IntonationProps> = (props) => {
  const { setPageAndClear } = props;

  const audioTest1 = new Audio(`${BASE_PATH_SOUNDS}intonation/He failed the test1.m4a`);
  const audioTest2 = new Audio(`${BASE_PATH_SOUNDS}intonation/Hé failed the test2.m4a`);

  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">Intonation</h3>
        <img className="margin-top quarter-img" src={`${BASE_PATH_IMG}pitch.jpg`} alt="Pitch" />
        <div className="margin-top">
          Aside from grammar and vocabulary, learning intonation is equally important in American English.
        </div>
        <br />
        <div>Intonation refers to the tone and pitch of the voice when speaking.</div>
        <div>
          <div className="note">Pitch:</div> the highness or lowness of the voice
        </div>
        <div>
          <div className="note">Tone:</div> the way someone speaks
        </div>
        <br />
        <div>
          It helps others understand what kind of message you are trying to communicate. Are you happy? Sad? Surprised?
          Asking a question? Even though a person speaks with perfect grammar, the meaning could get lost if the
          intonation is not correct.
        </div>
        <br />
        <div>Listen to these sentences below.</div>
        <div>
          {' '}
          <HiPlay
            className="play-icon"
            onClick={() => {
              audioTest1.play();
            }}
          />
          He failed the <b>test.</b>
        </div>

        <div>
          {' '}
          <HiPlay
            className="play-icon"
            onClick={() => {
              audioTest2.play();
            }}
          />
          He failed the <b>test?</b>
        </div>
        <br />
        <div>
          The word <i>test</i> is the focus word, which is stressed or emphasized. When a word is stressed, the pitch is
          higher. There are 2 basic types of intonation: rising and falling.
        </div>
        <br />
        <div>
          In the first sentence, the intonation falls at the end of the sentence to show that the sentence is finished.
          On the other hand, the intonation on the second statement rises to show surprise or disbelief. The next
          sections discuss the different patterns of intonation:{' '}
          <a className="clickable-page" href="#falling" onClick={() => setPageAndClear('falling')}>
            falling
          </a>
          ,{' '}
          <a className="clickable-page" href="#rising" onClick={() => setPageAndClear('rising')}>
            rising
          </a>
          , and{' '}
          <a className="clickable-page" href="#non-final" onClick={() => setPageAndClear('non-final')}>
            non-final
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export { Intonation };
