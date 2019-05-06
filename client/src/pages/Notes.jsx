import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/header";
import Notes from "../components/notes";
import { Link } from "react-router-dom";
import { get } from "lodash";

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      isSingleNote: false
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    const { props } = this;
    const noteId = get(props, "match.params.id", false);

    if (noteId) {
      this.setState({ isSingleNote: true });
      this.getSingleNote(noteId);
    }
    else {
      this.getNotes();
    }
    
  }

  // Retrieves the list of items from the Express app
  getNotes = () => {
    fetch('/api/getNotes')
      .then(res => res.json())
      .then(notes => this.setState({ notes }));
  }

  getSingleNote = noteId => {
    fetch(`/api/notes/${noteId}`)
      .then(res => res.json())
      .then(notes => this.setState({ notes: [notes] }));
  }

  render() {
    const { notes, isSingleNote } = this.state;

    return (
      <React.Fragment>
        <Link to={'./notes-form'}>
          <span className="btn btn-primary float-right">
            Add Note
          </span>
        </Link>
        <Header text={ isSingleNote ? "Your Note" : "All Notes" } />
        <Notes notes={notes} />
      </React.Fragment>
    );
  }
}

export default withRouter(List);