import * as constants from './constants';

const initialState = {
    playlists: [],
    selectedPlaylist: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SELECT_PLAYLIST: {
            return { ...state, selectedPlaylist: action.name };
        }
        case constants.ADD_PLAYLIST: {
            const listCopy = state.playlists.splice();
            listCopy.push(action.name);
            return { ...state, playlists: listCopy };
        }
    }
    return state;
};

export default reducer;
