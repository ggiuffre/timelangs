import React, { useState, useEffect, ChangeEventHandler, FormEventHandler } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FilterForm from './FilterForm';
import Timeline from './Timeline';
import type { LanguageEntry } from './types';

interface AppProps {
  readonly languages: LanguageEntry[];
  readonly tags: string[];
}

const App: React.FC<AppProps> = ({ languages, tags }) => {
  const { tag } = useParams();
  const navigate = useNavigate();

  const [topicFormFullPage, setTopicFormFullPage] = useState(!tag);
  const [currentTopic, setCurrentTopic] = useState(''); // controls FilterForm

  // update state and window upon change in URL query parameters:
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    setCurrentTopic(tag || '');
  }, [tag]);

  const updateTopic: ChangeEventHandler<HTMLInputElement> = (event) =>
    setCurrentTopic(event.target?.value ?? '');

  const updateTimeline: FormEventHandler<HTMLFormElement> = (event) => {
    // avoid refreshing the page:
    if (event) event.preventDefault();

    // update the browser history with a new URL:
    navigate(`../${currentTopic}`, { replace: true });

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

  return <>
    {filterForm}
    {timeline}
  </>;
};

export default App;
