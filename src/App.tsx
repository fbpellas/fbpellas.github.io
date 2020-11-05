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
  defaultCustomQuizAnswers,
  quiz,
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

const App = () => {
  const [isAuthorHovered, setIsAuthorHovered] = React.useState(false);
  const [isPhonemesHovered, setIsPhonemesHovered] = React.useState(false);
  const [emailBody, setEmailBody] = React.useState("");
  const [emailSubject, setEmailSubject] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [matches, setMatches] = React.useState<any>([]);
  const [indexCarousel, setIndexCarousel] = React.useState(1);

  const hash = window?.location?.hash?.substr(1);
  const [page, setPage] = React.useState(hash);
  const [quizAnswers, setQuizAnswers] = React.useState(
    defaultCustomQuizAnswers
  );
  const [quizScore, setQuizScore] = React.useState(0);

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
        <div>
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
            alt="First slide"
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
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Phonetic Spelling</h3>
            <p>Guess the words based on their phonetic spelling.</p>
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
                <div className="flex-1">test</div>
                <div className="flex-2">
                  {" "}
                  <p>
                    Faith Pellas is an MA TESOL student at the University of San
                    Francisco.
                  </p>
                  <p className="subnote">
                    When she’s not working on her thesis, Faith loves learning
                    French, watercolor painting, and sending postcards to her
                    nearest and dearest.
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
                Or send me a message directly at test@example.com
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
                  `mailto:test@example.com?subject=${encodeURIComponent(
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
            <p>
              One of the biggest goals for language learners is to learn how to
              speak with the correct pronunciation of their target language.
              Unfortunately, many English as a second/foreign language (ESL/EFL)
              curricula do not focus on pronunciation, therefore, many teachers
              lack training in this field.
            </p>
            <p>
              The purpose of this website is to help teachers and students
              understand the basics of pronunciation.
            </p>
          </div>
        </div>
      );
    }

    if (page === "phonemes") {
      return (
        <div className="block-2">
          <div className="article">
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
              Notes: Phonemes should not rely on the word’s spelling. For
              example, the word m
              <i>
                <b>oo</b>
              </i>
              n is not spelled with the letter ‘u’, yet is produced with the
              long /u/ phoneme.{" "}
            </div>
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
              {renderTooltip("IPA", "International Phonetic Alphabet")},
              consonants are arranged completely differently from the English
              alphabet. Each phoneme is organized based on the sound’s place of
              articulation and alternates between voiced and unvoiced.
            </div>
            {renderTable(consonants)}
          </div>
        </div>
      );
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
          </div>
        </div>
      );
    }

    const renderFake = () => (
      <div className="article">
        <h3 className="h3-title">Something else</h3>
        <p>Another one</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>One paragraph</p>
      </div>
    );

    if (["stress", "intonation"].includes(page)) {
      return (
        <>
          <div className="block-2">
            <div className="article">
              <h3 className="h3-title">
                Something <Badge variant="secondary">New</Badge>
              </h3>
              <p>One paragraph</p>
              <p>Another one</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {renderFake()}
            {renderFake()}
          </div>
          <div className="block-1">
            <div className="section">
              <h3 className="h3-title">Some section</h3>
              <p>Short description</p>
              <p>One paragraph</p>
            </div>
            <div className="section">
              <h3 className="h3-title">Some other section</h3>
              <p>Very short description</p>
            </div>
          </div>
        </>
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
