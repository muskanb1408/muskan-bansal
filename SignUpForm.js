import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      student_no: '',
      branch: '',
      mobile_no: '',
      email: '',
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
      .post('https://ionic-server-app.herokuapp.com/trainee/register', this.state)
      .then(response => {
        console.log(response)
        alert("Succesful Registered pls Login")
      })
      .catch(error => {
        alert("Error Pls check your Info!")
        console.log(error)
      })
  }
  render() {
    const { name, student_no, branch, mobile_no , email, password } = this.state
    return (
      
      <div className={"col-md-9 register-right"}>
       <div className={"tab-content"} id={"myTabContent"}>
         <div
           className={"tab-pane fade show active"}
           id={"home"}
           role={"tabpanel"}
           aria-labelledby={"home-tab"}
         >
           <h3 className={"register-heading"}>Sign up as a Member</h3>
          <form onSubmit={this.submitHandler}>
          <div className={"row register-form"}>
             <div className={"col-md-6"}>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Your Name *"}
                   name={"name"}
                   value={name}
                   onChange={this.changeHandler}
                 />
               </div>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Your Stu. No *"}
                   name={"student_no"}
                   value={student_no}
                   onChange={this.changeHandler}
                 />
               </div>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Your Branch *"}
                   name={"branch"}
                   value={branch}
                   onChange={this.changeHandler}
                 />
               </div>
               
               </div>
               <div className={"col-md-6"}>
               <div className={"form-group"}>
                 <input
                   type={"text"}
                   className={"form-control"}
                   placeholder={"Your Cell No *"}
                   name={"mobile_no"}
                   value={mobile_no}
                   onChange={this.changeHandler}
                 />
               </div>
               <div className={"form-group"}>
                 <input
                   type={"email"}
                   className={"form-control"}
                   placeholder={"Your Email *"}
                   name={"email"}
                   value={email}
                   onChange={this.changeHandler}
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
               <div className={"col-md-6"}>
               <button className="btn btn-primary " type="submit">SignUp</button>
               </div>
             
           </div>
           </form>
               
             
         </div>
       </div>
     </div>
    );
  }
}

export default SignUpForm;