import React from 'react';
import './FilterForm.css';

const tagsConcat = (tags, lang) => [...tags, ...lang.tags];
const clean = (array) => Array.from(new Set(array));

function FilterForm({ topic, fullPage, updateTopic, updateTimeline }) {
  const tags = clean(require('./languages.json').reduce(tagsConcat, []));
  const options = tags
    .map(tag => <option value={tag} key={tag} />)
    .sort((a, b) => a.key.localeCompare(b.key));

  return <form
      className={fullPage ? 'fullpage' : ''}
      name="filter"
      id="filter"
      onSubmit={updateTimeline}
    >
    <label id="topic">Topic: <input
        tabIndex="1"
        type="text"
        value={topic}
        onChange={updateTopic}
        placeholder="OOP, Lisp, JVM..."
        list="topics"
      />
    </label>
    <datalist id="topics">
      {options}
    </datalist>

    <label>
      <input type="submit" value="Update" />
    </label>
  </form>;
}

export default FilterForm;
