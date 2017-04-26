import React from 'react';
import PropTypes from 'prop-types';
import { dropDownClassName } from './ui';

//add class open to btn-group
class DropDownButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    expand = () => this.setState({ expanded: true });
    collapse = () => this.setState({ expanded: false });
    onClick = () => {
        if (this.state.expanded)
            this.collapse();
        else
            this.expand();
    }

    render() {
        return (
            <div className={dropDownClassName(this.state.expanded)}>
                <button id={this.props.id}
                    type="button"
                    className="btn btn-default"
                    aria-haspopup="true"
                    aria-expanded={this.state.expanded}
                    onClick={this.onClick}>
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

DropDownButton.propTypes = {
    id: PropTypes.string.isRequired
};

export default DropDownButton;