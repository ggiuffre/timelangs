import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FilterForm from './FilterForm';
import Timeline from './Timeline';

function App ({ languages, tags }) {
  const { tag } = useParams();
  const history = useHistory();

  const [topicFormFullPage, setTopicFormFullPage] = useState(!tag);
  const [currentTopic, setCurrentTopic] = useState(''); // controls FilterForm

  // update state and window upon change in URL query parameters:
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    setCurrentTopic(tag || '');
  }, [tag]);

  const updateTopic = event => setCurrentTopic(event.target.value);

  const updateTimeline = event => {
    // avoid refreshing the page:
    if (event) event.preventDefault();

    // update the browser history with a new URL:
    history.push(currentTopic);

    // minimize the topic form after its first use:
    if (topicFormFullPage) setTopicFormFullPage(false);
  };

  const filterForm = <FilterForm
      tags={tags}
      topic={currentTopic}
      updateTopic={updateTopic}
      updateTimeline={updateTimeline}
      fullPage={topicFormFullPage}
    />;

  const currentLanguages = tag ? languages.filter(
      language => language.tags.includes(tag)
    ) : languages;
  const timeline = topicFormFullPage ? '' :
    <Timeline items={currentLanguages} />;

  return <React.Fragment>
    {filterForm}
    {timeline}
  </React.Fragment>;
}

export default App;
