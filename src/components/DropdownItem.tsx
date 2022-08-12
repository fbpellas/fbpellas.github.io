import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export interface DropdownItemProps {
  anchor: string;
  setPageAndClear: (hash: string) => void;
  title: string;
}

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const { anchor, setPageAndClear, title } = props;
  const href = `#${anchor}`;

  return (
    <Dropdown.Item
      href={href}
      onClick={() => {
        setPageAndClear(anchor);
      }}
    >
      {title}
    </Dropdown.Item>
  );
};

export { DropdownItem };
