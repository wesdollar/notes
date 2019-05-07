import React from "react";
import PropTypes from "prop-types";
import Note from "../components/note";

const Notes = ({ notes }) => {
  if (!notes.length) {
    return <h2>No notes found.</h2>;
  }

  return (
    <React.Fragment>
      {notes.map(note => (
        <Note
          title={note.title}
          body={note.body}
          noteId={note.id}
          key={`note-${note.id}`}
        />
      ))}
    </React.Fragment>
  );
};

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

Notes.defaultProps = {
  notes: []
};

export default Notes;
