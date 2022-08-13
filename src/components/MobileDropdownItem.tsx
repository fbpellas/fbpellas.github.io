import * as React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export interface MobileDropdownItemProps {
  anchor: string;
  setPageAndClear: (hash: string) => void;
  title: string;
}

const MobileDropdownItem: React.FC<MobileDropdownItemProps> = (props) => {
  const { anchor, setPageAndClear, title } = props;
  const href = `#${anchor}`;

  return (
    <NavDropdown.Item
      href={href}
      onClick={() => {
        setPageAndClear(anchor);
      }}
    >
      {title}
    </NavDropdown.Item>
  );
};

export { MobileDropdownItem };
