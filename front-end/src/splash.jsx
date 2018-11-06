import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class Splash extends Component {

  constructor(props) {
    super(props);
    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
  }

  redirectToLogin() {
    this.props.history.push('/login');
  }

  redirectToSignUp() {
    this.props.history.push('/sign_up');
  }

  render() {
    return (
      <div>
        <div>Splash page</div>
        <div>
          <button onClick={this.redirectToSignUp}>Sign Up</button>
        </div>
      </div>
    )
  }
}