import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const tagsConcat = (tags, lang) => [...tags, ...lang.tags];
const clean = array => Array.from(new Set(array));

const languages = require('./languages.json');
const tags = clean(languages.reduce(tagsConcat, []));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter hashType='noslash'>
      <Route path={['/:tag', '/']}>
        <App languages={languages} tags={tags} />
      </Route>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
