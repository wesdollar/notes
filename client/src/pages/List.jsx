import React, { Component } from 'react';
import Header from "../components/header";

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
        <Header text="All Notes" />
        
        {notes.length ? (
          <React.Fragment>
            {notes.map((note) => {
              return (
                <div key={`note-${note.id}`}>
                  {note.title}
                </div>
              );
            })}
          </React.Fragment>
        ) : (
            <React.Fragment>
              <h2>No Notes Found</h2>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

export default List;