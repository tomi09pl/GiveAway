

import React from 'react';
import './scss/App.scss';
import {HashRouter as Router, Switch,Route} from "react-router-dom";

import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login"/>
          <Route path="/signup"/>
          {/*<Route component={NotFound}/>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
