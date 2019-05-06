import React from 'react';
import PropTypes from 'prop-types';

const Header = ({text}) => {
    
    return <h1>{text}</h1>;
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

Header.defaultProps = {
    text: "Hello, World!"
};

export default Header;