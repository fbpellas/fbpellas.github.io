import * as React from 'react';
import { AUTHOR_FIRSTNAME, AUTHOR_FULLNAME, BASE_PATH_IMG } from '../constants';

export interface AboutAuthorProps { }

const AboutAuthor: React.FC<AboutAuthorProps> = (_props) => {
  return <div className="block-2">
    <div className="article">
      <h3 className="h3-title">About the Author</h3>
      <div className="flex-wrapper">
        <div className="flex-1">
          <img className="full-img" src={`${BASE_PATH_IMG}faith.jpg`} alt={AUTHOR_FULLNAME} />
        </div>
        <div className="author-text flex-2">
          <p>
            {AUTHOR_FULLNAME} is a scholar at the University of San Francisco’s TESOL department. For the past
            four years, she has been teaching English to learners from beginners to advanced levels. When she’s
            not working on her thesis, {AUTHOR_FIRSTNAME} loves learning French, watercolor painting, and
            sending postcards to her nearest and dearest.
          </p>
        </div>
      </div>
    </div>
  </div>
};

export { AboutAuthor };