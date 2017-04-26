import React from 'react';

export default class PlaylistPanel extends React.Component {
    render() {
        return (<div id="playlist-popup" className="popup panel vh">
            <h5>Add new playlist</h5>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="amount">Playlist name</label>
                    </span>
                    <input type="text" className="form-control" id="amount" autoComplete="off" />
                    <div className="control-validation"></div>
                </div>
            </div>
            <div className="m1 btn-group">
                <button className="btn btn-success">add</button>
                <button className="btn btn-danger">cancel</button>
            </div>
        </div>);
    }
}