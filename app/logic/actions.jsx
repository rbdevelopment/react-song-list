import * as constants from './constants';

exports.addSong = (title, artist, year) => ({
  type: constants.ADD_SONG,
  title,
  artist,
  year
});

exports.removeSong = (title, artist, year) => ({
  type: constants.REMOVE_SONG,
  title,
  artist,
  year
});

exports.removeSongGlobally = (title, artist, year) => ({
  type: constants.REMOVE_SONG_GLOBALLY,
  title,
  artist,
  year
});

exports.addPlaylist = (name) => ({
  type: constants.ADD_PLAYLIST,
  name
});

exports.selectPlaylist = (name) => ({
  type: constants.SELECT_PLAYLIST,
  name
});

exports.removePlaylist = (name) => ({
  type: constants.REMOVE_PLAYLIST,
  name
});

exports.changeVisibility = (panelType) => ({
  type: constants.VISIBILITY,
  panelType
});
