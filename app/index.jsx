import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';

ReactDOM.render(
  <DropdownButton bsStyle="default" title="select playlist">
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3">Active Item</MenuItem>
  </DropdownButton>,
  document.getElementById('playlists')
);
