import React from 'react';
import './FilterForm.css';

function FilterForm({
  tags,
  topic,
  fullPage,
  updateTopic,
  updateTimeline
}) {
  const options = tags
    .map(tag => <option value={tag} key={tag} />)
    .sort((a, b) => a.key.localeCompare(b.key));

  return <form
      className={fullPage ? 'fullpage' : ''}
      name='filter'
      id='filter'
      onSubmit={updateTimeline}
    >
    <label id='topic'>Topic: <input
        tabIndex='1'
        type='text'
        value={topic}
        onChange={updateTopic}
        placeholder='OOP, Lisp, JVM...'
        list='topics'
      />
    </label>
    <datalist id='topics'>
      {options}
    </datalist>

    <label>
      <input type='submit' value='Update' />
    </label>
  </form>;
}

export default FilterForm;
