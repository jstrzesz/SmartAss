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
      <div className="container" style={{backgroundColor: 'black'}}>
        <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-8">
              <div style={{color: 'white'}}>Splash page</div>
                <button style={{ backgroundColor: 'white' }} onClick={this.redirectToSignUp}>Sign Up</button>
                <button style={{backgroundColor: 'white'}} onClick={this.redirectToLogin}>Login</button>
              
            </div>
          <div className="col-md-2"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}