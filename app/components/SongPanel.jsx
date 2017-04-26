import React from 'react';

export default class SongPanel extends React.Component {
    render() {
        return (<div id="song-popup" className="popup panel">
            <h5>Add new song to the list</h5>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="amount">Song title</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                    <input type="text" className="form-control" id="amount" autoComplete="off" />
                    <div className="control-validation"></div>
                </div>
            </div>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="amount">Song artist</label>&nbsp;&nbsp;&nbsp;
                            </span>
                    <input type="text" className="form-control" id="amount" autoComplete="off" />
                    <div className="control-validation"></div>
                </div>
            </div>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="amount">Release year</label>
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