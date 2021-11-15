import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';
import './TimelineItem.css';

interface TimelineItemProps {
  readonly name: string;
  readonly birth: number;
  readonly tags: string[];
  readonly side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  name,
  birth,
  tags,
  side,
}) => {
  const tagsList = <ul className='tagsList'>{
      tags.map(
        tag => <li key={tag}><Link to={`../${tag}`}>{tag}</Link></li>
      )
    }</ul>;

  const classes = [
    'TimelineItem',
    side,
  ].join(' ');

  return <li className={classes}>
    <span className='content'>
      {name} ({birth})
      {tagsList}
    </span>
  </li>;
}

export default TimelineItem;
