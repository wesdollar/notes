import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import List from './pages/List.jsx';
import Home from './pages/Home.jsx';

class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
          </Switch> 
        </header>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;