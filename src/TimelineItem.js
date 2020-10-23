import React, { useState } from 'react';
import './Timeline.css';
import './TimelineItem.css';

function TimelineItem(props) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const toggleDetails = () => setDetailsVisible(!detailsVisible);

  const tags = <ul className='tagsList'>{
      props.tags.map(tag => <li key={tag}>{tag}</li>)
    }</ul>;

  const classes = [
    'TimelineItem',
    props.type,
    props.side,
    detailsVisible ? 'detailed' : ''
  ].join(' ');

  return <li
    className={classes}
    onClick={toggleDetails}
    >
    <span className='content'>
      {props.name} ({props.birth})
      {tags}
    </span>
  </li>;
}

export default TimelineItem;
