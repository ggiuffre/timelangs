import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
