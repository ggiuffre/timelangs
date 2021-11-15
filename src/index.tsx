import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import type { LanguageEntry } from './types';

const tagsConcat = (tags: string[], lang: LanguageEntry) => [...tags, ...lang.tags];
const clean = (array: string[]) => Array.from(new Set(array));

const languages = require('./languages.json');
const tags = clean(languages.reduce(tagsConcat, []));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter { ...({ hashType: 'noslash' } as any) }>
      <Routes>
        <Route path='/' element={<App languages={languages} tags={tags} />} />
        <Route path='/:tag' element={<App languages={languages} tags={tags} />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
