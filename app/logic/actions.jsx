import * as constants from './constants';

export const addSong = (title, artist, year) => ({
  type: constants.ADD_SONG,
  title,
  artist,
  year
});
export const removeSong = (title, artist, year) => ({
  type: constants.REMOVE_SONG,
  title,
  artist,
  year
});
export const removeSongGlobally = (title, artist, year) => ({
  type: constants.REMOVE_SONG_GLOBALLY,
  title,
  artist,
  year
});
export const addPlaylist = (name) => ({
  type: constants.ADD_PLAYLIST,
  name
});
export const selectPlaylist = (name) => ({
  type: constants.SELECT_PLAYLIST,
  name
});
export const removePlaylist = (name) => ({
  type: constants.REMOVE_PLAYLIST,
  name
});