import React, { Component } from 'react';
import '../App.css';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

class Base extends Component {
  render() {
    return (
        <Router basename="/react-auth-ui/">
        <div className="container register">
          <div className={"row"}>
          <div className={"col-md-3 register-left"}>
            <img
              src={"https://media.giphy.com/media/gkXSfmA8ynT59X9rr4/giphy.gif"}
              alt={''}
            />
            <h3>Welcome</h3>
            <p>
              You are 30 seconds away from knowing all about corona cases.
              </p>
              <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>
          </div>
            <div className="col-md-9 register-right">
             
  
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>
                <Route exact path="/" component={SignUpForm}>
                </Route>
                <Route path="/sign-in" component={SignInForm}>
                </Route>
                </div>
          </div>
          </div>
          
        </Router>
          
    );
  }
}

export default Base;