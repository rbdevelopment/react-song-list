import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';

ReactDOM.render(
  <DropdownButton bsStyle="primary" title="Example Boostrap Button">
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3">Active Item</MenuItem>
  </DropdownButton>,
  document.getElementById('app')
);
