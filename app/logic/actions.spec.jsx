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
        expect(actions.removeSong(12)).toEqual({
            type: constants.REMOVE_SONG,
            songId: 12,
        });
    });
});

describe('removeSongFromPlaylist action', () => {
    it('should set action type to remove song from the playlist', () => {
        expect(actions.removeSongFromPlaylist(21)).toEqual({
            songId: 21,
            type: constants.REMOVE_SONG_FROM_PLAYLIST
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

describe('changeVisibility action with playlist type', () => {
    it('should set action type to visibility and panelType to playlist type', () => {
        expect(actions.changeVisibility(constants.PLAYLIST_TYPE)).toEqual({
            type: constants.VISIBILITY,
            panelType: constants.PLAYLIST_TYPE
        });
    });
});

describe('changeVisibility action with song type', () => {
    it('should set action type to visibility and panelType to song type', () => {
        expect(actions.changeVisibility(constants.SONG_TYPE)).toEqual({
            type: constants.VISIBILITY,
            panelType: constants.SONG_TYPE
        });
    });
});