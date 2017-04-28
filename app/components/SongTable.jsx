import React from 'react';
import PropTypes from 'prop-types';

const SongTable = ({ songs }) => {
    let collection = null;
    if (songs.length) {
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
    return <table className="table table-condensed song-list">
        <thead>
            <tr>
                <th>Remove</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>{collection}</tbody>
    </table>;
}

SongTable.propTypes = {
    songs: PropTypes.array
};

export default SongTable;
