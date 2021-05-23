import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Base from './pages/Base';
import Check from './pages/Check';
function App() {
  return (
          
          <Router basename="/react-auth-ui/">
                <Route exact path="/" component={Base}>
                </Route>
                <Route path="/sign-in" component={Base}>
                </Route>
                <Route path="/Check" component={Check}>
                </Route>
           
        </Router>
     
  );
}

export default App;