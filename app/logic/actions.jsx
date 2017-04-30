import * as constants from './constants';

exports.addSong = (title, artist, year) => ({
  type: constants.ADD_SONG,
  title,
  artist,
  year
});

exports.addSongToPlaylist = (songId) => ({
  type: constants.ADD_SONG_TO_PLAYLIST,
  songId: Number.parseInt(songId)
});

exports.removeSongFromPlaylist = (songId) => ({
  type: constants.REMOVE_SONG_FROM_PLAYLIST,
  songId: Number.parseInt(songId)
});

exports.removeSong = (songId) => ({
  type: constants.REMOVE_SONG,
  songId: Number.parseInt(songId)
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
