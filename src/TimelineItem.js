import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';
import './TimelineItem.css';

function TimelineItem(props) {
  const tags = <ul className='tagsList'>{
      props.tags.map(
        tag => <li key={tag}><Link to={tag}>{tag}</Link></li>
      )
    }</ul>;

  const classes = [
    'TimelineItem',
    props.type,
    props.side,
  ].join(' ');

  return <li className={classes}>
    <span className='content'>
      {props.name} ({props.birth})
      {tags}
    </span>
  </li>;
}

export default TimelineItem;
