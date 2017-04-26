import React from 'react';

//add class open to btn-group
class DropDownButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    select playlist <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                </ul>
            </div>
        )
    }
}

export default DropDownButton;