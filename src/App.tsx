import * as React from 'react';
import { HiPlay } from 'react-icons/hi';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import { isMobile } from 'react-device-detect';
import classnames from 'classnames';
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
import { mapping, mappingPhoneme } from './search';
import uniqBy from 'lodash/uniqBy';
import { AUTHOR_FULLNAME, BASE_PATH_IMG, BASE_PATH_SOUNDS } from './constants';
import { NavHover, QuizIndex, Search, SearchMatch } from './types';
import { Footer } from './components/Footer';
import { Mission } from './components/Mission';
import { Vowels } from './components/Vowels';
import { Phonemes } from './components/Phonemes';
import { Diphthongs } from './components/Diphthongs';
import { Stress } from './components/Stress';
import { Consonants } from './components/Consonants';
import { Intonation } from './components/Intonation';
import { Falling } from './components/Falling';
import { Rising } from './components/Rising';
import { NonFinal } from './components/NonFinal';
import { Breadcrumbs } from './components/Breadcrumbs';
import { QuizCarousel } from './components/QuizCarousel';
import { Home } from './components/Home';
import { ContactForm } from './components/ContactForm';
import { AboutAuthor } from './components/AboutAuthor';
import { NavBar } from './components/NavBar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { MobileNavBar } from './components/MobileNavBar';

const App = () => {
  const {
    OddPhonemeOut,
    GuessThePattern,
    PhoneticSpelling,
    SameWordsDifferentStress,
    ShoppingForAPresent,
    WhereIsTheStress
  } = QuizIndex;
  const quizLastIndex = ShoppingForAPresent;

  const [navHovered, setNavHovered] = React.useState<NavHover | undefined>(undefined);
  const [search, setSearch] = React.useState('');
  const [matches, setMatches] = React.useState<SearchMatch[]>([]);
  const [indexCarousel, setIndexCarousel] = React.useState(OddPhonemeOut);

  const hash = window?.location?.hash?.substring(1);
  const [page, setPage] = React.useState(hash);
  const [quizAnswers, setQuizAnswers] = React.useState(defaultCustomQuizAnswers);

  const [quizStressAnswers, setQuizStressAnswers] = React.useState(defaultCustomQuizStressAnswers);

  const [quizScore, setQuizScore] = React.useState(0);
  const [quizStressScore, setQuizStressScore] = React.useState(0);
  const [quizStressTotal, setQuizStressTotal] = React.useState(0);

  const setPageAndClear = (hash: string) => {
    setNavHovered(undefined);
    setSearch('');
    setMatches([]);
    setPage(hash);
  };

  window.onhashchange = () => {
    const hash = window?.location?.hash?.substring(1);
    setPageAndClear(hash);
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
          const classNames = isCorrect ? 'correct-input attempt-input' : 'attempt-input';

          return (
            <div className="block">
              <input
                className={classNames}
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

  // TODO: use React Router ultimately
  const renderBody = () => {
    if (page === 'about-author') {
      return (
        <div className="anti-flex">
          <AboutAuthor />
          <hr />
          <ContactForm />
        </div>
      );
    }

    if (page === 'mission') {
      return <Mission />;
    }

    if (page === 'phonemes') {
      return <Phonemes setPageAndClear={setPageAndClear} />;
    }

    if (page === 'diphthongs') {
      return <Diphthongs />;
    }

    if (page === 'vowels') {
      return <Vowels setPageAndClear={setPageAndClear} />;
    }

    if (page === 'falling') {
      return <Falling setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />;
    }

    if (page === 'rising') {
      return <Rising setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />;
    }

    if (page === 'non-final') {
      return <NonFinal setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />;
    }

    if (page === 'consonants') {
      return <Consonants setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />;
    }

    if (page === 'stress') {
      return <Stress setIndexCarousel={setIndexCarousel} setPageAndClear={setPageAndClear} />;
    }

    if (page === 'intonation') {
      return <Intonation setPageAndClear={setPageAndClear} />;
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

      // TODO: create component
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Quiz</h3>
            <QuizCarousel indexCarousel={indexCarousel} setIndexCarousel={setIndexCarousel} />
            {indexCarousel === OddPhonemeOut && <Quiz quiz={quiz} showInstantFeedback={true} />}
            {indexCarousel === PhoneticSpelling && renderCustomQuiz()}
            {indexCarousel === SameWordsDifferentStress && renderCustomQuizStress()}
            {indexCarousel === WhereIsTheStress && (
              <>
                <div className="quiz-header">
                  <h3>Where’s the Stress?</h3>
                  <p>Choose the syllable that is pronounced with the correct word stress.</p>
                </div>
                <Quiz quiz={quizStress} showInstantFeedback={true} />
              </>
            )}
            {indexCarousel === GuessThePattern && (
              <>
                <div className="quiz-header">
                  <h3>Guess the Pattern</h3>
                  <p>Choose whether the following sentence has a falling, rising, or a non-final intonation.</p>
                </div>
                <Quiz quiz={quizIntonation} showInstantFeedback={true} />
              </>
            )}
            {indexCarousel === ShoppingForAPresent && (
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

    return <Home setPageAndClear={setPageAndClear} />;
  };

  const renderMatches = () => {
    if (matches.length === 0) {
      return null;
    }

    const matchesLinks = matches.map((m: SearchMatch) => {
      const { anchor, keyword, title } = m;
      const key = `search:${search};match:${anchor};keyword:${keyword};title:${title}`;

      return (
        <div key={key}>
          <a
            className="result"
            href={`#${anchor}`}
            onClick={() => {
              setPageAndClear(anchor);
            }}
          >
            {title}
          </a>{' '}
          {`("${keyword}")`}
        </div>
      );
    });

    return (
      <div className="resultsWrapper">
        <div className="results">
          Results: <div>{matchesLinks}</div>
        </div>
      </div>
    );
  };

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
      {isMobile && <MobileNavBar setPageAndClear={setPageAndClear} />}
      <div className="main">
        {!isMobile && (
          <a className="h1-title" href="#about-author" onClick={() => setPageAndClear('about-author')}>
            {AUTHOR_FULLNAME}
          </a>
        )}
        <a className="h2-title" href="#home" onClick={() => setPageAndClear('home')}>
          English Pronunciation
        </a>
        {!isMobile && (
          <Navbar className="navbar" expand="lg">
            <NavBar navHovered={navHovered} setPageAndClear={setPageAndClear} setNavHovered={setNavHovered} />
            <Form inline>
              <FormControl
                onKeyPress={(e: any) => {
                  if ([e.keyCode, e.which].includes(13)) {
                    e.preventDefault();

                    if (matches.length > 0) {
                      const match = matches[0];
                      const { anchor } = match;

                      setPageAndClear(anchor);
                      window.location.href = `#${anchor}`;
                    }
                  }
                }}
                onChange={(e) => {
                  const input = e.target.value;
                  const inputLowercase = input.toLowerCase();
                  setSearch(input);

                  const newMatches: SearchMatch[] = [];

                  const { length } = input;

                  if (length > 0) {
                    const mappingArray = length >= 2 ? mapping : mappingPhoneme;
                    mappingArray.forEach((mappingElement: Search) => {
                      const { anchor, title, keywords } = mappingElement;

                      const matchKey = keywords.find((k: string) => k.toLowerCase().includes(inputLowercase));

                      if (matchKey) {
                        newMatches.push({ keyword: matchKey, anchor, title });
                      }
                    });

                    const sortedNewMatches = newMatches.sort((a, b) => {
                      const { keyword: aKeyword } = a;
                      const { keyword: bKeyword } = b;

                      return aKeyword.length - bKeyword.length;
                    });

                    const uniqNewMatches = uniqBy(sortedNewMatches, (m) => m.title);
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
        )}

        <div className="body">
          {renderMatches()}
          <Breadcrumbs indexCarousel={indexCarousel} page={page} />
          {renderBody()}
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
