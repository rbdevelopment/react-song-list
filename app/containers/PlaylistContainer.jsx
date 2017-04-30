import { connect } from 'react-redux'
import SongTable from '../components/SongTable';

const mapStateToProps = (state) => ({ songs: state.selectedPlaylistValue, id: 'playlists' });
const PlaylistContainer = connect(mapStateToProps)(SongTable);
export default PlaylistContainer;
