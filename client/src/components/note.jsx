import React from 'react';
import PropTypes from 'prop-types';

const Note = ({id, title, body}) => {
    
    return <h1>{text}</h1>;
}

Note.propTypes = {
    id: PropTypes.int.isRequired
}

Note.defaultProps = {
    text: "Hello, World!"
};

export default Header;