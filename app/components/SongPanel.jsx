import React from 'react';
import PropTypes from 'prop-types';
import { panelClassName } from './ui';

class SongPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            year: ''
        }
    }
    clearForm = () => this.setState({
        title: '',
        artist: '',
        year: ''
    })
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState({
            title: title,
            artist: this.state.artist,
            year: this.state.year
        });
    }
    onArtistChange = (e) => {
        const artist = e.target.value;
        this.setState({
            title: this.state.title,
            artist: artist,
            year: this.state.year
        });
    }
    onYearChange = (e) => {
        const year = e.target.value;
        this.setState({
            title: this.state.title,
            artist: this.state.artist,
            year: year
        });
    }
    onAddButton = () => {
        this.props.onAdd({
            title: this.state.title,
            artist: this.state.artist,
            year: this.state.year
        });
        this.clearForm();
    }
    onCancelButton = () => {
        this.props.onCancel();
        this.clearForm();
    }
    render() {
        return (<div id="song-popup" className={panelClassName(this.props.expanded)}>
            <h5>Add new song</h5>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="title">Song title</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input onChange={this.onTitleChange} value={this.state.title} type="text" className="form-control" id="title" autoComplete="off" />
                    <div className="control-validation"></div>
                </div>
            </div>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="artist">Song artist</label>&nbsp;&nbsp;&nbsp;</span>
                    <input onChange={this.onArtistChange} value={this.state.artist} type="text" className="form-control" id="artist" autoComplete="off" />
                    <div className="control-validation"></div>
                </div>
            </div>
            <div className="m1">
                <div className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="year">Release year</label>
                    </span>
                    <input onChange={this.onYearChange} value={this.state.year} type="text" className="form-control" id="year" autoComplete="off" />
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

SongPanel.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onAdd: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default SongPanel;