import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export interface DropdownItemProps {
  anchor: string;
  setPageAndClear: (hash: string) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const { anchor, setPageAndClear } = props;
  const href = `#${anchor}`;

  return (
    <Dropdown.Item
      href={href}
      onClick={() => {
        setPageAndClear(anchor);
      }}
    >
      About the Author
    </Dropdown.Item>
  );
};

export { DropdownItem };
