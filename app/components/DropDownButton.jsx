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
            items: this.prepareData(props.items) || [],
            content: this.props.selectedPlaylist
        };
    }
    componentWillReceiveProps = (nextProps) => this.setState({
        items: this.prepareData(nextProps.items) || [],
        content: nextProps.selectedPlaylist
    });
    prepareData = (items = []) => items.map((item, index) => ({ key: index, value: item }))
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
        this.props.onItemChanged(value);
        this.collapse();
    }
    render() {
        const collection = this.state.items.map((item) => {
            return <li key={item.key}><a onClick={this.select(item.value)} href="#">
                {item.value}</a>
            </li>;
        });

        return (
            <div className={dropDownClassName(this.state.expanded)}>
                <button
                    type="button"
                    className="btn btn-default"
                    aria-haspopup="true"
                    aria-expanded={this.state.expanded}
                    onClick={this.onClick}><DropDownButtonContent text={this.state.content} /></button>
                <ul className="dropdown-menu">
                    {collection}
                </ul>
            </div>
        )
    }
}

DropDownButton.propTypes = {
    selectedPlaylist: PropTypes.string,
    items: PropTypes.array,
    onItemChanged: PropTypes.func
};

export default onClickOutside(DropDownButton);
