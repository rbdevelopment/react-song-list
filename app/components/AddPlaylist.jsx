import React from 'react';
import PlaylistPanel from './PlaylistPanel';

const AddPlaylist = () => (
    <section>
        <button className="btn btn-primary"><i className="glyphicon glyphicon-plus"></i> add playlist</button>
        <PlaylistPanel />
    </section>
);

export default AddPlaylist;