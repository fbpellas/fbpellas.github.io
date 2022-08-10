import * as React from 'react';
import { Card as CardBootstrap } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export interface CardProps {
  setPageAndClear: (hash: string) => void;
  description: string;
  href: string;
  title: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { description, href, setPageAndClear, title } = props;

  return (
    <CardBootstrap>
      <CardBootstrap.Body>
        <CardBootstrap.Text>{title}</CardBootstrap.Text>
        <CardBootstrap.Title>{description}</CardBootstrap.Title>
        <Button href={`#${href}`} onClick={() => setPageAndClear(href)} variant="secondary">
          Learn
        </Button>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
};

export { Card };
