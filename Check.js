  
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Net from './Net';
class Check extends Component {
    constructor(props) {
      super(props)
      const token = localStorage.getItem("token")
      let loggedIn = true
      if(token == null) {
        loggedIn = false
      }
      this.state = {
        loggedIn
      }
    }
  
  render(){
      if(this.state.loggedIn === false)
      {
          return <Redirect to="\sign-in" />
      }
      return(
          <Net />
      )

  }
}
export default Check;