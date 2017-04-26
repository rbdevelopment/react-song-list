import * as constants from './constants';

export const addSong = (title, artist, year) => ({
  type: constants.ADD_SONG,
  title,
  artist,
  year
});