import * as React from 'react';
import { HiPlay } from 'react-icons/hi';
import { BASE_PATH_IMG, BASE_PATH_SOUNDS } from '../constants';
import { QuizIndex } from '../types';

export interface StressProps {
  setIndexCarousel: React.Dispatch<React.SetStateAction<QuizIndex>>;
  setPageAndClear: (hash: string) => void;
}

const Stress: React.FC<StressProps> = (props) => {
  const { setIndexCarousel, setPageAndClear } = props;

  const audioPresent = new Audio(`${BASE_PATH_SOUNDS}stress/‘Present vs pre ‘sent.m4a`);
  const audioReject = new Audio(`${BASE_PATH_SOUNDS}stress/‘Reject re ‘ject.m4a`);
  const audioConduct = new Audio(`${BASE_PATH_SOUNDS}stress/‘Con duct vs Con ‘duct.m4a`);

  return (
    <div className="block-2">
      <div className="article">
        <h3 className="h3-title">Stress</h3>
        <img className="half-img" src={`${BASE_PATH_IMG}stress.jpg`} alt="Stress" />
        <div className="margin-top">
          Understanding word stress can help English language learners communicate clearly. A word stress emphasizes a
          syllable of a word with 2 or more syllables. Content words (nouns, verbs, adjectives) are usually stressed.
        </div>
        <br />
        <div>A syllable is a unit of a word with one vowel sound.</div>
        <br />
        <ul>
          <li>hi= 1 syllable</li>
          <li>flo~wer= 2 syllables</li>
          <li>e~lec~tric= 3 syllables</li>
          <li>sig~ni~fi~cant= 4 syllables</li>
        </ul>
        <br />
        <div>
          If a word has one syllable, there is no stress. Word stress is marked with the (ˈ) symbol which looks like an
          apostrophe. The stress mark comes before the stressed syllable.
        </div>
        <br />
        <p>e.g.</p>
        <ul>
          <li>hi / haɪ /</li>
          <li>ˈflower /ˈflaʊ ər/</li>
          <li>eˈlectric / ɪˈlɛk trɪk /</li>
          <li>sigˈnificant / sɪgˈnɪf ɪ kənt /</li>
        </ul>
        <br />
        <div>
          When pronouncing the stress, the syllable should sound a little higher, longer, and louder than the rest of
          the syllables.
        </div>
        <br />
        <h3 className="h3-title">Rule of Thumb</h3>
        <br />
        <div>2-syllable nouns: the first syllable is stressed</div>
        <br />
        <ul>
          <li>
            <u>per</u>son / ˈpɜr sən /
          </li>
          <li>
            <u>cas</u>tle / ˈkæs əl /
          </li>
          <li>
            <u>bas</u>ket /ˈbæs kɪt /
          </li>
        </ul>
        <br />
        <div>2-syllable verbs: the second syllable is stressed</div>
        <br />
        <ul>
          <li>
            de<u>mand</u> / dɪˈmænd /
          </li>
          <li>
            ar<u>rive</u> / əˈraɪv /
          </li>
          <li>
            com<u>plete</u> / kəmˈplit /
          </li>
        </ul>
        <br />
        <div>Some words are similar but have different meanings based on the word stress.</div>
        <br />
        <HiPlay
          className="play-icon"
          onClick={() => {
            audioPresent.play();
          }}
        />
        Play
        <ul>
          <li>ˈpresent (noun) : current moment or time</li>
          <li>preˈsent (verb) : to show</li>
        </ul>
        <br />
        <HiPlay
          className="play-icon"
          onClick={() => {
            audioReject.play();
          }}
        />
        Play
        <ul>
          <li>ˈreject (noun): something flawed or has mistakes and imperfections</li>
          <li>reˈject (verb): to refuse, to not accept</li>
        </ul>
        <br />
        <HiPlay
          className="play-icon"
          onClick={() => {
            audioConduct.play();
          }}
        />
        Play
        <ul>
          <li>ˈconduct (noun): behavior</li>
          <li>conˈduct (verb): to lead</li>
        </ul>
        <br />
        <div>What other words have similar spellings, but different meanings and stress?</div>
        <br />
        <div>Quiz yourself on how well you can distinguish word stress:</div>
        <ul>
          <li>
            <a
              className="clickable-page"
              href="#quiz"
              onClick={() => {
                setPageAndClear('quiz');
                setIndexCarousel(QuizIndex.SameWordsDifferentStress);
              }}
            >
              Same Words, Different Stress
            </a>
          </li>
          <li>
            <a
              className="clickable-page"
              href="#quiz"
              onClick={() => {
                setPageAndClear('quiz');
                setIndexCarousel(QuizIndex.WhereIsTheStress);
              }}
            >
              Where’s the Stress
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Stress };
