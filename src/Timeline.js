import React from 'react';
import TimelineItem from './TimelineItem.js';
import './Timeline.css';

function Timeline({items}) {
  const decoratedTimelineItem = (data, side = 'right') => {
    return <TimelineItem
      key={data.name}
      type={data.type}
      name={data.name}
      birth={data.birth}
      tags={data.tags}
      side={side}
    />;
  };

  return <ul className="Timeline">
    {items
      .sort((a, b) => (a.birth - b.birth))
      .map((item, idx) =>
        decoratedTimelineItem(item, (idx % 2 ? 'left' : 'right')))
    }
  </ul>;
}

export default Timeline;
