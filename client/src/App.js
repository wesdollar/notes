import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Notes from './pages/Notes.jsx';
import Home from './pages/Home.jsx';
import AddUpdateForm from './pages/AddUpdateForm';

class App extends Component {
  render() {
    const App = () => (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/notes/:id?' component={Notes} />
        <Route path='/notes-form/:id?' component={AddUpdateForm} />
      </Router> 
    )

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <App />
          </div>
        </div>
      </div>
    );
  }
}

export default App;