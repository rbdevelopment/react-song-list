import { connect } from 'react-redux'
import { addSongToPlaylist } from '../logic/actions';
import DragSelector from '../components/DragSelector';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    onDrop: (id) => {
        dispatch(addSongToPlaylist(id));
    }
});
const DragSelectorContainer =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(DragSelector);
export default DragSelectorContainer;
