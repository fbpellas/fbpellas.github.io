import * as React from 'react';
import { CardDeck } from 'react-bootstrap';
import { BASE_PATH_IMG } from '../constants';
import { Card } from './Card';

export interface HomeProps {
  setPageAndClear: (hash: string) => void;
}

const Home: React.FC<HomeProps> = (props) => {
  const { setPageAndClear } = props;
  return (
    <div className="block-2">
      <div className="article">
        <img
          className="full-img"
          src={`${BASE_PATH_IMG}IME Thesis.png`}
          alt="Learn the Art of Speaking American English"
        />
        <br />
        <CardDeck>
          <Card
            href='phonemes'
            title='Phonemes'
            description='Learn how to pronounce letters in English'
            setPageAndClear={setPageAndClear}
          />
          <Card
            href='stress'
            title='Word Stress'
            description='Understand how to emphasize each syllable'
            setPageAndClear={setPageAndClear}
          />
          <Card
            href='intonation'
            title='Intonation'
            description='Improve the pitch and the tone of your voice'
            setPageAndClear={setPageAndClear}
          />
        </CardDeck>
      </div>
    </div>
  );
}

export { Home }