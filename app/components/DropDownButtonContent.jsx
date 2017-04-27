import React from 'react';
import PropTypes from 'prop-types';
const DropDownButtonContent = ({ text }) => {
    return (<span>{text + ' '}<span className="caret"></span></span>);
};

DropDownButtonContent.propTypes = {
    text: PropTypes.string
};

export default DropDownButtonContent;