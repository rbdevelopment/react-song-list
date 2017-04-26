import React from 'react';
import ReactDOM from 'react-dom';
import Playlists from './components/Playlists';
import AddSong from './components/AddSong';
import AddPlaylist from './components/AddPlaylist';

ReactDOM.render(
  <Playlists />,
  document.getElementById('playlists')
);

ReactDOM.render(
  <AddSong />,
  document.getElementById('add-song')
);

ReactDOM.render(
  <AddPlaylist />,
  document.getElementById('add-playlist')
);
