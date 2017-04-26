import React from 'react';
import SongPanel from './SongPanel';

const AddSong = () => (
    <section>
        <button className="btn btn-primary">
            <i className="glyphicon glyphicon-plus"></i> add song</button>
        <SongPanel />
    </section>
);

export default AddSong;