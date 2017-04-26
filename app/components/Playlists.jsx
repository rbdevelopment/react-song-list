import React from 'react';
import PropTypes from 'prop-types';
import DropDownButtonContainer from '../containers/DropDownButtonContainer';

const Playlists = () => (
    <DropDownButtonContainer id="playlists" ></DropDownButtonContainer>
);

Playlists.propTypes = {
    items: PropTypes.array
};

export default Playlists;