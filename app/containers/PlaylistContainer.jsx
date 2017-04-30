import { connect } from 'react-redux';
import { removeSongFromPlaylist, removePlaylist } from '../logic/actions';
import SongTable from '../components/SongTable';

const mapStateToProps = (state) => ({
    name: state.selectedPlaylistName,
    songs: state.selectedPlaylistValue,
    id: 'playlists'
});
const mapDispatchToProps = (dispatch) => ({
    removeSong: (songId) => dispatch(removeSongFromPlaylist(songId)),
    removePlaylist: (name) => dispatch(removePlaylist(name))
});

const PlaylistContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SongTable);
export default PlaylistContainer;
