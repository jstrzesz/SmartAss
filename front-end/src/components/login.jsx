import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
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

  render() {
    return (
      <div className="container" style={{backgroundColor: 'black'}}>
        <div className="row">
          <div className="col-md-12">
            <h2></h2>
            <form role="form">
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
                onClick={this.redirectToHome}>Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
