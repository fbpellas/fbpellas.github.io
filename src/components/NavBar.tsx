import * as React from 'react';
import { NavHover } from '../types';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

export interface NavBarProps {
  navHovered: NavHover | undefined;
  setNavHovered: (value: React.SetStateAction<NavHover | undefined>) => void;
  setPageAndClear: (hash: string) => void;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const { navHovered, setNavHovered, setPageAndClear } = props;

  const isAuthorHovered = navHovered === NavHover.Author;
  const isIntonationHovered = navHovered === NavHover.Intonation;
  const isPhonemesHovered = navHovered === NavHover.Phonemes;

  return (
    <>
      <Dropdown
        onMouseEnter={() => {
          setNavHovered(NavHover.Author);
        }}
        onMouseLeave={() => {
          setNavHovered(undefined);
        }}
        show={isAuthorHovered}
      >
        <Dropdown.Toggle
          href="#about-author"
          onClick={() => {
            setPageAndClear('about-author');
            setNavHovered(undefined);
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
            }}
          >
            About the Author
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setPageAndClear('mission');
            }}
            href="#mission"
          >
            Mission
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown
        onMouseEnter={() => {
          setNavHovered(NavHover.Phonemes);
        }}
        onMouseLeave={() => {
          setNavHovered(undefined);
        }}
        show={isPhonemesHovered}
      >
        <Dropdown.Toggle
          href="#phonemes"
          onClick={() => {
            setPageAndClear('phonemes');
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
            }}
          >
            Vowels
          </Dropdown.Item>
          <Dropdown.Item
            href="#diphthongs"
            onClick={() => {
              setPageAndClear('diphthongs');
            }}
          >
            Diphthongs
          </Dropdown.Item>
          <Dropdown.Item
            href="#consonants"
            onClick={() => {
              setPageAndClear('consonants');
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
          setNavHovered(NavHover.Intonation);
        }}
        onMouseLeave={() => {
          setNavHovered(undefined);
        }}
        show={isIntonationHovered}
      >
        <Dropdown.Toggle
          href="#intonation"
          onClick={() => {
            setPageAndClear('intonation');
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
            }}
          >
            Falling
          </Dropdown.Item>
          <Dropdown.Item
            href="#rising"
            onClick={() => {
              setPageAndClear('rising');
            }}
          >
            Rising
          </Dropdown.Item>
          <Dropdown.Item
            href="#non-final"
            onClick={() => {
              setPageAndClear('non-final');
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
    </>
  );
};

export { NavBar };
