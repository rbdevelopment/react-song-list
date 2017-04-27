import * as constants from './constants';

const initialState = {
    playlists: ['wedding', 'gig in Manchester'],
    songs: [],
    selectedPlaylist: '',
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
            return { ...state, selectedPlaylist: action.name };
        }
        case constants.ADD_PLAYLIST: {
            const playlists = new Array(...state.playlists);
            playlists.push(action.name);
            return { ...state, playlists: playlists };
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
