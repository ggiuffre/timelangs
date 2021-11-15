import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';
import type { LanguageEntry } from './types';

interface TimelineProps {
  readonly items: LanguageEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const decoratedItem = (data: LanguageEntry, index: number = 0) => {
    const side = index % 2 ? 'left' : 'right';
    return <TimelineItem
      key={data.name}
      name={data.name}
      birth={data.birth}
      tags={data.tags}
      side={side}
    />;
  };

  const decoratedItems = items
    .sort((a, b) => (a.birth - b.birth))
    .map(decoratedItem);

  return <ul className='Timeline'>{decoratedItems}</ul>;
};

export default Timeline;
