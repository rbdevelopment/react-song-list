import React from 'react';
import ReactDOM from 'react-dom';
import DropDownButtonContainer from './containers/DropDownButtonContainer';
import AddPlaylistContainer from './containers/AddPlaylistContainer';
import AddSongContainer from './containers/AddSongContainer';
import SongsGloballyContainer from './containers/SongsGloballyContainer';
import PlaylistContainer from './containers/PlaylistContainer';
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
    <SongsGloballyContainer />
  </Provider>,
  document.getElementById('songs-globally')
);

ReactDOM.render(
  <Provider store={store}>
    <PlaylistContainer />
  </Provider>,
  document.getElementById('playlist')
);

ReactDOM.render(
  <Provider store={store}>
    <DropDownButtonContainer />
  </Provider>,
  document.getElementById('playlists')
);

ReactDOM.render(
  <Provider store={store}>
    <AddSongContainer />
  </Provider>,
  document.getElementById('add-song')
);

ReactDOM.render(
  <Provider store={store}>
    <AddPlaylistContainer />
  </Provider>,
  document.getElementById('add-playlist')
);
