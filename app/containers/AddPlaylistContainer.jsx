import { connect } from 'react-redux'
import AddPanel from '../components/AddPanel';
import { addPlaylist, changeVisibility } from '../logic/actions';
import * as constants from '../logic/constants';

const mapStateToProps = (state) => ({
    panelType: constants.PLAYLIST_TYPE,
    expanded: state.playlistPanelVisible
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (item) => {
        dispatch(addPlaylist(item.name));
        dispatch(changeVisibility(constants.PLAYLIST_TYPE));
    },
    onButtonClick: () => dispatch(changeVisibility(constants.PLAYLIST_TYPE)),
    onCancel: () => dispatch(changeVisibility(constants.PLAYLIST_TYPE))
});

const AddPlaylistContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPanel);

export default AddPlaylistContainer;