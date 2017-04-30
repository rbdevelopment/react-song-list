import { connect } from 'react-redux'
import SongTable from '../components/SongTable';

const mapStateToProps = (state) => ({ songs: state.songs });
const SongsGloballyContainer = connect(mapStateToProps)(SongTable);
export default SongsGloballyContainer;
