

import React from 'react';
import './scss/App.scss';
import {HashRouter as Router, Switch,Route} from "react-router-dom";

import Home from './components/Home';
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import LogOut from "./components/LogOut";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/logout" component={LogOut}/>
          {/*<Route component={NotFound}/>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
