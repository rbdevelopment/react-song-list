import * as constants from './constants';

const initialState = {
    playlists: new Map(),
    songs: [],
    selectedPlaylistName: 'select playlist',
    selectedPlaylistValue: undefined,
    playlistPanelVisible: false,
    songPanelVisible: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.VISIBILITY: {
            switch (action.panelType) {
                case constants.PLAYLIST_TYPE: {
                    const newPlaylistState = {
                        ...state,
                        playlistPanelVisible: !state.playlistPanelVisible
                    };
                    if (newPlaylistState.playlistPanelVisible) {
                        newPlaylistState.songPanelVisible = false;
                    }
                    return newPlaylistState;
                }
                case constants.SONG_TYPE: {
                    const newSongState = {
                        ...state,
                        songPanelVisible: !state.songPanelVisible
                    };
                    if (newSongState.songPanelVisible) {
                        newSongState.playlistPanelVisible = false;
                    }
                    return newSongState;
                }
                default:
                    return state;
            }
        }
        case constants.SELECT_PLAYLIST: {
            const found = (state.playlists || new Map()).get(action.name);
            let name = undefined;
            if (found) {
                name = action.name;
            }
            return { ...state, selectedPlaylistName: name, selectedPlaylistValue: found };
        }
        case constants.ADD_PLAYLIST: {
            const playlistsMap = new Map(state.playlists);
            playlistsMap.set(action.name, []);
            return { ...state, playlists: playlistsMap };
        }
        case constants.ADD_SONG: {
            const song = { title: action.title, artist: action.artist, year: action.year };
            const songs = new Array(...state.songs);
            songs.push(song);
            return { ...state, songs: songs };
        }
    }
    return state;
};

export default reducer;
