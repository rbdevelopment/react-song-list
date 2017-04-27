import React from 'react';
import PropTypes from 'prop-types';
import { panelClassName } from './ui';

class PlaylistPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    clearName = () => this.setState({ name: '' });
    onCancelButton = () => {
        this.props.onCancel();
        this.clearName();
    }
    onAddButton = () => {
        this.props.onAdd({name: this.state.name});
        this.clearName();
    }
    onChange = (e) => {
        const value = e.target.value;
        this.setState({ name: value });
    }
    componentWillReceiveProps = (nextProps) => {
        if (!nextProps.expanded)
            this.clearName();
    }
    render() {
        return (<div id="playlist-popup" className={panelClassName(this.props.expanded)}>
            <h5>Add new playlist</h5>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="name">Playlist name</label>
                    </span>
                    <input onChange={this.onChange} value={this.state.name} type="text" className="form-control" id="name" autoComplete="off" />
                    <div className="control-validation"></div>
                </div>
            </div>
            <div className="m1 btn-group">
                <button onClick={this.onAddButton} className="btn btn-success">add</button>
                <button onClick={this.onCancelButton} className="btn btn-danger">cancel</button>
            </div>
        </div>);
    }
}

PlaylistPanel.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onAdd: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default PlaylistPanel;