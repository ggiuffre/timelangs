import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FilterForm from './FilterForm.js';
import Timeline from './Timeline.js';

function App ({ languages, tags }) {
  const languagesWithTopic = useCallback(topic => {
    if (topic === '') {
      return languages;
    } else {
      return languages.filter(
        language => language.tags.includes(topic) 
      );
    }
  }, [languages]);

  const { tag } = useParams();
  const history = useHistory();

  const [topicFormFullPage, setTopicFormFullPage] = useState(!tag);
  const [currentTopic, setCurrentTopic] = useState('');
  const [currentLanguages, setCurrentLanguages] = useState([]);

  // update state upon change in URL query parameters:
  useEffect(() => {
    setCurrentTopic(tag || '');
    setCurrentLanguages(languagesWithTopic(tag || ''));
  }, [tag, languagesWithTopic]);

  // scroll to top upon change of topic:
  useEffect(() => window.scrollTo(0, 0), [currentTopic]);

  const updateTopic = event => setCurrentTopic(event.target.value);

  const updateTimeline = event => {
    // if the timeline is updated due to a browser event...
    if (arguments.length > 0) {
      // avoid refreshing the page:
      event.preventDefault();

      // update the browser history with a new URL:
      history.push(`/${currentTopic}`);

      // minimize the topic form after its first use:
      if (topicFormFullPage)
        setTopicFormFullPage(false);
    }
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
