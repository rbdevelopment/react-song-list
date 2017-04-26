import { connect } from 'react-redux'
import DropDownButton from '../components/DropDownButton';
import { selectPlaylist } from '../logic/actions';

const mapStateToProps = (state) => ({
    item: state.playlists
});

const mapDispatchToProps = (dispatch) => ({
    onItemChanged: (value) => dispatch(selectPlaylist(value))
});

const DropDownButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DropDownButton);

export default DropDownButtonContainer;