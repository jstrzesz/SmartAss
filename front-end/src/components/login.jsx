import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(event) {
    event.preventDefault();
    this.state.username = event.target.value;
    console.log(this.state)
  }

  updatePassword(event) {
    event.preventDefault();
    this.state.password = event.target.value;
    console.log(this.state);
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: 'black'}}>
        <div className="row">
          <div className="col-md-12">
            <h2></h2>
            <form role="form">
              <div className="form-group">
                <label style={{ color: 'white' }}>Username</label>
                <input type="email" className="form-control" id="UsernameInput" onChange={this.updateUsername} />
              </div>
              <div className="form-group">
                <label style={{ color: 'white' }}>Password</label>
                <input type="password" className="form-control" id="PasswordInput" onChange={this.updatePassword}/>
              </div>
              <button type="submit"
                className="btn btn-primary"
                onClick={this.redirectToGameCreation}>Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
