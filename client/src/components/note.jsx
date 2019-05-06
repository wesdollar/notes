import React from 'react';
import PropTypes from 'prop-types';

const Note = ({title, body}) => (
    <div className="note">
        <h1>{title}</h1>
        <p>
            {body}
        </p> 
    </div>
);

Note.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Note;