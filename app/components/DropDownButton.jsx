import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside'
import { dropDownClassName } from './ui';
import DropDownButtonContent from './DropDownButtonContent';

class DropDownButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            data: this.prepareData(props.items || []) || [],
            content: 'select playlist'
        };
    }
    
    prepareData = (items) => items.map((item, index) => {
        return { key: index, value: item };
    });
    expand = () => this.setState({ expanded: true });
    collapse = () => this.setState({ expanded: false });
    onClick = () => {
        if (this.state.expanded)
            this.collapse();
        else
            this.expand();
    }
    handleClickOutside = () => this.collapse();
    select = (value) => (e) => {
        e.preventDefault();
        this.setState({content: value});
        this.collapse();
        this.onItemChanged(value);
    }

    render() {
        return (
            <div className={dropDownClassName(this.state.expanded)}>
                <button id={this.props.id}
                    type="button"
                    className="btn btn-default"
                    aria-haspopup="true"
                    aria-expanded={this.state.expanded}
                    onClick={this.onClick}><DropDownButtonContent text={this.state.content} /></button>
                <ul className="dropdown-menu">
                    {this.state.data.map((item) => {
                        return <li key={item.key}><a
                            onClick={this.select(item.value)} href="#">
                            {item.value}</a>
                        </li>;
                    })}
                </ul>
            </div>
        )
    }
}

DropDownButton.propTypes = {
    id: PropTypes.string.isRequired,
    items: PropTypes.array,
    onItemChanged: PropTypes.func
};

export default onClickOutside(DropDownButton);