

import React from 'react';
import './scss/App.scss';
import {HashRouter as Router, Switch,Route} from "react-router-dom";

import Home from './components/Home';
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup"/>
          {/*<Route component={NotFound}/>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
