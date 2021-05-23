import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../App.css';

class SignInForm extends Component {
  constructor(props){
    super(props)
    let loggedIn = false
    this.state = {
      student_no: '',
      password: ''
    }
  }
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('https://ionic-server-app.herokuapp.com/trainee/login', this.state)
      .then(response => {
        console.log(response)
        if(   response.data.Login = 'true')
        {
          localStorage.setItem("token", response.data.token )
          this.setState({
              loggedIn: true
          })
        }
        
      })
      .catch(error => {
        alert("please check username and password")
        console.log(error)
      })

  }
  render() {
    if(this.state.loggedIn){
      return <Redirect to="/Check" />
    }
    const { student_no, password } = this.state
    return (
          <div className={"col-md-9 register-right"}>
            <div className={"tab-content"} id={"myTabContent"}>
              <div
                className={"tab-pane fade show active"}
                id={"home"}
                role={"tabpanel"}
                aria-labelledby={"home-tab"}
              >
                <h3 className={"register-heading"}>Login as a Member</h3>
                <form onSubmit={this.submitHandler}>
                <div className={"row register-form"}>
                  <div className={"col-md-6"}>
                    <div className={"form-group"}>
                      <input
                        type={"number"}
                        className={"form-control"}
                        name={"student_no"}
                        value={student_no}
                        onChange={this.changeHandler}
                        placeholder={"Student No *"}
                      />
                    </div>
                    <div className={"form-group"}>
                      <input
                        type={"password"}
                        className={"form-control"}
                        placeholder={"Password *"}
                        name={"password"}
                        value={password}
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary " type="submit">Login</button>
              </div>
              </form>
              </div>
            </div>
          </div>
          
    );
  }
}

export default SignInForm;