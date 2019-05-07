import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export const Note = ({ title, body, noteId, history }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{body}</p>
    <button
      className="btn btn-primary"
      onClick={() => history.push(`/notes-form/${noteId}`)}
    >
      Edit Note
    </button>
  </div>
);

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  noteId: PropTypes.number.isRequired
};

export default withRouter(Note);
