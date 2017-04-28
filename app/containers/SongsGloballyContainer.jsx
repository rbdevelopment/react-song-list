import { connect } from 'react-redux'
import SongTable from '../components/SongTable';
//import { selectPlaylist } from '../logic/actions';

const mapStateToProps = (state) => ({
    songs: state.songs
});
/*
const mapDispatchToProps = (dispatch) => ({
    onItemChanged: (value) => dispatch(selectPlaylist(value))
});
*/

const SongsGloballyContainer = connect(
    mapStateToProps
    //mapDispatchToProps
)(SongTable);

export default SongsGloballyContainer;