import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import { BASE_PATH_IMG } from '../constants';
import { QuizIndex } from '../types';

export interface QuizCarouselProps {
  indexCarousel: QuizIndex;
  setIndexCarousel: React.Dispatch<React.SetStateAction<QuizIndex>>;
}

const QuizCarousel: React.FC<QuizCarouselProps> = (props) => {
  const { indexCarousel, setIndexCarousel } = props;

  const handleSelect = (selectedIndex: number) => {
    setIndexCarousel(selectedIndex);
  };

  return (
    <Carousel activeIndex={indexCarousel} onSelect={handleSelect} interval={null} className="carousel-custom">
      <Carousel.Item>
        <img className="d-block w-100" src={`${BASE_PATH_IMG}quiz/ODD PHON.png`} alt="Odd Phoneme Out" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={`${BASE_PATH_IMG}quiz/PHONETIC SPELL.png`} alt="Phonetic Spelling" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={`${BASE_PATH_IMG}quiz/SAME WORDS.png`} alt="Same Words, Different Stress" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${BASE_PATH_IMG}quiz/WHERES THE STRESS bis.png`}
          alt="Where’s the Stress?"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={`${BASE_PATH_IMG}quiz/GUESS THE PATTERN.png`} alt="Guess the Pattern" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={`${BASE_PATH_IMG}quiz/SHOPPING.png`} alt="Shopping for a Present" />
      </Carousel.Item>
    </Carousel>
  );
};

export { QuizCarousel };
