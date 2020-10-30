import React, { useState } from 'react';
import FilterForm from './FilterForm.js';
import Timeline from './Timeline.js';

const tagsConcat = (tags, lang) => [...tags, ...lang.tags];
const clean = (array) => Array.from(new Set(array));

function App () {
  const languages = require('./languages.json'); // TODO
  const tags = clean(languages.reduce(tagsConcat, []));

  const [topicFormFullPage, setTopicFormFullPage] = useState(true);
  const [currentTopic, setCurrentTopic] = useState('');
  const [currentLanguages, setCurrentLanguages] = useState([]);

  const updateTopic = (event) => {
    setCurrentTopic(event.target.value);
  };

  const languagesWithTopic = (topic) => {
    if (topic === '') {
      return languages;
    } else {
      return languages.filter(
        language => language.tags.includes(topic) 
      );
    }
  };

  const updateTimeline = (event) => {
    // if the timeline is updated due to a browser event...
    if (arguments.length > 0) {
      // avoid refreshing the page:
      event.preventDefault();

      // minimize the topic form after its first use:
      if (topicFormFullPage)
        setTopicFormFullPage(false);
    }

    // update the state of the timeline:
    setCurrentLanguages(languagesWithTopic(currentTopic));
  };

  const filterForm = <FilterForm
      tags={tags}
      topic={currentTopic}
      updateTopic={updateTopic}
      updateTimeline={updateTimeline}
      fullPage={topicFormFullPage}
    />;

  const timeline = topicFormFullPage ? '' :
    <Timeline items={currentLanguages} />;

  return <React.Fragment>
    {filterForm}
    {timeline}
  </React.Fragment>;
}

export default App;
