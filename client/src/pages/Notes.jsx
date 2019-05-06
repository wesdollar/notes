import React, { Component } from 'react';
import Header from "../components/header";
import Notes from "../components/notes";
import { Link } from "react-router-dom";

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getNotes();
  }

  // Retrieves the list of items from the Express app
  getNotes = () => {
    fetch('/api/getNotes')
      .then(res => res.json())
      .then(notes => this.setState({ notes }))
  }

  render() {
    const { notes } = this.state;

    return (
      <React.Fragment>
        <Link to={'./notes-form'}>
          <span className="btn btn-primary float-right">
            Add Note
          </span>
        </Link>
        <Header text="All Notes" />
        <Notes notes={notes} />
      </React.Fragment>
    );
  }
}

export default List;