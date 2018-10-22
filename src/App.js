import React, { Component } from 'react';
import './App.css';

import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse navbar-global navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">User Directory</span>
            </div>
          </div>
        </nav>
        <nav className="navbar-primary">
          <ul className="navbar-primary-menu">
            <li>
              <Link to="/">
                <span className="glyphicon glyphicon-th"></span><span className="nav-label">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="glyphicon glyphicon-th"></span><span className="nav-label">About</span>
              </Link>
            </li>
            <li>
              <Link to="/users">
                <span className="glyphicon glyphicon-th"></span><span className="nav-label">Users</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
