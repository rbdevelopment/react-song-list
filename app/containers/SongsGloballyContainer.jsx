import { connect } from 'react-redux'
import SongTable from '../components/SongTable';

const mapStateToProps = (state) => ({ name: 'all songs', songs: state.songs, id: 'songs' });
const SongsGloballyContainer = connect(mapStateToProps)(SongTable);
export default SongsGloballyContainer;
