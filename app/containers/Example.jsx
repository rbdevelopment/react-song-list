import { connect } from 'react-redux'
import App from '../components/Playlists';

const mapStateToProps = (state) => ({
    accepted: state.selectedPlaylist
});

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;