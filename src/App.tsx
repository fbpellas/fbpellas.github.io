import * as React from "react";
import { IoIosConstruct } from "react-icons/io";
import { HiPlay } from "react-icons/hi";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import {
  correctCustomQuizAnswers,
  customQuiz,
  customQuizStress,
  defaultCustomQuizAnswers,
  defaultCustomQuizStressAnswers,
  quiz,
  quizIntonation,
  quizIntonationBis,
  quizStress,
} from "./quiz";
import Quiz from "react-quiz-component";
import { diphthongs, consonants, vowels } from "./phonemes";
import { mapping, mappingPhonemes } from "./search";
import uniqBy from "lodash/uniqBy";
import { isMobile } from "react-device-detect";
import {
  Breadcrumb,
  Card,
  CardDeck,
  Carousel,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

export const BASE_PATH_IMG = `https://raw.githubusercontent.com/fbpellas/fbpellas.github.io/develop/public/img/`;
export const BASE_PATH = `https://raw.githubusercontent.com/fbpellas/fbpellas.github.io/develop/public/sounds/`;
export const EMAIL = "fbpellas@usfca.edu";

const App = () => {
  const [isAuthorHovered, setIsAuthorHovered] = React.useState(false);
  const [isPhonemesHovered, setIsPhonemesHovered] = React.useState(false);
  const [emailBody, setEmailBody] = React.useState("");
  const [emailSubject, setEmailSubject] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [matches, setMatches] = React.useState<any>([]);
  const [indexCarousel, setIndexCarousel] = React.useState(0);

  const hash = window?.location?.hash?.substr(1);
  const [page, setPage] = React.useState(hash);
  const [quizAnswers, setQuizAnswers] = React.useState(
    defaultCustomQuizAnswers
  );

  const [quizStressAnswers, setQuizStressAnswers] = React.useState(
    defaultCustomQuizStressAnswers
  );

  const [quizScore, setQuizScore] = React.useState(0);
  const [quizStressScore, setQuizStressScore] = React.useState(0);
  const [quizStressTotal, setQuizStressTotal] = React.useState(0);

  const setPageAndClear = (hash: string) => {
    setSearch("");
    setMatches([]);
    setPage(hash);
  };

  window.onhashchange = function () {
    const hash = window?.location?.hash?.substr(1);
    setPageAndClear(hash);
  };

  const renderBreadcrumbs = () => {
    const links = [["home", "Home"]];

    switch (page) {
      case "about-author":
        links.push([page, "About the Author"]);
        break;

      case "mission":
        links.push([page, "Mission"]);
        break;

      case "phonemes":
        links.push([page, "Phonemes"]);
        break;

      case "vowels":
        links.push(["phonemes", "Phonemes"]);
        links.push([page, "Vowels"]);
        break;

      case "diphthongs":
        links.push(["phonemes", "Phonemes"]);
        links.push([page, "Diphthongs"]);
        break;

      case "consonants":
        links.push(["phonemes", "Phonemes"]);
        links.push([page, "Consonants"]);
        break;

      case "stress":
        links.push([page, "Stress"]);
        break;

      case "intonation":
        links.push([page, "Intonation"]);
        break;

      case "quiz":
        links.push([page, "Quiz"]);
        break;
    }

    const { length } = links;

    if (length <= 1) return null;

    return (
      <Breadcrumb>
        {links.map((link, index) => {
          const [anchor, title] = link;
          if (index === length - 1) {
            return <Breadcrumb.Item active>{title}</Breadcrumb.Item>;
          }

          return <Breadcrumb.Item href={`#${anchor}`}>{title}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    );
  };

  const renderTooltip = (
    word: string,
    definition: string,
    className = "text-inline bottom-dot"
  ) => {
    return (
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={<Tooltip id={`tooltip-bottom`}>{definition}</Tooltip>}
      >
        <div className={className}>{word}</div>
      </OverlayTrigger>
    );
  };

  const renderTable = (data: any) => {
    return (
      <table>
        <tr>
          <th>{renderTooltip("Phonemes", "Sounds", "text-center")}</th>
          <th className="text-center">
            {renderTooltip(
              "Grapheme",
              "Letters that spell the sound",
              "text-center"
            )}
          </th>
          <th className="text-center">Examples</th>
        </tr>
        {data.map((line: any) => {
          const phonemesSound = line[3];
          const examplesSound = line[4];

          const audioPhonemes = new Audio(`${BASE_PATH}${phonemesSound}`);
          const audioExamples = new Audio(`${BASE_PATH}${examplesSound}`);

          return (
            <tr>
              <td>
                <HiPlay
                  className="play-icon"
                  onClick={() => {
                    audioPhonemes.play();
                  }}
                />
                {line[0]}
              </td>
              <td>{line[1]}</td>
              <td>
                <HiPlay
                  className="play-icon"
                  onClick={() => {
                    audioExamples.play();
                  }}
                />
                <div
                  className="text-inline"
                  dangerouslySetInnerHTML={{ __html: line[2] }}
                />
              </td>
            </tr>
          );
        })}
      </table>
    );
  };

  const renderDiphthongs = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">Diphthongs</h3>
          <div>
            Diphthongs are a combination of two vowel sounds. There are eight
            diphthongs in the{" "}
            {renderTooltip("IPA", "International Phonetic Alphabet")}: aɪ, eɪ,
            ɔɪ, aʊ, ɪə, ʊə, əʊ, eə. However, only five sounds are produced in
            American English.
          </div>
          {renderTable(diphthongs)}
        </div>
      </div>
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
          {quizScore === 0 &&
            "Guess the words based on their phonetic spelling. The box will turn green if the answer is correct."}
          {quizScore === 1 && "Great work!"}
          {quizScore > 1 &&
            quizScore < correctCustomQuizAnswers.length &&
            `${quizScore} correct answers out of ${correctCustomQuizAnswers.length}, keep going`}
          {quizScore === correctCustomQuizAnswers.length &&
            "Congratulations! You did it!"}
          {quizScore === correctCustomQuizAnswers.length + 1 &&
            "Here are the full answers"}
        </div>
        {customQuiz.map((c: string[], index: number) => {
          const currentValue = quizAnswers[index].toLocaleLowerCase().trim();
          const isCorrect = currentValue === c[1];
          return (
            <div className="block">
              <input
                className={isCorrect ? "correct-input" : ""}
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
          className="button-block"
          type="button"
          onClick={() => {
            setQuizScore(correctCustomQuizAnswers.length + 1);
            setQuizAnswers(correctCustomQuizAnswers);
          }}
        >
          Check Answers!
        </button>
        <button
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
    const everythingAnswered =
      quizStressTotal === defaultCustomQuizStressAnswers.length;
    return (
      <div className="custom-quiz">
        Listen to the recording and choose the answer with the correct stress
        mark.
        {customQuizStress.map((c: any, index: number) => {
          const audioStress = new Audio(`${BASE_PATH}${c[1]}`);
          const correctAnswer = c[4];
          const isDisabled = quizStressAnswers[index] !== 0;
          let classNameButton1 = "";
          let classNameButton2 = "";

          if (isDisabled) {
            if (correctAnswer === 1) {
              classNameButton1 = "correct-button";
              classNameButton2 = "incorrect-button";
            } else {
              classNameButton1 = "incorrect-button";
              classNameButton2 = "correct-button";
            }
          }

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
                  className={`margin-right block ${classNameButton1}`}
                  type="button"
                  onClick={() => {
                    const newQuizStressAnswers = { ...quizStressAnswers };
                    const isCorrectAnswer = correctAnswer === 1;
                    const value = isCorrectAnswer ? 1 : -1;
                    newQuizStressAnswers[index] = value;
                    setQuizStressAnswers(newQuizStressAnswers);
                    setQuizStressTotal(quizStressTotal + 1);
                    if (isCorrectAnswer)
                      setQuizStressScore(quizStressScore + 1);
                  }}
                >
                  {c[2]}
                </button>
                <button
                  className={`inline ${classNameButton2}`}
                  type="button"
                  disabled={isDisabled}
                  onClick={() => {
                    const newQuizStressAnswers = { ...quizStressAnswers };
                    const isCorrectAnswer = correctAnswer === 2;
                    const value = isCorrectAnswer ? 1 : -1;
                    newQuizStressAnswers[index] = value;
                    setQuizStressAnswers(newQuizStressAnswers);
                    setQuizStressTotal(quizStressTotal + 1);
                    if (isCorrectAnswer)
                      setQuizStressScore(quizStressScore + 1);
                  }}
                >
                  {c[3]}
                </button>
              </div>
            </div>
          );
        })}
        {everythingAnswered && (
          <p>
            {`You scored ${quizStressScore} out of ${defaultCustomQuizStressAnswers.length}`}
          </p>
        )}
        <button
          className="margin-top"
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

  const renderVowels = () => {
    return (
      <div className="block-2">
        <div className="article">
          <h2 className="h3-title vowels-title">Vowels</h2>
          <br />
          <div>
            Vowels are a set of unblocked sounds. They consist of the letters A,
            E, I, O, U (sometimes Y). The{" "}
            {renderTooltip("IPA", "International Phonetic Alphabet")} lists 20
            phonemes categorized as long, short, and{" "}
            <a
              className="clickable-page"
              href="#diphthongs"
              onClick={() => setPageAndClear("diphthongs")}
            >
              diphthongs
            </a>
            .
          </div>
          <br />
          <div>
            Vowels can sometimes be categorized as lax (short) and tense (long)
            depending on how much effort the lips and tongue make when producing
            the sound.
          </div>
          <br />
          <div>
            Listed below are the phonemes that are widely used in the American
            English language. Some words might vary in phonemes depending on
            regional dialects.
          </div>
          {renderTable(vowels)}
        </div>
      </div>
    );
  };

  const renderStress = () => {
    const audioPresent = new Audio(
      `${BASE_PATH}stress/‘Present vs pre ‘sent.m4a`
    );

    const audioReject = new Audio(`${BASE_PATH}stress/‘Reject re ‘ject.m4a`);
    const audioConduct = new Audio(
      `${BASE_PATH}stress/‘Con duct vs Con ‘duct.m4a`
    );

    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">Stress</h3>
          <img
            className="half-img"
            src={`${BASE_PATH_IMG}stress.jpg`}
            alt="Stress"
          />
          <div className="margin-top">
            Understanding word stress can help English language learners
            communicate clearly. A word stress emphasizes a syllable of a word
            with 2 or more syllables. Content words (nouns, verbs, adjectives)
            are usually stressed.
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
            If a word has one syllable, there is no stress. Word stress is
            marked with the (ˈ) symbol which looks like an apostrophe. The
            stress mark comes before the stressed syllable.
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
            When pronouncing the stress, the syllable should sound a little
            higher, longer, and louder than the rest of the syllables.
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
          <div>
            Some words are similar but have different meanings based on the word
            stress.
          </div>
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
            <li>
              ˈreject (noun): something flawed or has mistakes and imperfections
            </li>
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
          <div>
            What other words have similar spellings, but different meanings and
            stress?
          </div>
        </div>
      </div>
    );
  };

  const renderIntonation = () => {
    const audioTest1 = new Audio(
      `${BASE_PATH}stress/‘Present vs pre ‘sent.m4a`
    );

    return (
      <div className="block-2">
        <div className="article">
          <h3 className="h3-title">Intonation</h3>
          <img
            className="margin-top half-img"
            src={`${BASE_PATH_IMG}pitch.jpg`}
            alt="Pitch"
          />
          <div>
            Aside from grammar and vocabulary, learning intonation is equally
            important in American English.
          </div>
          <br />
          <div>
            Intonation refers to the tone and pitch of the voice when speaking.
          </div>
          <div>
            <div className="note">Pitch:</div> the highness or lowness of the
            voice
          </div>
          <div>
            <div className="note">Tone:</div> the way someone speaks
          </div>
          <br />
          <div>
            It helps others understand what kind of message you are trying to
            communicate. Are you happy? Sad? Surprised? Asking a question? Even
            though a person speaks with perfect grammar, the meaning could get
            lost if the intonation is not correct.
          </div>
          <br />
          <div>Listen to these sentences below.</div>
        </div>
      </div>
    );
  };

  const renderCard = (href: string, title: string, button: string) => {
    return (
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Description</Card.Text>
          <Button
            href={`#${href}`}
            onClick={() => setPageAndClear(href)}
            variant="secondary"
          >
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
      <Carousel
        activeIndex={indexCarousel}
        onSelect={handleSelect}
        interval={null}
        className="carousel-custom"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/200x100"
            alt="Odd Phoneme Out"
          />
          <Carousel.Caption>
            <h3>Odd Phoneme Out</h3>
            <p>Choose the word that has a different phoneme from the rest.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/200x100"
            alt="Phonetic Spelling"
          />

          <Carousel.Caption>
            <h3>Phonetic Spelling</h3>
            <p>Guess the words based on their phonetic spelling.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/200x100"
            alt="Same Words, Different Stress"
          />
          <Carousel.Caption>
            <h3>Same Words, Different Stress</h3>
            <p>
              Listen to the recording and choose the answer with the correct
              stress mark.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/200x100"
            alt="Where’s the Stress?"
          />
          <Carousel.Caption>
            <h3>Where’s the Stress?</h3>
            <p>
              Choose the number of syllable where the stress appears. If there
              is no stress, choose zero.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/200x100"
            alt="Guess the Pattern"
          />
          <Carousel.Caption>
            <h3>Guess the Pattern</h3>
            <p>
              Read each sentence and choose whether it has a falling, rising, or
              non-final intonation.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/200x100"
            alt="Shopping for a Present"
          />
          <Carousel.Caption>
            <h3>Shopping for a Present</h3>
            <p>
              Identify whether the phrases in bold have a falling, rising, or
              non-final intonation.
            </p>
          </Carousel.Caption>
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
            {renderCard("phonemes", "Phonemes", "Practice sounds")}
            {renderCard("intonation", "Intonation", "Practice intonation")}
            {renderCard("stress", "Stress", "Practice stress")}
          </CardDeck>
        </div>
      </div>
    );
  };

  const renderBody = () => {
    if (page === "about-author") {
      return (
        <div className="anti-flex">
          <div className="block-2">
            <div className="article">
              <h3 className="h3-title">About the Author</h3>
              <div className="flex-wrapper">
                <div className="flex-1">
                  <img
                    className="full-img"
                    src={`${BASE_PATH_IMG}faith.jpg`}
                    alt="Faith Pellas"
                  />
                </div>
                <div className="author-text flex-2">
                  <p>
                    Faith Pellas is a scholar at the University of San
                    Francisco’s TESOL department. For the past four years, she
                    has been teaching English to learners from beginners to
                    advanced levels. When she’s not working on her thesis, Faith
                    loves learning French, watercolor painting, and sending
                    postcards to her nearest and dearest.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <Form className="form">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Email form</Form.Label>
              <Form.Text className="text-muted">
                {`Or send me an email directly at ${EMAIL}`}
              </Form.Text>
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
                  `mailto:${EMAIL}?subject=${encodeURIComponent(
                    emailSubject
                  )}&body=${encodeURIComponent(emailBody)}`
                );
              }}
              variant="warning"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      );
    }

    if (page === "mission") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Mission</h3>
            <img
              className="half-img"
              src={`${BASE_PATH_IMG}wall.jpeg`}
              alt="Learn the Art of Speaking American English"
            />
            <p className="margin-top">
              One of the biggest goals for language learners is to learn how to
              speak with the correct pronunciation of their target language.
              Unfortunately, many English as a second/foreign language (ESL/EFL)
              curricula do not focus on pronunciation, therefore, many teachers
              lack training in this field. The purpose of this website is to
              help teachers and students understand the basics of pronunciation.
              By learning pronunciation, students can feel more confident in
              speaking and communicating.
            </p>
          </div>
        </div>
      );
    }

    if (page === "phonemes") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Phonemes</h3>
            <div>
              According to the International Phonetic Alphabet (IPA), there are
              26 letters and 44 phonemes (or sounds) in the English alphabet.
              These letters are divided into two categories:{" "}
              <a
                className="clickable-page"
                href="#vowels"
                onClick={() => setPageAndClear("vowels")}
              >
                vowels
              </a>{" "}
              and{" "}
              <a
                className="clickable-page"
                href="#consonants"
                onClick={() => setPageAndClear("consonants")}
              >
                consonants
              </a>
              .
            </div>
            <br />
            <div>
              <div className="note">Note:</div> Phonemes should not rely on the
              word’s spelling. For example, the word m
              <i>
                <b>oo</b>
              </i>
              n is not spelled with the letter ‘u’, yet is produced with the
              long /u/ phoneme.{" "}
            </div>
            <img
              className="margin-top half-img"
              src={`${BASE_PATH_IMG}IPA chart.jpg`}
              alt="Learn the Art of Speaking American English"
            />
          </div>
        </div>
      );
    }

    if (page === "diphthongs") {
      return renderDiphthongs();
    }

    if (page === "vowels") {
      return renderVowels();
    }

    if (page === "consonants") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Consonants</h3>
            <div>
              Consonants have 24 blocked sounds. In the{" "}
              {renderTooltip("IPA", "International Phonetic Alphabet")} chart,
              consonants are arranged completely differently from the English
              alphabet.
            </div>
            <div>
              Phonemes like /p/ and /b/ are next to each other because the lips
              and the tongue move the same way when producing these sounds. The
              only difference is the phoneme on the left is unvoiced (no
              vibration on the throat) and the phoneme on the right is voiced
              (there is vibration on the throat).
            </div>
            {renderTable(consonants)}
          </div>
        </div>
      );
    }

    if (page === "stress") {
      return renderStress();
    }

    if (page === "intonation") {
      return renderIntonation();
    }

    if (page === "quiz") {
      return (
        <div className="block-2">
          <div className="article">
            <h3 className="h3-title">Quiz</h3>
            <ControlledCarousel />
            {indexCarousel === 0 && (
              <Quiz quiz={quiz} showInstantFeedback={true} />
            )}
            {indexCarousel === 1 && renderCustomQuiz()}
            {indexCarousel === 2 && renderCustomQuizStress()}
            {indexCarousel === 3 && (
              <Quiz quiz={quizStress} showInstantFeedback={true} />
            )}
            {indexCarousel === 4 && (
              <Quiz quiz={quizIntonation} showInstantFeedback={true} />
            )}
            {indexCarousel === 5 && (
              <>
                <div className="margin-top discussion">
                  <ol>
                    <li>
                      Salesperson: Hello! <b>How can I help you?</b>
                    </li>
                    <li>
                      Annie: <b>Hi!</b> I’m looking for a present for my
                      sister’s birthday. What would you recommend?
                    </li>
                    <li>
                      S: Well, what does she like? <b>Is she into sports?</b>{" "}
                      Does she love art?
                    </li>
                    <li>
                      A: I’m not so sure, <b>she already has everything.</b>
                    </li>
                    <li>
                      S: <b>If I were you,</b> I would give her new clothes.
                      Maybe that shirt?
                    </li>
                    <li>
                      A: Oh, I think she will like that. Should I get her the{" "}
                      <b>blue or grey</b>?
                    </li>
                    <li>
                      S: Why not give her one of every color? We have{" "}
                      <b>blue, grey, pink, and orange.</b>
                    </li>
                    <li>
                      A: I’ll take them all. <b>Add the scarf as well,</b>{" "}
                      please.
                    </li>
                    <li>
                      S: Okay, <b>that would be $280 in total.</b>
                    </li>
                    <li>
                      A: <b>$280?</b> I think I’ll just get the scarf, then.
                    </li>
                  </ol>
                </div>
                <Quiz
                  className="margin-top"
                  quiz={quizIntonationBis}
                  showInstantFeedback={true}
                />
              </>
            )}
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
        </a>{" "}
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
          <title>Faith Pellas</title>
          <link rel="canonical" href="https://fbpellas.github.io/" />
        </Helmet>
        <div className="mobile">
          <h1>Faith Pellas</h1>
          <h2>English Pronunciation</h2>
          <div>
            We are working hard to make this website accessible on mobile. In
            the meantime, please visit it on a computer instead. Thank you for
            your understanding!
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
        <title>Faith Pellas</title>
        <link rel="canonical" href="https://fbpellas.github.io/" />
      </Helmet>
      <div className="main">
        <a
          className="h1-title"
          href="#about-author"
          onClick={() => setPageAndClear("about-author")}
        >
          Faith Pellas
        </a>
        <a
          className="h2-title"
          href="#home"
          onClick={() => setPageAndClear("home")}
        >
          English Pronunciation
        </a>
        <Navbar className="navbar" expand="lg">
          <Dropdown
            onMouseEnter={() => {
              setIsAuthorHovered(true);
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
                setPageAndClear("about-author");
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
                  setPageAndClear("about-author");
                  setIsAuthorHovered(false);
                }}
              >
                About the Author
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setPageAndClear("mission");
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
            }}
            onMouseLeave={() => {
              setIsPhonemesHovered(false);
            }}
            show={isPhonemesHovered}
          >
            <Dropdown.Toggle
              href="#phonemes"
              onClick={() => {
                setPageAndClear("phonemes");
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
                  setPageAndClear("vowels");
                  setIsPhonemesHovered(false);
                }}
              >
                Vowels
              </Dropdown.Item>
              <Dropdown.Item
                href="#diphthongs"
                onClick={() => {
                  setPageAndClear("diphthongs");
                  setIsPhonemesHovered(false);
                }}
              >
                Diphthongs
              </Dropdown.Item>
              <Dropdown.Item
                href="#consonants"
                onClick={() => {
                  setPageAndClear("consonants");
                  setIsPhonemesHovered(false);
                }}
              >
                Consonants
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="mr-auto">
            <Nav.Link href="#stress" onClick={() => setPageAndClear("stress")}>
              Stress
            </Nav.Link>
            <Nav.Link
              href="#intonation"
              onClick={() => setPageAndClear("intonation")}
            >
              Intonation
            </Nav.Link>
            <Nav.Link href="#quiz" onClick={() => setPageAndClear("quiz")}>
              Quiz
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onKeyPress={(e: any) => {
                if (e.keyCode === 13 || e.which === 13) {
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

                    const matchKey = key.find((k: any) =>
                      k.toLowerCase().includes(inputLowercase)
                    );

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
        {/* <div className="footer">Created in 2020</div> */}
      </div>
    </HelmetProvider>
  );
};

export default App;
