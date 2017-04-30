import reducer from './reducer';
import * as constants from './constants';
import * as actions from './actions';

describe('reducer function', () => {
    it('should set the selectedPlaylist field with the select playlist action',
        () => {
            const result = reducer({
                playlists: new Map([['list1', []]]),
                selectedPlaylistName: 'select playlist',
                selectedPlaylistValue: undefined
            }, actions.selectPlaylist('list1'));

            expect(result).toEqual({
                playlists: new Map([['list1', []]]),
                selectedPlaylistName: 'list1',
                selectedPlaylistValue: []
            });
        });

    it('should add a playlist name with the add playlist action',
        () => {
            const result = reducer({ playlists: new Map() }, actions.addPlaylist('list1'));

            var expected = new Map([['list1', []]]);
            expect(result).toEqual({ playlists: expected });
        });

    it('should add a playlist name with the add playlist action and leave other playlists itact',
        () => {
            const result = reducer({ playlists: new Map([['list1', [{ title: 'song name', artist: 'song artist', year: 1997 }]]]) }, actions.addPlaylist('list2'));

            var expected = new Map([
                ['list1', [{ title: 'song name', artist: 'song artist', year: 1997 }]],
                ['list2', []]]);
            expect(result).toEqual({ playlists: expected });
        });

    it('should add a song with the add song action',
        () => {
            const result = reducer({ songNumber: 30, songs: [] },
                actions.addSong('song title', 'song artist', 1992));

            expect(result).toEqual({
                songNumber: 31,
                songs: [{ id: 31, title: 'song title', artist: 'song artist', year: 1992 }]
            });
        });

    it('should switch the visibility of the playlists panel with the visibility action when the playlists panel is hidden',
        () => {
            const result = reducer(
                { playlistPanelVisible: false, songPanelVisible: false },
                actions.changeVisibility(constants.PLAYLIST_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: true,
                songPanelVisible: false
            });
        });

    it('should switch the visibility of the playlists panel with the visibility action when the playlists panel is visible',
        () => {
            const result = reducer(
                { playlistPanelVisible: true, songPanelVisible: false },
                actions.changeVisibility(constants.PLAYLIST_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: false,
                songPanelVisible: false
            });
        });

    it('should switch the visibility of the songs panel with the visibility action when the songs panel is visible',
        () => {
            const result = reducer(
                { playlistPanelVisible: false, songPanelVisible: true },
                actions.changeVisibility(constants.SONG_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: false,
                songPanelVisible: false
            });
        });

    it('should switch the visibility of the songs panel with the visibility action when the songs panel is hidden',
        () => {
            const result = reducer(
                { playlistPanelVisible: false, songPanelVisible: false },
                actions.changeVisibility(constants.SONG_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: false,
                songPanelVisible: true
            });
        });

    it('should switch off the songs panel when making the playlists panel visible if the songs panel is visible',
        () => {
            const result = reducer(
                { playlistPanelVisible: false, songPanelVisible: true },
                actions.changeVisibility(constants.PLAYLIST_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: true,
                songPanelVisible: false
            });
        });

    it('should leave the songs panel hidden when making the playlists panel visible if the songs panel is hidden',
        () => {
            const result = reducer(
                { playlistPanelVisible: false, songPanelVisible: false },
                actions.changeVisibility(constants.PLAYLIST_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: true,
                songPanelVisible: false
            });
        });

    it('should switch off the playlists panel when making the songs panel visible if the playlists panel is visible',
        () => {
            const result = reducer(
                { playlistPanelVisible: true, songPanelVisible: false },
                actions.changeVisibility(constants.SONG_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: false,
                songPanelVisible: true
            });
        });

    it('should leave the playlists panel hidden when making the songs panel visible if the plays panel is hidden',
        () => {
            const result = reducer(
                { playlistPanelVisible: false, songPanelVisible: false },
                actions.changeVisibility(constants.SONG_TYPE));

            expect(result).toEqual({
                playlistPanelVisible: false,
                songPanelVisible: true
            });
        });

    it('should return the same state if the action type is unknown', () => {
        const result = reducer({ someField: true }, { type: 'random' });
        expect(result).toEqual({ someField: true });
    });

    it('should return the same state when changing visibility and the panel type is unknown', () => {
        const result = reducer({ someField: true }, { type: constants.VISIBILITY, panelType: 'random' });
        expect(result).toEqual({ someField: true });
    });

});
