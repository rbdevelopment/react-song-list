import React from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import AddPlaylistContainer from '../containers/AddPlaylistContainer';
import AddSongContainer from '../containers/AddSongContainer';

const AddButtons = ({ store }) =>
    <section>
        <Provider store={store}>
            <AddSongContainer />
        </Provider>
        <Provider store={store}>
            <AddPlaylistContainer />
        </Provider>
    </section>

AddButtons.propTypes = {
    store: PropTypes.object
};

export default AddButtons;