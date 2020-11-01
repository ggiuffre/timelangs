import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FilterForm from './FilterForm.js';
import Timeline from './Timeline.js';

const tagsConcat = (tags, lang) => [...tags, ...lang.tags];
const clean = array => Array.from(new Set(array));

function App () {
  console.log('rendering...');
  const languages = require('./languages.json'); // TODO
  const tags = clean(languages.reduce(tagsConcat, []));

  const languagesWithTopic = useCallback(topic => {
    console.log(`filtering languages to match ${topic}...`);
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

  useEffect(() => {
    console.log(`tag changed to ${tag}`);
    setCurrentTopic(tag || '');
    setCurrentLanguages(languagesWithTopic(tag || ''));
  }, [tag, languagesWithTopic]);

  useEffect(() => window.scrollTo(0, 0), [currentTopic]);

  const updateTopic = event => setCurrentTopic(event.target.value);

  const updateTimeline = event => {
    console.log('updateTimeline...');
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
