import React from 'react';
import ReactDOM from 'react-dom';
import Playlists from './components/Playlists';
import AddSong from './components/AddSong';
import AddPlaylist from './components/AddPlaylist';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './logic/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Playlists />
  </Provider>,
  document.getElementById('playlists')
);

ReactDOM.render(
  <Provider store={store}>
    <AddSong />
  </Provider>,
  document.getElementById('add-song')
);

ReactDOM.render(
  <Provider store={store}>
    <AddPlaylist />
  </Provider>,
  document.getElementById('add-playlist')
);
