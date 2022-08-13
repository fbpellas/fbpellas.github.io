import * as React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AUTHOR_FULLNAME } from '../constants';
import { MobileDropdownItem } from './MobileDropdownItem';

export interface MobileNavBarProps {
  setPageAndClear: (hash: string) => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = (props) => {
  const { setPageAndClear } = props;

  return (
    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">{AUTHOR_FULLNAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="About" id="collapsible-nav-dropdown-about">
            <MobileDropdownItem anchor="about-author" setPageAndClear={setPageAndClear} title="About the Author" />
            <MobileDropdownItem anchor="mission" setPageAndClear={setPageAndClear} title="Mission" />
          </NavDropdown>
          <NavDropdown title="Phonemes" id="collapsible-nav-dropdown-phonemes">
            <MobileDropdownItem anchor="phonemes" setPageAndClear={setPageAndClear} title="Phonemes" />
            <NavDropdown.Divider />
            <MobileDropdownItem anchor="vowels" setPageAndClear={setPageAndClear} title="Vowels" />
            <MobileDropdownItem anchor="diphthongs" setPageAndClear={setPageAndClear} title="Diphthongs" />
            <MobileDropdownItem anchor="consonants" setPageAndClear={setPageAndClear} title="Consonants" />
          </NavDropdown>
          <Nav.Link
            href="#stress"
            onClick={() => {
              setPageAndClear('stress');
            }}
          >
            Stress
          </Nav.Link>
          <NavDropdown title="Intonation" id="collapsible-nav-dropdown-intonation">
            <MobileDropdownItem anchor="intonation" setPageAndClear={setPageAndClear} title="Intonation" />
            <NavDropdown.Divider />
            <MobileDropdownItem anchor="falling" setPageAndClear={setPageAndClear} title="Falling" />
            <MobileDropdownItem anchor="rising" setPageAndClear={setPageAndClear} title="Rising" />
            <MobileDropdownItem anchor="non-final" setPageAndClear={setPageAndClear} title="Non-Final" />
          </NavDropdown>
          <Nav.Link
            href="#quiz"
            onClick={() => {
              setPageAndClear('quiz');
            }}
          >
            Quiz
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { MobileNavBar };
