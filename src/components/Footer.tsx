import * as React from 'react';
import { AUTHOR_FULLNAME, CREATION_YEAR_START, CREATION_YEAR_END } from '../constants';

export interface FooterProps { }

const Footer: React.FC<FooterProps> = (_props) => {
  return (
    <div className="footer">
      {AUTHOR_FULLNAME}, website created in {CREATION_YEAR_START}-{CREATION_YEAR_END} and hosted on{' '}
      <a
        className="clickable-page"
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/fbpellas/fbpellas.github.io"
      >
        GitHub
      </a>
    </div>
  );
};

export { Footer };