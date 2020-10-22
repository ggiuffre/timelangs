import React, { useState } from 'react';
import FilterForm from './FilterForm.js';
import Timeline from './Timeline.js';

function App () {
  const [topicFormFullPage, setTopicFormFullPage] = useState(true);
  const [currentTopic, setCurrentTopic] = useState('');
  const [languages, setLanguages] = useState([]);

  const updateTopic = (event) => {
    setCurrentTopic(event.target.value);
  };

  const languagesWithTopic = (topic) => {
    const cachedLanguages = require('./languages.json');
    if (topic === '') {
      return cachedLanguages;
    } else {
      return cachedLanguages.filter(
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
    setLanguages(languagesWithTopic(currentTopic));
  };

  const filterForm = <FilterForm
      topic={currentTopic}
      updateTopic={updateTopic}
      updateTimeline={updateTimeline}
      fullPage={topicFormFullPage}
    />;

  const timeline = topicFormFullPage ? '' :
    <Timeline items={languages} />;

  return <React.Fragment>
    {filterForm}
    {timeline}
  </React.Fragment>;
}

export default App;
