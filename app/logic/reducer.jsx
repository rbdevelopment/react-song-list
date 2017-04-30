import * as constants from './constants';

const initialState = {
    playlists: new Map([['example list', []]]),
    songs: [
        { id: 1, title: 'song 1', artist: 'artist', year: 2005 },
        { id: 2, title: 'song 2', artist: 'second', year: 2003 }
    ],
    songNumber: 2,
    selectedPlaylistName: undefined,
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
            const playlistsNewMap = new Map(state.playlists);
            playlistsNewMap.set(action.name, []);
            return { ...state, playlists: playlistsNewMap };
        }
        case constants.ADD_SONG: {
            const nextNumber = state.songNumber + 1;
            const song = { id: nextNumber, title: action.title, artist: action.artist, year: action.year };
            const songs = new Array(...state.songs);
            songs.push(song);
            return { ...state, songs: songs, songNumber: nextNumber };
        }
        case constants.ADD_SONG_TO_PLAYLIST: {
            if (state.selectedPlaylistName) {
                const songId = action.songId;
                const songElement = state.songs.find((element) => element.id == songId);
                if (songElement) {
                    const playlistFound = state.playlists.get(state.selectedPlaylistName);
                    if (playlistFound) {
                        const songExists = playlistFound.find((element) => element.id == songId);
                        if (!songExists) {
                            const playlistNewArray = new Array(...playlistFound);
                            playlistNewArray.push(songElement);
                            const playlistsNewMap = new Map(state.playlists);
                            playlistsNewMap.set(state.selectedPlaylistName, playlistNewArray);
                            return {
                                ...state,
                                playlists: playlistsNewMap,
                                selectedPlaylistValue: playlistNewArray
                            };
                        }
                    }
                }
            }
        }
    }
    return state;
};

export default reducer;
