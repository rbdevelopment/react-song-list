import React from 'react';

const Playlists = () => (
    <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">select playlist <span className="caret"></span>
        </button>
        <ul className="dropdown-menu dropdown-show" aria-labelledby="dropdownMenu1">
            <li><a href="#">Wedding songs</a></li>
            <li><a href="#">Pub gig</a></li>
        </ul>
    </div>
);

export default Playlists;