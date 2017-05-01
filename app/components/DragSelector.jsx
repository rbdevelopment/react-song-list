import React from 'react';
import PropTypes from 'prop-types';
import Dragula from 'react-dragula';
import DropDownButtonContainer from '../containers/DropDownButtonContainer';
import SongsGloballyContainer from '../containers/SongsGloballyContainer';
import PlaylistContainer from '../containers/PlaylistContainer';

class DragSelector extends React.Component {
    componentDidMount = () => {
        const containers = [];
        let options = {
            isContainer: function (el) {
                return el.classList.contains('drag-container');
            },
            copy: true,
            revertOnSpill: true,
            accepts: function (el, target) {
                return target.id === 'playlists'
            },
            invalid: function (el) {
                return el.className === 'immovable';
            }
        };

        const onDrop = this.props.onDrop;
        const drake = Dragula(containers, options);
        drake.on('drop', function (el) {
            onDrop(parseInt(el.id));
            this.cancel();
        });
    }
    render() {
        return <div className="row">
            <div className="col-md-6">
                <h4 className="text-center">ALL YOUR SONGS</h4>
                <SongsGloballyContainer />
            </div>
            <div className="col-md-6">
                <DropDownButtonContainer />
                <PlaylistContainer />
            </div>
        </div>
    }
}

DragSelector.propTypes = {
    store: PropTypes.object,
    onDrop: PropTypes.func
};

export default DragSelector;