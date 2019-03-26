import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage.js'
import AllHomes from './components/AllHomes.js'
import NewHome from './components/NewHome.js'
// import SingleHome from './components/SingleHome.js'
// import LovedHomes from './components/LovedHomes.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/user/:userId/homes" component={AllHomes} />
          <Route exact path="/user/:userId/homes/new" component={NewHome} />
        </Switch>
      </Router>
    );
  }
}

export default App;
