import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { get } from "lodash";
import Header from "./header";

class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      isUpdating: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateNote = this.handleUpdateNote.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  getNote(noteId) {
    return fetch(`/api/notes/${noteId}`)
      .then(res => res.json())
      .then(note =>
        this.setState({
          title: note.title,
          body: note.body
        })
      );
  }

  componentDidMount() {
    const { props } = this;
    const noteId = get(props, "match.params.id", false);

    if (noteId) {
      this.setState({ isUpdating: true });
      this.getNote(noteId);
    }
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleCreateNote(data) {
    return fetch("/api/createNote", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(this.props.history.push("/notes"))
      .catch(error => console.error("Error:", error));
  }

  handleUpdateNote(data) {
    return fetch(`/api/updateNote/${this.props.match.params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(this.props.history.push("/notes"))
      .catch(error => console.error("Error:", error));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body, isUpdating } = this.state;

    const data = {
      title,
      body
    };

    if (isUpdating) {
      return this.handleUpdateNote(data);
    }

    return this.handleCreateNote(data);
  }

  render() {
    const { isUpdating } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Header text={isUpdating ? "Edit Note" : "Add Note"} />
        <div className="form-group">
          <label className="d-block">
            Title:
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={event => this.handleChange(event, "title")}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="d-block">
            Note:
            <textarea
              rows="7"
              className="form-control"
              value={this.state.body}
              onChange={event => this.handleChange(event, "body")}
            />
          </label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default withRouter(NotesForm);
