import * as React from 'react';
import { NavHover } from '../types';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { DropdownItem } from './DropdownItem';

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
          }}
          variant="secondary"
          id="dropdown-about"
        >
          About
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <DropdownItem anchor="about-author" setPageAndClear={setPageAndClear} title="About the Author" />
          <DropdownItem anchor="mission" setPageAndClear={setPageAndClear} title="Mission" />
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
          <DropdownItem anchor="vowels" setPageAndClear={setPageAndClear} title="Vowels" />
          <DropdownItem anchor="diphthongs" setPageAndClear={setPageAndClear} title="Diphthongs" />
          <DropdownItem anchor="consonants" setPageAndClear={setPageAndClear} title="Consonants" />
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
          <DropdownItem anchor="falling" setPageAndClear={setPageAndClear} title="Falling" />
          <DropdownItem anchor="rising" setPageAndClear={setPageAndClear} title="Rising" />
          <DropdownItem anchor="non-final" setPageAndClear={setPageAndClear} title="Non-Final" />
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
