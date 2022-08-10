import * as React from 'react';
import { generateBreadcrumbs } from '../utils';
import { Breadcrumb } from 'react-bootstrap';
import { QuizIndex } from '../types';

export interface BreadcrumbsProps {
  page: string;
  indexCarousel: QuizIndex;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { indexCarousel, page } = props;
  const breadcrumbs = generateBreadcrumbs(page, indexCarousel);

  const { length } = breadcrumbs;

  if (length <= 1) return null;

  return (
    <Breadcrumb>
      {breadcrumbs.map((breadcrumb, index) => {
        const { anchor, title } = breadcrumb;
        const isLast = index === length - 1;
        if (isLast) {
          return <Breadcrumb.Item active key={anchor}>{title}</Breadcrumb.Item>;
        }

        return <Breadcrumb.Item href={`#${anchor}`} key={anchor}>{title}</Breadcrumb.Item>;
      })}
    </Breadcrumb >
  );
};

export { Breadcrumbs }