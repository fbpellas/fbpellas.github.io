import * as React from 'react';
import { OverlayTrigger, Tooltip as TooltipBootstrap } from 'react-bootstrap';

export interface TooltipProps {
  word: string;
  definition: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { className = 'text-inline bottom-dot', definition, word } = props;

  return (
    <OverlayTrigger
      key="bottom"
      placement="bottom"
      overlay={<TooltipBootstrap id={`tooltip-bottom`}>{definition}</TooltipBootstrap>}
    >
      <div className={className}>{word}</div>
    </OverlayTrigger>
  );
};

export { Tooltip };
