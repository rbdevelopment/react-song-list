import { connect } from 'react-redux'
import AddPanel from '../components/AddPanel';
import { addSong, changeVisibility } from '../logic/actions';
import * as constants from '../logic/constants';

const mapStateToProps = (state) => ({
    panelType: constants.SONG_TYPE,
    expanded: state.songPanelVisible
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (item) => {
        dispatch(addSong(item.title, item.artist, item.year));
        dispatch(changeVisibility(constants.SONG_TYPE))
    },
    onButtonClick: () => dispatch(changeVisibility(constants.SONG_TYPE)),
    onCancel: () => dispatch(changeVisibility(constants.SONG_TYPE))
});

const AddSongContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPanel);

export default AddSongContainer;