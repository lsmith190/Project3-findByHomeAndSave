import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage.js'
import AllHomes from './components/AllHomes.js'
// import AddHome from './components/AddHome.js'
// import SingleHome from './components/SingleHome.js'
// import LovedHomes from './components/LovedHomes.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path={`user/${user}/homes`} component={AllHomes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
