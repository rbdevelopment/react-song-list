import * as actions from './actions';
import * as constants from './constants';

describe('addSong action', () => {
    it('should set action type to add song', () => {
        expect(actions.addSong('Merry go round', 'Popular singers', 1901)).toEqual({
            type: constants.ADD_SONG,
            title: 'Merry go round',
            artist: 'Popular singers',
            year: 1901
        });
    });
});

describe('removeSong action', () => {
    it('should set action type to remove song', () => {
        expect(actions.removeSong('Merry go round', 'Popular singers', 1901)).toEqual({
            type: constants.REMOVE_SONG,
            title: 'Merry go round',
            artist: 'Popular singers',
            year: 1901
        });
    });
});

describe('removeSongGlobally action', () => {
    it('should set action type to remove song globally', () => {
        expect(actions.removeSongGlobally('Merry go round', 'Popular singers', 1901)).toEqual({
            type: constants.REMOVE_SONG_GLOBALLY,
            title: 'Merry go round',
            artist: 'Popular singers',
            year: 1901
        });
    });
});

describe('addPlaylist action', () => {
    it('should set action type to add playlist', () => {
        expect(actions.addPlaylist('Playlist name')).toEqual({
            type: constants.ADD_PLAYLIST,
            name: 'Playlist name'
        });
    });
});

describe('selectPlaylist action', () => {
    it('should set action type to select playlist', () => {
        expect(actions.selectPlaylist('playlist 1')).toEqual({
            type: constants.SELECT_PLAYLIST,
            name: 'playlist 1'
        });
    });
});

describe('removePlaylist action', () => {
    it('should set action type to remove playlist', () => {
        expect(actions.removePlaylist('playlist 1')).toEqual({
            type: constants.REMOVE_PLAYLIST,
            name: 'playlist 1'
        });
    });
});