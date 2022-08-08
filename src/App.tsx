import * as React from 'react';
import { IoIosConstruct } from 'react-icons/io';
import { HiPlay } from 'react-icons/hi';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import classnames from 'classnames';
import { generateBreadcrumbs } from './utils';
import {
  correctCustomQuizAnswers,
  customQuiz,
  customQuizStress,
  defaultCustomQuizAnswers,
  defaultCustomQuizStressAnswers,
  quiz,
  quizIntonation,
  quizIntonationBis,
  quizStress
} from './quiz';
import Quiz from 'react-quiz-component';
import { mapping, mappingPhonemes } from './search';
import uniqBy from 'lodash/uniqBy';
import { isMobile } from 'react-device-detect';
import { Breadcrumb, Card, CardDeck, Carousel } from 'react-bootstrap';
import {
  AUTHOR_FIRSTNAME,
  AUTHOR_FULLNAME,
  BASE_PATH_IMG,
  BASE_PATH_SOUNDS,
  EMAIL
} from './constants';
import { QuizIndex } from './types';
import { Footer } from './components/Footer';
import { ArrowWord } from './components/ArrowWord';
import { Mission } from './components/Mission';
import { Vowels } from './components/Vowels';
import { Phonemes } from './components/Phonemes';
import { Diphthongs } from './components/Diphthongs';
import { Stress } from './components/Stress';
import { Consonants } from './components/Consonants';
import { Intonation } from './components/Intonation';
import { Falling } from './components/Falling';
import { IntonationQuizLinks } from './components/IntonationQuizLinks';

const quizLastIndex = QuizIndex.ShoppingForAPresent;

const App = () => {
  const [isAuthorHovered, setIsAuthorHovered] = React.useState(false);
  const [isIntonationHovered, setIsIntonationHovered] = React.useState(false);
  const [isPhonemesHovered, setIsPhonemesHovered] = React.useState(false);
  const [emailBody, setEmailBody] = React.useState('');
  const [emailSubject, setEmailSubject] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [matches, setMatches] = React.useState<any>([]);
  const [indexCarousel, setIndexCarousel] = React.useState(QuizIndex.OddPhonemeOut);

  const hash = window?.location?.hash?.substring(1);
  const [page, setPage] = React.useState(hash);
  const [quizAnswers, setQuizAnswers] = React.useState(defaultCustomQuizAnswers);

  const [quizStressAnswers, setQuizStressAnswers] = React.useState(defaultCustomQuizStressAnswers);

  const [quizScore, setQuizScore] = React.useState(0);
  const [quizStressScore, setQuizStressScore] = React.useState(0);
  const [quizStressTotal, setQuizStressTotal] = React.useState(0);

  const setPageAndClear = (hash: string) => {
    setSearch('');
    setMatches([]);
    setPage(hash);
  };

  window.onhashchange = () => {
    const hash = window?.location?.hash?.substring(1);
    setPageAndClear(hash);
  };

  const renderBreadcrumbs = () => {
    const breadcrumbs = generateBreadcrumbs(page, indexCarousel);

    const { length } = breadcrumbs;

    if (length <= 1) return null;

    return (
      <Breadcrumb>
        {breadcrumbs.map((breadcrumb, index) => {
          const { anchor, title } = breadcrumb;
          const isLast = index === length - 1;
          if (isLast) {
            return <Breadcrumb.Item active>{title}</Breadcrumb.Item>;
          }

          return <Breadcrumb.Item href={`#${anchor}`}>{title}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    );
  };

  const renderCustomQuiz = () => {
    return (
      <div className="custom-quiz">
        <img
          className="margin-top half-img"
          src={`${BASE_PATH_IMG}IPA chart.jpg`}
          alt="Learn the Art of Speaking American English"
        />
        <div className="margin-top">
          <h3>Phonetic Spelling</h3>
          {quizScore === 0 &&
            'Guess the words based on their phonetic spelling. The box will turn green if the answer is correct.'}
          {quizScore === 1 && 'Great work!'}
          {quizScore > 1 &&
            quizScore < correctCustomQuizAnswers.length &&
            `${quizScore} correct answers out of ${correctCustomQuizAnswers.length}, keep going`}
          {quizScore === correctCustomQuizAnswers.length && 'Congratulations! You did it!'}
          {quizScore === correctCustomQuizAnswers.length + 1 && 'Here are the full answers'}
        </div>
        <div>Refer to the IPA chart for clues.</div>
        <br />
        {customQuiz.map((c: string[], index: number) => {
          const currentValue = quizAnswers[index].toLocaleLowerCase().trim();
          const isCorrect = currentValue === c[1];
          return (
            <div className="block">
              <input
                className={isCorrect ? 'correct-input' : ''}
                maxLength={20}
                type="string"
                value={currentValue}
                onChange={(e) => {
                  const input = e.target.value;
                  const newQuizAnswers = { ...quizAnswers };
                  newQuizAnswers[index] = input;

                  let score = 0;
                  correctCustomQuizAnswers.forEach((correct, index: number) => {
                    if (newQuizAnswers[index] === correct) score += 1;
                  });

                  setQuizScore(score);

                  setQuizAnswers(newQuizAnswers);
                }}
              />
              <div className="inline">{c[0]}</div>
            </div>
          );
        })}
        <br />
        <button
          className="button-block custom-button"
          type="button"
          onClick={() => {
            setQuizScore(correctCustomQuizAnswers.length + 1);
            setQuizAnswers(correctCustomQuizAnswers);
          }}
        >
          Check Answers!
        </button>
        <button
          className="custom-button"
          type="button"
          onClick={() => {
            setQuizScore(0);
            setQuizAnswers(defaultCustomQuizAnswers);
          }}
        >
          Reset
        </button>
      </div>
    );
  };

  const renderCustomQuizStress = () => {
    const everythingAnswered = quizStressTotal === defaultCustomQuizStressAnswers.length;
    return (
      <div className="custom-quiz">
        <h3>Same Words, Different Stress</h3>
        Listen to the recording and choose the answer with the correct stress mark. Green indicates correct and red
        means the answer is wrong.
        {customQuizStress.map((c: any, index: number) => {
          const audioStress = new Audio(`${BASE_PATH_SOUNDS}${c[1]}`);
          const correctAnswer = c[4];
          const isDisabled = quizStressAnswers[index] !== 0;
          let classNameButton1 = '';
          let classNameButton2 = '';

          if (isDisabled) {
            if (correctAnswer === 1) {
              classNameButton1 = 'correct-button';
              classNameButton2 = 'incorrect-button';
            } else {
              classNameButton1 = 'incorrect-button';
              classNameButton2 = 'correct-button';
            }
          }

          const commonClassesButton = 'custom-button choice-button';

          return (
            <div className="margin-top">
              <HiPlay
                className="play-icon"
                onClick={() => {
                  audioStress.play();
                }}
              />
              <div className="margin-right inline">{c[0]}</div>
              <div>
                <button
                  disabled={isDisabled}
                  className={`${commonClassesButton} margin-right block ${classNameButton1}`}
                  type="button"
                  onClick={() => {
                    const newQuizStressAnswers = { ...quizStressAnswers };
                    const isCorrectAnswer = correctAnswer === 1;
                    const value = isCorrectAnswer ? 1 : -1;
                    newQuizStressAnswers[index] = value;
                    setQuizStressAnswers(newQuizStressAnswers);
                    setQuizStressTotal(quizStressTotal + 1);
                    if (isCorrectAnswer) setQuizStressScore(quizStressScore + 1);
                  }}
                >
                  {c[2]}
                </button>
                <button
                  className={`${commonClassesButton} inline ${classNameButton2}`}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => {
                    const newQuizStressAnswers = { ...quizStressAnswers };
                    const isCorrectAnswer = correctAnswer === 2;
                    const value = isCorrectAnswer ? 1 : -1;
                    newQuizStressAnswers[index] = value;
                    setQuizStressAnswers(newQuizStressAnswers);
                    setQuizStressTotal(quizStressTotal + 1);
                    if (isCorrectAnswer) setQuizStressScore(quizStressScore + 1);
                  }}
                >
                  {c[3]}
                </button>
              </div>
            </div>
          );
        })}
        {everythingAnswered && <p>{`You scored ${quizStressScore} out of ${defaultCustomQuizStressAnswers.length}`}</p>}
        <button
          className="margin-top custom-button"
          type="button"
          onClick={() => {
            setQuizStressAnswers(defaultCustomQuizStressAnswers);
            setQuizStressScore(0);
            setQuizStressTotal(0);
          }}
        >
          Reset
        </button>
      </div>
    );
  };

  const renderCard = (href: string, title: string, description: string, button: string) => {
    return (
      <Card>
        <Card.Body>
          <Card.Text>{title}</Card.Text>
          <Card.Title>{description}</Card.Title>
          <Button href={`#${href}`} onClick={() => setPageAndClear(href)} variant="secondary">
            {button}
          </Button>
        </Card.Body>
      </Card>
    );
  };

  const ControlledCarousel = () => {
    const handleSelect = (selectedIndex: number, e: any) => {
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
          <img
            className="d-block w-100"
            src={`${BASE_PATH_IMG}quiz/SAME WORDS.png`}
            alt="Same Words, Different Stress"
          />
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

  const renderMain = () => {
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
            {renderCard('phonemes', 'Phonemes', 'Learn how to pronounce letters in English', 'Learn')}
            {renderCard('stress', 'Word Stress', 'Understand how to emphasize each syllable', 'Learn')}
            {renderCard('intonation', 'Intonation', 'Improve the pitch and the tone of your voice', 'Learn')}
          </CardDeck>
        </div>
      </div>
    );
  };

  const renderBody = () => {
    if (page === 'about-author') {
      return (
        <div className="anti-flex">
          <div className="block-2">
            <div className="article">
              <h3 className="h3-title">About the Author</h3>
              <div className="flex-wrapper">
                <div className="flex-1">
                  <img className="full-img" src={`${BASE_PATH_IMG}faith.jpg`} alt={AUTHOR_FULLNAME} />
                </div>
                <div className="author-text flex-2">
                  <p>
                    {AUTHOR_FULLNAME} is a scholar at the University of San Francisco’s TESOL department. For the past
                    four years, she has been teaching English to learners from beginners to advanced levels. When she’s
                    not working on her thesis, {AUTHOR_FIRSTNAME} loves learning French, watercolor painting, and
                    sending postcards to her nearest and dearest.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <Form className="form">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Email form</Form.Label>
              <Form.Text className="text-muted">{`Or send me an email directly at ${EMAIL}`}</Form.Text>
              <br />
              <Form.Label>Subject</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmailSubject(e.target.value);
                }}
                type="text"
                placeholder="Subject"
              />
              <br />
              <Form.Label>Body</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmailBody(e.target.value);
                }}
                as="textarea"
                rows={10}
                placeholder="Your message"
              />
            </Form.Group>
            <br />
            <Button
              onClick={() => {
                window.open(
                  `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
                );
              }}
              variant="warning"
              type="submit"
            >
              Send
            </Button>
          </Form>
        </div>
      );
    }

    if (page === 'mission') {
      return <Mission />;
    }

    // TODO: create component
    const renderRising = () => {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Rising Intonation <ArrowWord isUp /></h3>
            <div className="margin-top">
              The voice rises at the end of the statement. We often use this pattern when asking a yes or no question, a
              question tag, or to show surprise or disbelief.
            </div>
            <br />
            <div>
              <b>Yes/No Questions:</b>
              <br />
              <ul>
                <li>Are you working <ArrowWord isUp word='tomorrow' />?</li>
                <li>Has Stephen called <ArrowWord isUp word='you' />?</li>
                <li>Could you please print out the <ArrowWord isUp word='documents' />?</li>
              </ul>
            </div>
            <br />
            <div>
              <b>Question Tags:</b>
              <div>
                Questions at the end of the sentence to ask for confirmation. A question tag consists of an auxiliary
                verb (am, is, are, can, have, do, does, etc.) and a pronoun.
              </div>
              <br />
              <ul>
                <li>They left already, didn’t <ArrowWord isUp word='they' />?</li>
                <li>Sandra is your cousin, isn’t <ArrowWord isUp word='she' />?</li>
                <li>You can ride a motorcycle, can’t <ArrowWord isUp word='you' />?</li>
              </ul>
            </div>
            <br />
            <div>
              <b>Surprise or Disbelief:</b>
              <div>The intonation rises on the word that is emphasized.</div>
              <br />
              <ul>
                <li><ArrowWord isUp word='Really' />? Where did you hear that?</li>
                <li>
                  She won 5 million dollars in the <ArrowWord isUp word='lottery' />? -disbelief that she won the
                  ‘lottery’
                </li>
                <li>
                  She won <ArrowWord isUp word='5 million' /> dollars in the lottery? -disbelief that she won $5
                  million
                </li>
              </ul>
            </div>
            <br />
            <IntonationQuizLinks setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />
          </div>
        </div>
      );
    };

    // TODO: create component
    const renderNonFinal = () => {
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
    };

    if (page === 'phonemes') {
      return <Phonemes setPageAndClear={setPageAndClear} />
    }

    if (page === 'diphthongs') {
      return <Diphthongs />
    }

    if (page === 'vowels') {
      return <Vowels setPageAndClear={setPageAndClear} />;
    }

    if (page === 'falling') {
      return <Falling setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />
    }

    if (page === 'rising') {
      return renderRising();
    }

    if (page === 'non-final') {
      return renderNonFinal();
    }

    if (page === 'consonants') {
      return <Consonants setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />

    }

    if (page === 'stress') {
      return <Stress setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />
    }

    if (page === 'intonation') {
      return <Intonation setPageAndClear={setPageAndClear} />
    }

    if (page === 'quiz') {
      const previousQuizClasses = classnames(`flex-1 previous-quiz`, {
        'disabled-quiz': indexCarousel === 0,
        'selection-quiz': indexCarousel !== 0
      });

      const nextQuizClasses = classnames(`flex-1 next-quiz`, {
        'disabled-quiz': indexCarousel === quizLastIndex,
        'selection-quiz': indexCarousel !== quizLastIndex
      });

      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Quiz</h3>
            <ControlledCarousel />
            {indexCarousel === QuizIndex.OddPhonemeOut && <Quiz quiz={quiz} showInstantFeedback={true} />}
            {indexCarousel === QuizIndex.PhoneticSpelling && renderCustomQuiz()}
            {indexCarousel === QuizIndex.SameWordsDifferentStress && renderCustomQuizStress()}
            {indexCarousel === QuizIndex.WhereIsTheStress && (
              <>
                <div className="quiz-header">
                  <h3>Where’s the Stress?</h3>
                  <p>Choose the syllable that is pronounced with the correct word stress.</p>
                </div>
                <Quiz quiz={quizStress} showInstantFeedback={true} />
              </>
            )}
            {indexCarousel === QuizIndex.GuessThePattern && (
              <>
                <div className="quiz-header">
                  <h3>Guess the Pattern</h3>
                  <p>Choose whether the following sentence has a falling, rising, or a non-final intonation.</p>
                </div>
                <Quiz quiz={quizIntonation} showInstantFeedback={true} />
              </>
            )}
            {indexCarousel === QuizIndex.ShoppingForAPresent && (
              <>
                <div className="margin-top discussion">
                  <p>Read the conversation between Annie and the salesperson.</p>
                  <ol>
                    <li>
                      Salesperson: Hello! <b>How can I help you?</b>
                    </li>
                    <li>
                      Annie: <b>Hi!</b> I’m looking for a present for my sister’s birthday. What would you recommend?
                    </li>
                    <li>
                      S: Well, what does she like? <b>Is she into sports?</b> Does she love art?
                    </li>
                    <li>
                      A: I’m not so sure, <b>she already has everything.</b>
                    </li>
                    <li>
                      S: <b>If I were you,</b> I would give her new clothes. Maybe that shirt?
                    </li>
                    <li>
                      A: Oh, I think she will like that. Should I get her the <b>blue or grey</b>?
                    </li>
                    <li>
                      S: Why not give her one of every color? We have <b>blue, grey, pink, and orange.</b>
                    </li>
                    <li>
                      A: I’ll take them all. <b>Add the scarf as well,</b> please.
                    </li>
                    <li>
                      S: Okay, <b>that would be $280 in total.</b>
                    </li>
                    <li>
                      A: <b>$280?</b> I think I’ll just get the scarf, then.
                    </li>
                  </ol>
                </div>
                <div className="quiz-header">
                  <h3>Shopping for a Present</h3>
                  <p>Identify whether the following phrase has a falling, rising, or a non-final intonation.</p>
                </div>
                <Quiz className="margin-top" quiz={quizIntonationBis} showInstantFeedback={true} />
              </>
            )}
          </div>
          <div className="flex-wrapper footer-quiz">
            <a
              className={previousQuizClasses}
              href="#quiz"
              onClick={() => {
                if (indexCarousel > 0) {
                  setIndexCarousel(indexCarousel - 1);
                }
              }}
            >
              ← Previous Quiz
            </a>
            <a
              className={nextQuizClasses}
              href="#quiz"
              onClick={() => {
                if (indexCarousel < quizLastIndex) {
                  setIndexCarousel(indexCarousel + 1);
                }
              }}
            >
              Next Quiz →
            </a>
          </div>
        </div>
      );
    }

    return renderMain();
  };

  const renderMatches = () => {
    if (matches.length === 0 && search.length > 0) {
      return (
        <div className="resultsWrapper">
          <div className="results">No results yet...</div>
        </div>
      );
    }

    if (matches.length === 0) return null;

    const matchesLinks = matches.map((m: any) => (
      <div>
        <a
          className="result"
          href={`#${m[1]}`}
          onClick={() => {
            setPageAndClear(m[1]);
          }}
        >
          {m[2]}
        </a>{' '}
        {`("${m[0]}")`}
      </div>
    ));

    return (
      <div className="resultsWrapper">
        <div className="results">
          Results: <div>{matchesLinks}</div>
        </div>
      </div>
    );
  };

  if (isMobile) {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{`English Pronunciation by ${AUTHOR_FULLNAME}`}</title>
          <link rel="canonical" href="https://fbpellas.github.io/" />
        </Helmet>
        <div className="mobile">
          <h1>{AUTHOR_FULLNAME}</h1>
          <h2>English Pronunciation</h2>
          <div>
            We are working hard to make this website accessible on mobile. In the meantime, please visit it on a
            computer instead. Thank you for your understanding!
          </div>
        </div>
        <br />
        <IoIosConstruct className="icon-mobile" size="100px" />
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        data-cross-origin="anonymous"
      />
      <Helmet>
        <title>{`English Pronunciation by ${AUTHOR_FULLNAME}`}</title>
        <link rel="canonical" href="https://fbpellas.github.io/" />
      </Helmet>
      <div className="main">
        <a className="h1-title" href="#about-author" onClick={() => setPageAndClear('about-author')}>
          {AUTHOR_FULLNAME}
        </a>
        <a className="h2-title" href="#home" onClick={() => setPageAndClear('home')}>
          English Pronunciation
        </a>
        <Navbar className="navbar" expand="lg">
          <Dropdown
            onMouseEnter={() => {
              setIsAuthorHovered(true);
              setIsIntonationHovered(false);
              setIsPhonemesHovered(false);
            }}
            onMouseLeave={() => {
              setIsAuthorHovered(false);
            }}
            show={isAuthorHovered}
          >
            <Dropdown.Toggle
              href="#about-author"
              onClick={() => {
                setPageAndClear('about-author');
                setIsAuthorHovered(false);
              }}
              variant="secondary"
              id="dropdown-about"
            >
              About
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#about-author"
                onClick={() => {
                  setPageAndClear('about-author');
                  setIsAuthorHovered(false);
                }}
              >
                About the Author
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setPageAndClear('mission');
                  setIsAuthorHovered(false);
                }}
                href="#mission"
              >
                Mission
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            onMouseEnter={() => {
              setIsPhonemesHovered(true);
              setIsAuthorHovered(false);
              setIsIntonationHovered(false);
            }}
            onMouseLeave={() => {
              setIsPhonemesHovered(false);
            }}
            show={isPhonemesHovered}
          >
            <Dropdown.Toggle
              href="#phonemes"
              onClick={() => {
                setPageAndClear('phonemes');
                setIsPhonemesHovered(false);
              }}
              variant="secondary"
              id="dropdown-phonemes"
            >
              Phonemes
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#vowels"
                onClick={() => {
                  setPageAndClear('vowels');
                  setIsPhonemesHovered(false);
                }}
              >
                Vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#diphthongs"
                onClick={() => {
                  setPageAndClear('diphthongs');
                  setIsPhonemesHovered(false);
                }}
              >
                Diphthongs
              </Dropdown.Item>
              <Dropdown.Item
                href="#consonants"
                onClick={() => {
                  setPageAndClear('consonants');
                  setIsPhonemesHovered(false);
                }}
              >
                Consonants
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav>
            <Nav.Link href="#stress" onClick={() => setPageAndClear('stress')}>
              Stress
            </Nav.Link>
          </Nav>
          <Dropdown
            onMouseEnter={() => {
              setIsIntonationHovered(true);
              setIsAuthorHovered(false);
              setIsPhonemesHovered(false);
            }}
            onMouseLeave={() => {
              setIsIntonationHovered(false);
            }}
            show={isIntonationHovered}
          >
            <Dropdown.Toggle
              href="#intonation"
              onClick={() => {
                setPageAndClear('intonation');
                setIsIntonationHovered(false);
              }}
              variant="secondary"
              id="dropdown-intonation"
            >
              Intonation
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#falling"
                onClick={() => {
                  setPageAndClear('falling');
                  setIsIntonationHovered(false);
                }}
              >
                Falling
              </Dropdown.Item>
              <Dropdown.Item
                href="#rising"
                onClick={() => {
                  setPageAndClear('rising');
                  setIsIntonationHovered(false);
                }}
              >
                Rising
              </Dropdown.Item>
              <Dropdown.Item
                href="#non-final"
                onClick={() => {
                  setPageAndClear('non-final');
                  setIsIntonationHovered(false);
                }}
              >
                Non-Final
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="mr-auto">
            <Nav.Link href="#quiz" onClick={() => setPageAndClear('quiz')}>
              Quiz
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onKeyPress={(e: any) => {
                if ([e.keyCode, e.which].includes(13)) {
                  e.preventDefault();

                  if (matches.length > 0) {
                    const match = matches[0];
                    const key = match[1];

                    setPageAndClear(key);
                    window.location.href = `#${key}`;
                  }
                }
              }}
              onChange={(e) => {
                const input = e.target.value;
                const inputLowercase = input.toLowerCase();
                setSearch(input);

                const newMatches: any[] = [];

                const { length } = input;

                if (length > 0) {
                  const mappingArray = length >= 3 ? mapping : mappingPhonemes;
                  mappingArray.forEach((m: any) => {
                    const key = m[0];

                    const matchKey = key.find((k: any) => k.toLowerCase().includes(inputLowercase));

                    if (matchKey) {
                      newMatches.push([matchKey, m[1], m[2]]);
                    }
                  });

                  const sortedNewMatches = newMatches.sort(function (a, b) {
                    return a[0].length - b[0].length;
                  });

                  const uniqNewMatches = uniqBy(sortedNewMatches, (m) => m[2]);
                  setMatches(uniqNewMatches);
                } else {
                  setMatches([]);
                }
              }}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={search}
            />
          </Form>
        </Navbar>

        <div className="body">
          {renderMatches()}
          {renderBreadcrumbs()}
          {renderBody()}
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
