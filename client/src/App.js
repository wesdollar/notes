import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Notes from './pages/Notes.jsx';
import Home from './pages/Home.jsx';
import AddUpdateForm from './pages/AddUpdateForm';

class App extends Component {
  render() {
    const App = () => (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/list' component={Notes}/>
        <Route path='/notes-form' component={AddUpdateForm}/>
      </Switch> 
    )

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <App/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;