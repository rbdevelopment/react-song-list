import React from 'react';
import PlaylistPanel from './PlaylistPanel';
import SongPanel from './SongPanel';
import PropTypes from 'prop-types';
import * as constants from '../logic/constants';

const AddPanel = ({ panelType, expanded, onButtonClick, onAdd, onCancel }) => {
    switch (panelType) {
        case constants.PLAYLIST_TYPE: {
            return (
                <section>
                    <button onClick={onButtonClick} className="btn btn-primary"><i className="glyphicon glyphicon-plus"></i> add playlist</button>
                    <PlaylistPanel
                        expanded={expanded}
                        onAdd={onAdd}
                        onCancel={onCancel} />
                </section>
            )
        }
        case constants.SONG_TYPE: {
            return (
                <section>
                    <button onClick={onButtonClick} className="btn btn-primary"><i className="glyphicon glyphicon-plus"></i> add song</button>
                    <SongPanel expanded={expanded}
                        onAdd={onAdd}
                        onCancel={onCancel} />
                </section>
            )
        }
        default: {
            return <div>Unknown panel type</div>;
        }
    }
}

AddPanel.propTypes = {
    panelType: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default AddPanel;