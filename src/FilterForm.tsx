import React, { ChangeEventHandler, FormEventHandler } from 'react';
import './FilterForm.css';

interface FilterFormProps {
  readonly tags: string[];
  readonly topic: string;
  readonly fullPage: boolean;
  readonly updateTopic: ChangeEventHandler<HTMLInputElement>;
  readonly updateTimeline: FormEventHandler<HTMLFormElement>;
}

const FilterForm: React.FC<FilterFormProps> = ({
  tags,
  topic,
  fullPage,
  updateTopic,
  updateTimeline
}) => {
  const options = tags
    .sort((a, b) => a.localeCompare(b))
    .map(tag => <option value={tag} key={tag} />);

  return <form
      className={fullPage ? 'fullpage' : ''}
      name='filter'
      id='filter'
      onSubmit={updateTimeline}
    >
    <label id='topic'>Topic: <input
        tabIndex={1}
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

    <label id='submit'>
      <input type='submit' value='Update' />
    </label>
  </form>;
};

export default FilterForm;
