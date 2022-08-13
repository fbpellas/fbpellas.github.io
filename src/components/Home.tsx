import * as React from 'react';
import { CardDeck } from 'react-bootstrap';
import { BASE_PATH_IMG } from '../constants';
import { Card } from './Card';
import { isMobile } from 'react-device-detect';

export interface HomeProps {
  setPageAndClear: (hash: string) => void;
}

const Home: React.FC<HomeProps> = (props) => {
  const { setPageAndClear } = props;
  const title = 'Learn the Art of Speaking American English';

  return (
    <div className="block-2">
      <div className="article">
        {isMobile ? (
          <div className="home-title">{title}</div>
        ) : (
          <>
            <img className="full-img" src={`${BASE_PATH_IMG}IME Thesis.png`} alt={title} />
            <br />
          </>
        )}
        <CardDeck>
          <Card
            href="phonemes"
            title="Phonemes"
            description="Learn how to pronounce letters in English"
            setPageAndClear={setPageAndClear}
          />
          <Card
            href="stress"
            title="Word Stress"
            description="Understand how to emphasize each syllable"
            setPageAndClear={setPageAndClear}
          />
          <Card
            href="intonation"
            title="Intonation"
            description="Improve the pitch and the tone of your voice"
            setPageAndClear={setPageAndClear}
          />
        </CardDeck>
      </div>
    </div>
  );
};

export { Home };
