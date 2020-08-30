import React from 'react';
import TimelineItem from './TimelineItem.js';
import './Timeline.css';

class Timeline extends React.Component {
  render() {
    return <ul className="Timeline">
      {this.props.items
        .sort((a, b) => (a.birth - b.birth))
        .map((item, idx) =>
          this.decoratedTimelineItem(item, (idx % 2 ? 'left' : 'right')))
      }
    </ul>;
  }

  decoratedTimelineItem(data, side = 'right') {
    return <TimelineItem
      key={data.name}
      type={data.type}
      name={data.name}
      birth={data.birth}
      tags={data.tags}
      side={side}
    />;
  }
}

export default Timeline;
