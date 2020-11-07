import React from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

function Timeline({ items }) {
  const decoratedItem = (data, index = 0) => {
    const side = index % 2 ? 'left' : 'right';
    return <TimelineItem
      key={data.name}
      name={data.name}
      type={data.type}
      birth={data.birth}
      tags={data.tags}
      side={side}
    />;
  };

  const decoratedItems = items
    .sort((a, b) => (a.birth - b.birth))
    .map(decoratedItem);

  return <ul className='Timeline'>{decoratedItems}</ul>;
}

export default Timeline;
