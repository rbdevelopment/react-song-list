import React from 'react';
import PropTypes from 'prop-types';
class SongTable extends React.Component {
    removeSong = (songId) => (e) => {
        e.preventDefault();
        this.props.removeSong(songId);
    }
    removePlaylist = (name) => (e) => {
        e.preventDefault();
        this.props.removePlaylist(name);
    }
    render() {
        const head = <tr>
            <th>Remove</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Year</th>
        </tr>;

        if (!this.props.name) {
            return <table className="table table-condensed song-list">
                <thead>{head}</thead>
            </table>
        }

        let collection = <tr className='immovable'>
            <td colSpan="4"></td>
        </tr>;

        if (this.props.songs && this.props.songs.length) {
            collection = this.props.songs.map((song, index) => {
                return <tr key={index} id={song.id}>
                    <td>
                        <button onClick={this.removeSong(song.id)} className="btn btn-danger">
                            <i className="glyphicon glyphicon-remove"></i>
                        </button>
                    </td>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.year}</td>
                </tr>
            });
        }

        let footer = null;
        if (this.props.removePlaylist) {
            footer = <tr>
                <td colSpan="4">
                    <div className="text-right">
                        <button onClick={this.removePlaylist(this.props.name)} className="btn btn-danger">remove this list</button>
                    </div>
                </td>
            </tr>;
        }

        return <table className="table table-condensed song-list">
            <thead>{head}</thead>
            <tbody className="drag-container" id={this.props.id}>
                {collection}
            </tbody>
            <tfoot>{footer}</tfoot>
        </table>;
    }
}

SongTable.propTypes = {
    songs: PropTypes.array,
    name: PropTypes.string,
    id: PropTypes.string,
    removeSong: PropTypes.func,
    removePlaylist: PropTypes.func,
};

export default SongTable;
