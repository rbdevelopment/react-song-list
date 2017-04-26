import * as constants from './constants';

const initialState = { selectedPlaylist: '' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SELECT_PLAYLIST:
            return { selectedPlaylist: action.name };
    }
    return state;
};

export default reducer;
