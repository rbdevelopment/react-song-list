import React from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
//import * as ReactDOM from 'react-dom';
//import Dragula from 'react-dragula';
import DropDownButtonContainer from '../containers/DropDownButtonContainer';
import SongsGloballyContainer from '../containers/SongsGloballyContainer';
import PlaylistContainer from '../containers/PlaylistContainer';

class DragSelector extends React.Component {
    componentDidMount = () => {
        //drag-container
        //var container = ReactDOM.findDOMNode(this);
        //dragula([container]);
    }
    render() {
        return <div className="row">
            <div className="col-xs-6">
                <h4 className="text-center">ALL YOUR SONGS</h4>
                <Provider store={this.props.store}>
                    <SongsGloballyContainer />
                </Provider>
            </div>
            <div className="col-xs-6">
                <Provider store={this.props.store}>
                    <DropDownButtonContainer />
                </Provider>
                <Provider store={this.props.store}>
                    <PlaylistContainer />
                </Provider>
            </div>
        </div>
    }
}

DragSelector.propTypes = {
    store: PropTypes.object
};

export default DragSelector;