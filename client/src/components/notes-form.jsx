import React, { Component } from 'react';

class NotesForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            body: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field) {
        this.setState({[field]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { title, body } = this.state;
        
        const data = {
            title,
            body
        };

        fetch("/api/createNote", {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .catch(error => console.error('Error:', error));
    } 

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Title:
                        <input type="text" className="form-control" value={this.state.title} onChange={event => this.handleChange(event, "title")} />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Note:
                        <input type="text" className="form-control" value={this.state.body} onChange={event => this.handleChange(event, "body")} />
                    </label>
                </div>
                <button className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}

export default NotesForm;