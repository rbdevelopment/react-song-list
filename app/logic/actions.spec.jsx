import * as actions from './actions';

describe('addSong action', () => {
    it('should set action type to add song', () => {
        expect(actions.addSong('Merry go round', 'Popular singers', 1901)).toEqual({
            type: 'add song',
            title: 'Merry go round',
            artist: 'Popular singers',
            year: 1901
        });
    });
});

describe('removeSong action', () => {
    it('should set action type to remove song', () => {
        expect(actions.removeSong('Merry go round', 'Popular singers', 1901)).toEqual({
            type: 'remove song',
            title: 'Merry go round',
            artist: 'Popular singers',
            year: 1901
        });
    });
});
describe('removeSongGlobally action', () => {
    it('should set action type to remove song', () => {
        expect(actions.removeSongGlobally('Merry go round', 'Popular singers', 1901)).toEqual({
            type: 'remove song globally',
            title: 'Merry go round',
            artist: 'Popular singers',
            year: 1901
        });
    });
});

describe('addPlaylist action', () => {
    it('should set action type to add playlist', () => {
        expect(actions.addPlaylist('Playlist name')).toEqual({
            type: 'add playlist',
            name: 'Playlist name'
        });
    });
});

describe('selectPlaylist action', () => {
    it('should set action type to select playlist', () => {
        expect(actions.selectPlaylist('playlist 1')).toEqual({
            type: 'select playlist',
            name: 'playlist 1'
        });
    });
});

describe('removePlaylist action', () => {
    it('should set action type to remove playlist', () => {
        expect(actions.removePlaylist('playlist 1')).toEqual({
            type: 'remove playlist',
            name: 'playlist 1'
        });
    });
});