import React from 'react';
import PropTypes from 'prop-types';

const SongTable = ({ songs }) => {
    let collection = null;
    if (songs) {
        collection = songs.map((song, index) => {
            return <tr key={index}>
                <td>
                    <button className="btn btn-danger">
                        <i className="glyphicon glyphicon-remove"></i>
                    </button>
                </td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.year}</td>
            </tr>
        });
    }

    const footer = <tr>
        <td colSpan="4">
            <div className="text-right">
                <button className="btn btn-danger">remove this list</button>
            </div>
        </td>
    </tr>;

    const head = <tr>
        <th>Remove</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Year</th>
    </tr>;

    return <table className="table table-condensed song-list">
        <thead>{head}</thead>
        <tbody>{collection}</tbody>
        <tfoot>{footer}</tfoot>
    </table>;
}

SongTable.propTypes = {
    songs: PropTypes.array
};

export default SongTable;
