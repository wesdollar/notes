import React from "react";
import PropTypes from "prop-types";

const handleOnClick = noteId => {
  window.location.href = `/notes-form/${noteId}`;
};

const Note = ({ title, body, noteId }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{body}</p>
    <button className="btn btn-primary" onClick={() => handleOnClick(noteId)}>
      Edit Note
    </button>
  </div>
);

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  noteId: PropTypes.number.isRequired
};

export default Note;
