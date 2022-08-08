import * as React from 'react';
import { BASE_PATH_IMG } from '../constants';

export interface MissionProps { }

const Mission: React.FC<MissionProps> = (_props) => {
  return <div className="block-2">
    <div className="article">
      <h3 className="h3-title">Mission</h3>
      <img
        className="half-img"
        src={`${BASE_PATH_IMG}wall.jpeg`}
        alt="Learn the Art of Speaking American English"
      />
      <p className="margin-top">
        One of the biggest goals for language learners is to learn how to speak with the correct pronunciation of
        their target language. Unfortunately, many English as a second/foreign language (ESL/EFL) curricula do not
        focus on pronunciation, therefore, many teachers lack training in this field. The purpose of this website
        is to help teachers and students understand the basics of pronunciation. By learning pronunciation,
        students can feel more confident in speaking and communicating.
      </p>
    </div>
  </div>
};

export { Mission }