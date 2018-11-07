import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailCheck: false,
      passwordCheck: false
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.updatePasswordCheck = this.updatePasswordCheck.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
    this.validation = this.validation.bind(this);
  }

  validateEmail(event) {
    event.preventDefault();
    const userCredentials = {
      email: this.state.email,
      password: this.state.password,
      userCredentialsDenied: 'Email Address or Password Invalid, please enter again'
    }
    axios.post('/userCheck', userCredentials)
      .then((res) => {
        if (res) {
          this.updatePasswordCheck(res);
          console.log(this.state.passwordCheck)
          this.validation;
        } else {
          console.log('Email or password incorrect')       
        }
      })
  }

  updatePasswordCheck(bool) {
    this.state.passwordCheck = bool;
  }

  updateEmail(event) {
    event.preventDefault();
    this.state.email = event.target.value;
    console.log(this.state)
  }

  updatePassword(event) {
    event.preventDefault();
    this.state.password = event.target.value;
    console.log(this.state);
  }
  redirectToHome() {
    this.props.history.push('/home');
  }
  validation() {
    // setTimeout(() => {
      if (this.state.passwordCheck === true) {
        console.log('hello')
        this.redirectToHome();
      } else {
        console.log('lllksdfjalsd');
        <div>{this.state.userCredentialsDenied}</div>;
      }
    // }, 500)
  }

  sayHello() {
    console.log('hello')
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: 'black'}}>
        <div className="row">
          <div className="col-md-12">
            <h2></h2>
            <form role="form" onSubmit={this.validateEmail}>
              <div className="form-group">
                <label style={{ color: 'white' }}>Email Address</label>
                <input type="email" className="form-control" id="UsernameInput" onChange={this.updateEmail} />
              </div>
              <div className="form-group">
                <label style={{ color: 'white' }}>Password</label>
                <input type="password" className="form-control" id="PasswordInput" onChange={this.updatePassword}/>
              </div>
              <button type="submit"
                className="btn btn-primary"
                // onClick={this.validation}
                >Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
