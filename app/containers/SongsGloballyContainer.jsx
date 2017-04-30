import { connect } from 'react-redux';
import { removeSong } from '../logic/actions';
import SongTable from '../components/SongTable';

const mapStateToProps = (state) => ({
    name: 'all songs',
    songs: state.songs,
    id: 'songs'
});
const mapDispatchToProps = (dispatch) => ({
    removeSong: (songId) => dispatch(removeSong(songId))
});

const SongsGloballyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SongTable);
export default SongsGloballyContainer;
