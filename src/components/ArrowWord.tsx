import * as React from 'react';

export interface ArrowWordProps {
  word?: string;
  isUp?: boolean;
}

const ArrowWord: React.FC<ArrowWordProps> = (props) => {
  const { word = '', isUp = false } = props;

  const arrow = isUp ? '➚' : '➘';

  return (
    <>
      <div className="inline-period yellow">{arrow}</div>
      {word && word}
    </>
  );
}

export { ArrowWord }