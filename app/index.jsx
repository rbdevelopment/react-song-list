import React from 'react';
import ReactDOM from 'react-dom';
import Playlists from './components/Playlists';
import AddSong from './components/AddSong';
import AddPlaylist from './components/AddPlaylist';

ReactDOM.render(
  <Playlists id="playlists"></Playlists>,
  document.getElementById('playlists')
);

ReactDOM.render(
  <AddSong></AddSong>,
  document.getElementById('add-song')
);

ReactDOM.render(
  <AddPlaylist></AddPlaylist>,
  document.getElementById('add-playlist')
);
